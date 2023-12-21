import React from 'react';
import {
  DivMenu,
  DivContentMenu,
  DivPage,
  DivAction,
  ListNav,
  ItemNav,
  ListNavAction,
  ItemNavAction,
  TextTitle,
  ButtonMenu,
} from './styles';
import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
function HeaderMenu(props) {
  const hideMenu = () => {
    props.setShow(false);
  };
  return (
    <DivMenu>
      <DivContentMenu>
        <ButtonMenu onClick={hideMenu}>
          <CloseOutlined />
        </ButtonMenu>
        <TextTitle>ShowHub</TextTitle>
        <DivPage>
          <ListNav>
            <ItemNav>
              <Link to="/">
                <span>Movies</span>
                <span>
                  <RightOutlined />
                </span>
              </Link>
            </ItemNav>
            <ItemNav>
              <Link to="/">
                <span>Series</span>
                <span>
                  <RightOutlined />
                </span>
              </Link>
            </ItemNav>
            <ItemNav>
              <Link to="/">
                <span>Contact</span>
                <span>
                  <RightOutlined />
                </span>
              </Link>
            </ItemNav>
            <ItemNav>
              <Link to="/">
                <span>About Us</span>
                <span>
                  <RightOutlined />
                </span>
              </Link>
            </ItemNav>
          </ListNav>
        </DivPage>
        <DivAction>
          <ListNavAction>
            <ItemNavAction span={12}>
              <Link to="/">Sign in</Link>
            </ItemNavAction>
            <ItemNavAction span={12}>
              <Link to="/">Sign up</Link>
            </ItemNavAction>
          </ListNavAction>
        </DivAction>
      </DivContentMenu>
    </DivMenu>
  );
}

export default HeaderMenu;
