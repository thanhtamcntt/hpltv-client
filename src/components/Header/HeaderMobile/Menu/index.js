import React from 'react';
import {
  DivMenu,
  DivPage,
  DivAction,
  ListNav,
  ItemNav,
  ListNavAction,
  ItemNavAction,
  TextTitle,
} from './styles';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
function HeaderMenu(props) {
  return (
    <DivMenu>
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
    </DivMenu>
  );
}

export default HeaderMenu;
