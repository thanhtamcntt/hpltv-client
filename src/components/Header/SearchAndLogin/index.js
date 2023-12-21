import React from 'react';
import {
  ColLeft,
  ColRight,
  DivSearch,
  ItemNav,
  ListNav,
  RowSearch,
} from './styles';
import { Link } from 'react-router-dom';
import InputSearchLayout from '../../../layout/InputSearch/InputSearch';

function HeaderSearchLogin() {
  return (
    <DivSearch>
      <RowSearch>
        <ColLeft span={15} lg={14} xl={15}>
          <InputSearchLayout />
        </ColLeft>
        <ColRight span={9} lg={10} xl={9}>
          <ListNav>
            <ItemNav span={12}>
              <Link to="/">Sign in</Link>
            </ItemNav>
            <ItemNav span={12}>
              <Link to="/">Sign up</Link>
            </ItemNav>
          </ListNav>
        </ColRight>
      </RowSearch>
    </DivSearch>
  );
}

export default HeaderSearchLogin;
