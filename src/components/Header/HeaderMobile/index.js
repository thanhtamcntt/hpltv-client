import React, { useState } from 'react';
import { ColLeft, ColRight, DivHeader, RowHeader } from './styles';
import HeaderNavBar from './Navbar';
import HeaderSearch from './Search';
import HeaderMenu from './Menu';

function HeaderMobile() {
  const [show, setShow] = useState(false);
  return (
    <DivHeader>
      <RowHeader>
        <ColLeft span={8}>
          <HeaderNavBar />
        </ColLeft>
        <ColRight span={16}>
          <HeaderSearch setShow={setShow} />
        </ColRight>
      </RowHeader>
      {show && <HeaderMenu setShow={setShow} />}
    </DivHeader>
  );
}

export default HeaderMobile;
