import React from 'react';
import {
  ColCompany,
  DivCompany,
  RowCompany,
  TextTitle,
  DivSearch,
} from './styles';
import { Link } from 'react-router-dom';
import InputSearchLayout from '../../../layout/InputSearch/InputSearch';

function Company() {
  return (
    <DivCompany>
      <TextTitle>Company</TextTitle>
      <RowCompany>
        <ColCompany span={12}>
          <Link to="/">Register</Link>
        </ColCompany>
        <ColCompany span={12}>
          <Link to="/">Login</Link>
        </ColCompany>
      </RowCompany>
      <RowCompany>
        <ColCompany span={12}>
          <Link to="/">Wishlist</Link>
        </ColCompany>
        <ColCompany span={12}>
          <Link to="/">Our Products</Link>
        </ColCompany>
      </RowCompany>
      <DivSearch>
        <InputSearchLayout />
      </DivSearch>
    </DivCompany>
  );
}

export default Company;
