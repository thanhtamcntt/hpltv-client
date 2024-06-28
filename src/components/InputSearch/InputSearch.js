import React, { useRef, useState } from 'react';
import { ButtonSearch, FormSearch, InputSearch } from './styles';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function InputSearchLayout() {
  const [searchKey, setSearchKey] = useState('');
  const navigate = useNavigate();

  const handleSearchFilm = (e) => {
    e.preventDefault();
    navigate(`/search?result=${searchKey}`, {
      state: {
        searchKey: searchKey,
      },
    });
    setSearchKey('');
  };

  return (
    <FormSearch onSubmit={handleSearchFilm}>
      <InputSearch
        name="search"
        placeholder="Search name film"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <ButtonSearch type="submit">
        <SearchOutlined />
      </ButtonSearch>
    </FormSearch>
  );
}

export default InputSearchLayout;
