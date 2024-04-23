import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const CheckLoginContext = createContext();

function LoginContext({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [isLogin, setIsLogin] = useState(undefined);

  const { pathname } = useLocation();

  const getOrder = async (userId) => {
    const data = {
      userId: userId,
    };
    const response = await fetch(
      process.env.REACT_APP_API_GET_PACKAGE_PAYMENT,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
        },
      },
    );
    const responseJson = await response.json();
    console.log(responseJson.success);
    if (responseJson.success === true) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await fetch(process.env.REACT_APP_API_VERIFY_TOKEN, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
        },
      });
      const json = await response.json();
      if (json.success) {
        setUserInfo(json.userInfo);
        if (getOrder(json.userInfo._id) === true) {
          setIsLogin(2);
        } else {
          setIsLogin(1);
        }
      } else {
        setUserInfo('');
        setIsLogin(0);
      }
    };
    if (localStorage.getItem('tokenUser')) {
      fetchUserInfo();
    } else {
      setUserInfo('');
      setIsLogin(0);
    }
  }, [pathname]);

  useEffect(() => {
    setIsUpdateUser(false);
    const fetchUserInfo = async () => {
      const response = await fetch(process.env.REACT_APP_API_VERIFY_TOKEN, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
        },
      });
      const json = await response.json();
      if (json.success) {
        setUserInfo(json.userInfo);
      } else {
        setUserInfo('');
      }
    };
    if (localStorage.getItem('tokenUser')) {
      fetchUserInfo();
    } else {
      setUserInfo('');
    }
  }, [isUpdateUser]);

  const updateUserInfo = (token) => {
    const updateToken = async () => {
      await localStorage.removeItem('tokenUser');
      await localStorage.setItem('tokenUser', token);
      setIsUpdateUser((prev) => !prev);
    };
    updateToken();
  };

  return (
    <CheckLoginContext.Provider value={{ userInfo, isLogin, updateUserInfo }}>
      {children}
    </CheckLoginContext.Provider>
  );
}

export default LoginContext;
