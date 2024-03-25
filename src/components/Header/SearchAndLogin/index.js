import React, { useContext, useEffect, useState } from 'react';
import {
  ColLeft,
  ColRight,
  DivSearch,
  ButtonProfile,
  RowSearch,
  ProfileUser,
  ImageAvatar,
  NameUser,
  ButtonLogout,
} from './styles';
import { Link } from 'react-router-dom';
import InputSearchLayout from '../../Common/InputSearch/InputSearch';
import { jwtDecode } from 'jwt-decode';
import { Dropdown } from 'antd';

function HeaderSearchLogin() {
  const [user, setUser] = useState(
    jwtDecode(localStorage.getItem('token')).user || undefined,
  );

  const handleLogout = async () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      window.location.reload();
    }
  };

  const items = [
    {
      key: 'profile',
      label: <Link to="/my-profile">My profile</Link>,
    },
    {
      key: 'myFavoriteMovies',
      label: <Link to="/my-favorite-movies">My Favorite Movies</Link>,
    },
    {
      key: 'packageUpgrade',
      label: <Link to="/package-upgrade">Package Upgrade</Link>,
    },
    {
      key: 'logout',
      label: <ButtonLogout onClick={handleLogout}>Log out</ButtonLogout>,
    },
  ];

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      setUser(JSON.parse(localStorage.getItem('userInfo')));
    }
  }, []);

  return (
    <DivSearch>
      <RowSearch>
        <ColLeft span={16} lg={16} xl={16}>
          <InputSearchLayout />
        </ColLeft>
        <ColRight span={8} lg={8} xl={8}>
          <ProfileUser>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow>
              <ButtonProfile>
                <NameUser>
                  {user.lastName} {user.firstName}
                </NameUser>
                <ImageAvatar src={user.avatarUser.url} alt="image user" />
              </ButtonProfile>
            </Dropdown>
          </ProfileUser>
        </ColRight>
      </RowSearch>
    </DivSearch>
  );
}

export default HeaderSearchLogin;
