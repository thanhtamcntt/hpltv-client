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

function HeaderNavBar() {
  return (
    <DivNavbar>
      <RowNavbar>
        <ColLeft span={7} lg={8} xl={7}>
          <Link to="/">ShowHub</Link>
        </ColLeft>
        <ColRight span={17} lg={16} xl={17}>
          <ListNav>
            <ItemNav>
              <Link to="/">Movies</Link>
            </ItemNav>
            <ItemNav>
              <Link to="/">Series</Link>
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
