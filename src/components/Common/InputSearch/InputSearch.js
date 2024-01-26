import React, { useRef } from 'react';
import { ButtonSearch, FormSearch, InputSearch } from './styles';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function InputSearchLayout() {
  const keyRef = useRef();
  const navigate = useNavigate();

  const handleSearchFilm = (e) => {
    e.preventDefault();
    navigate(`/search?result=${keyRef.current.value}`, {
      state: {
        searchKey: keyRef.current.value,
      },
    });
    console.log('ref', keyRef.current.value);
  };

  return (
    <FormSearch onSubmit={handleSearchFilm}>
      <InputSearch name="search" placeholder="Search" ref={keyRef} />
      <ButtonSearch type="submit">
        <SearchOutlined />
      </ButtonSearch>
    </FormSearch>
  );
}

export default InputSearchLayout;
