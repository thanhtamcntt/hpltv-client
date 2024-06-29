import React, { useContext, useEffect, useState } from 'react';
import {
  ColLeft,
  ColRight,
  DivHeader,
  RowHeader,
  ContentHeader,
  ContainerHeader,
  Navbar,
  ItemNav,
  ListNav,
} from './styles';
import HeaderNavBar from './Navbar';
import HeaderSearchLogin from './SearchAndLogin';
import HeaderMobile from './HeaderMobile';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return (
    <ContainerHeader>
      <DivHeader>
        <ContentHeader>
          {width >= 992 ? (
            <>
              <RowHeader>
                <ColLeft span={14}>
                  <HeaderNavBar />
                </ColLeft>
                <ColRight span={10}>
                  <HeaderSearchLogin />
                </ColRight>
              </RowHeader>
              <Navbar>
                <ListNav>
                  <ItemNav>
                    <Link
                      to="/"
                      className={pathname === '/' && 'bg-header-navbar'}>
                      Home
                    </Link>
                  </ItemNav>
                  <ItemNav>
                    <Link
                      to="/movies"
                      className={
                        pathname.slice(1) === 'movies' && 'bg-header-navbar'
                      }>
                      Movies
                    </Link>
                  </ItemNav>
                  <ItemNav>
                    <Link
                      to="/series"
                      className={
                        pathname.slice(1) === 'series' && 'bg-header-navbar'
                      }>
                      Series
                    </Link>
                  </ItemNav>
                  <ItemNav>
                    <Link
                      to="/contact"
                      className={
                        pathname.slice(1) === 'contact' && 'bg-header-navbar'
                      }>
                      Contact Us
                    </Link>
                  </ItemNav>
                  <ItemNav>
                    <Link
                      to="/terms-and-conditions"
                      className={
                        pathname.slice(1) === 'terms-and-conditions' &&
                        'bg-header-navbar'
                      }>
                      Terms and Conditions
                    </Link>
                  </ItemNav>
                </ListNav>
              </Navbar>
            </>
          ) : (
            <RowHeader>
              <HeaderMobile />
            </RowHeader>
          )}
        </ContentHeader>
      </DivHeader>
    </ContainerHeader>
  );
}

export default Header;
