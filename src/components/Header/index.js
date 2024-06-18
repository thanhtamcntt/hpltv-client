import React, { useContext, useEffect, useState } from 'react';
import {
  ColLeft,
  ColRight,
  DivHeader,
  RowHeader,
  ContentHeader,
  ContainerHeader,
} from './styles';
import HeaderNavBar from './Navbar';
import HeaderSearchLogin from './SearchAndLogin';
import HeaderMobile from './HeaderMobile';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

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
            <RowHeader>
              <ColLeft span={14}>
                <HeaderNavBar />
              </ColLeft>
              <ColRight span={10}>
                <HeaderSearchLogin />
              </ColRight>
            </RowHeader>
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
