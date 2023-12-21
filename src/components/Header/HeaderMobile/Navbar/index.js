import React from 'react';
import { DivNavbar } from './styles';
import { Link } from 'react-router-dom';

function HeaderNavBar() {
  return (
    <DivNavbar>
      <Link to="/">ShowHub</Link>
    </DivNavbar>
  );
}

export default HeaderNavBar;
