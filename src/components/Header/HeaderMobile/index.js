import React, { useState } from 'react';
import { ColLeft, ColRight, DivHeader, RowHeader } from './styles';
import HeaderNavBar from './Navbar';
import HeaderSearch from './Search';
import HeaderMenu from './Menu';
import { Drawer } from 'antd';

function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <DivHeader>
      <RowHeader>
        <ColLeft span={8}>
          <HeaderNavBar />
        </ColLeft>
        <ColRight span={16}>
          <HeaderSearch onclick={showDrawer} />
        </ColRight>
      </RowHeader>

      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        className="drawerHeaderMenu">
        <HeaderMenu />
      </Drawer>
    </DivHeader>
  );
}

export default HeaderMobile;
