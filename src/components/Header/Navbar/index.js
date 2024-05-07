import React from 'react';
import {
  ColLeft,
  ColRight,
  DivNavbar,
  ItemNav,
  ListNav,
  RowNavbar,
} from './styles';
import { Link } from 'react-router-dom';
import LogoImage from '../../Common/ImageBanner';

function HeaderNavBar() {
  return (
    <DivNavbar>
      <RowNavbar>
        <ColLeft span={7} lg={8} xl={7}>
          <Link to="/">
            <LogoImage height="100%" width="90%" />
          </Link>
        </ColLeft>
        <ColRight span={17} lg={16} xl={17}>
          <ListNav>
            <ItemNav>
              <Link to="/movies">Movies</Link>
            </ItemNav>
            <ItemNav>
              <Link to="/series">Series</Link>
            </ItemNav>
            <ItemNav>
              <Link to="/">Contact</Link>
            </ItemNav>
            <ItemNav>
              <Link to="/">About Us</Link>
            </ItemNav>
          </ListNav>
        </ColRight>
      </RowNavbar>
    </DivNavbar>
  );
}

export default HeaderNavBar;
