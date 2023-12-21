import React from 'react';
import { ButtonSearch, FormSearch, InputSearch } from './styles';
import { SearchOutlined } from '@ant-design/icons';

function InputSearchLayout() {
  return (
    <FormSearch>
      <InputSearch name="search" placeholder="Search" />
      <ButtonSearch>
        <SearchOutlined />
      </ButtonSearch>
    </FormSearch>
  );
}

export default InputSearchLayout;
