import Router from './routes';
import './App.css';
import Layout from './layout/index';
import { React, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Spin } from 'antd';

import LandingPage from './components/page/LandingPage';
import LoginPage from './components/page/LoginPage';
import SignupPage from './components/page/SignupPage';
import { jwtDecode } from 'jwt-decode';
import PaymentPage from './components/page/PaymentPage';
import OptionCheckoutPage from './components/page/OptionCheckoutPage';
import PaySuccessPage from './components/page/PaySuccessPage';
import CheckoutFormComponent from './components/Common/CheckoutFormComponent';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const getOrder = async () => {
      const user = await JSON.parse(localStorage.getItem('userInfo'));
      const data = {
        userId: user._id,
      };
      const response = await fetch(
        process.env.REACT_APP_API_GET_PACKAGE_PAYMENT,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      const responseJson = await response.json();
      console.log('json-appjs', responseJson);
      if (responseJson.success === true) {
        console.log('json-appjs true');
        setIsPayment(true);
      } else {
        setIsPayment(false);
        console.log('json-appjs false');
      }
    };
    if (localStorage.getItem('token')) {
      getOrder();
    }
  }, [pathname]);

  useEffect(() => {
    setIsLogin(undefined);
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const tokenDecoded = jwtDecode(localStorage.getItem('token'));
      const dateExpiresIn = new Date(tokenDecoded.exp);
      const currentDate = new Date();
      if (currentDate > dateExpiresIn) {
        localStorage.clear();
        const tokenUser = localStorage.getItem('token');
        if (tokenUser === null) {
          window.location.reload();
        }
      }
    }
  }, [new Date() + 60 * 1000]);

  if (isLogin === undefined) {
    return (
      <div className="loading-component">
        <div>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      {isPayment ? (
        <Layout>
          <Router />
        </Layout>
      ) : isLogin ? (
        <Routes>
          <Route
            path="/choose-payment"
            element={<PaymentPage login={false} />}
          />
          <Route
            path="/payment-success"
            element={<PaySuccessPage login={false} />}
          />
          <Route
            path="/option-checkout"
            element={<OptionCheckoutPage login={false} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutFormComponent login={false} />}
          />
          <Route
            path="*"
            element={<Navigate to={'/choose-payment'} replace={true} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="*"
            element={<Navigate to={'/landing-page'} replace={true} />}
          />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
