import React from 'react';
import { DivSearch, RowSearch, ColLeft, ColRight, ButtonMenu } from './styles';
import InputSearchLayout from '../../../../layout/InputSearch/InputSearch';
import { UnorderedListOutlined } from '@ant-design/icons';

function HeaderSearch(props) {
  const showMenu = () => {
    props.setShow(true);
  };
  return (
    <DivSearch>
      <RowSearch>
        <ColLeft span={20}>
          <InputSearchLayout />
        </ColLeft>
        <ColRight span={4}>
          <ButtonMenu onClick={showMenu}>
            <UnorderedListOutlined />
          </ButtonMenu>
        </ColRight>
      </RowSearch>
    </DivSearch>
  );
}

export default HeaderSearch;
