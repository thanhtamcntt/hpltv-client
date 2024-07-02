import React, { useEffect, useState } from 'react';
import {
  DivSearch,
  ButtonSearch,
  FormSearch,
  InputSearch,
  DivSelect,
  ListFilm,
  Item,
  RowItem,
  ColItem,
  ImageItem,
  TextFilm,
  TextCountry,
  DivInfo,
} from './styles';
import { SearchOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies } from '../../redux/action/home/movies';

function InputSearchLayout(props) {
  const [searchKey, setSearchKey] = useState('');
  const [films, setFilms] = useState();
  const [onFocus, setOnFocus] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  useEffect(() => {
    if (movies) {
      let arrayData = [];
      for (let item of movies.data) {
        if (item.title.toLowerCase().includes(searchKey.toLowerCase()))
          arrayData.push(item);
      }

      setFilms(arrayData);
    }
  }, [searchKey, movies]);

  const handleSearchFilm = (e) => {
    e.preventDefault();
    navigate(`/search?result=${searchKey}`, {
      state: {
        searchKey: searchKey,
      },
    });
    setSearchKey('');
  };

  const handleFocusInput = () => {
    setOnFocus(true);
  };
  const handleBlurInput = () => {
    setOnFocus(false);
  };

  const handleOnchangeInput = async (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <DivSearch>
      <FormSearch onSubmit={handleSearchFilm}>
        <InputSearch
          name="search"
          placeholder="Search name film"
          value={searchKey}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          onChange={handleOnchangeInput}
        />
        <ButtonSearch type="submit">
          <SearchOutlined />
        </ButtonSearch>
      </FormSearch>
      {onFocus && (
        <DivSelect>
          <ListFilm>
            {films && films.length > 0 ? (
              films.map((item, id) => {
                return (
                  <Item key={id}>
                    <RowItem>
                      <ColItem span={5}>
                        <Link
                          to={
                            props.type === 'series'
                              ? '/series/' + item._id
                              : '/film/' + item._id
                          }>
                          <ImageItem src={item.imageUrl.url} alt={item.title} />
                        </Link>
                      </ColItem>
                      <ColItem span={19}>
                        <Link
                          to={
                            props.type === 'series'
                              ? '/series/' + item._id
                              : '/film/' + item._id
                          }>
                          <TextFilm>{item.title}</TextFilm>
                        </Link>
                        <TextCountry>
                          {item.country.join('-')}-{item.releaseDate}
                        </TextCountry>
                      </ColItem>
                    </RowItem>
                  </Item>
                );
              })
            ) : (
              <DivInfo>No movies found matching the request!!</DivInfo>
            )}
          </ListFilm>
        </DivSelect>
      )}
    </DivSearch>
  );
}

export default InputSearchLayout;
