import { useEffect, useRef, useState } from 'react';
import {
  DivFilm,
  DivLook,
  FormLook,
  ButtonSearch,
  DivLookContainer,
  RowLook,
  ColLook,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../redux/action/home/movies';
import { fetchAllCategory } from '../../redux/action/category/category';
import Content from '../../components/Content';
import {
  API_CATEGORY,
  API_GET_ALL_COUNTRY,
  API_GET_NEW_MOVIES,
} from '../../configs/apis';
import LoadingPage from '../LoadingPage';
import Banner from '../../components/Banner';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const MoviesPage = (props) => {
  const [data, setData] = useState();
  const [dataVideo, setDataVideo] = useState();
  const [dataBanner, setDataBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [valueCategory, setValueCategory] = useState(null);
  const [valueCountry, setValueCountry] = useState(null);
  const [valueYear, setValueYear] = useState(null);
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);
  const category = useSelector((state) => state.categorySlice);
  useEffect(() => {
    const fetchDataLook = async () => {
      const response = await fetch(API_CATEGORY);
      const data = await response.json();
      let arr = [];
      for (const item of data.data) {
        arr.push({ label: item.name, value: item.name });
      }
      setOptions(arr);
      const response1 = await fetch(API_GET_ALL_COUNTRY);
      const data1 = await response1.json();

      setOptions1(data1.data);

      const year = new Date().getFullYear();
      const intYear = parseInt(year);
      let arrayYear = [];
      for (let i = intYear; i > 1984; i--) {
        arrayYear.push({ label: i, value: i });
      }
      setOptions2(arrayYear);
    };
    const fetchMovies = async () => {
      const response = await fetch(API_GET_NEW_MOVIES);
      const data = await response.json();
      setDataVideo(data.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };
    Promise.all([
      dispatch(fetchAllMovies()),
      dispatch(fetchAllCategory()),
      fetchMovies(),
      fetchDataLook(),
    ]);
  }, [dispatch]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (movies && category) {
      let arrayData = [];
      for (let cate of category.data) {
        let objectData = { title: null, film: [] };
        objectData.title = cate.name;
        for (let item of movies.data) {
          if (item.listCategoryId.includes(cate._id))
            objectData.film.push(item);
        }
        arrayData.push(objectData);
      }

      setData(arrayData);
    }
  }, [movies, category]);

  useEffect(() => {
    if (dataVideo && category) {
      let arrData = [];
      for (let item of dataVideo) {
        let arrayCategory = [];
        for (let cate of category.data) {
          if (item.listCategoryId.includes(cate._id))
            arrayCategory.push(cate.name);
        }

        arrData.push({
          name: item.title,
          category: arrayCategory,
          description: item.description,
          filmId: item._id,
        });
      }
      setDataBanner(arrData);
    }
  }, [dataVideo, category]);

  if (
    !movies ||
    !category ||
    !data ||
    !dataVideo ||
    !options ||
    !options1 ||
    !options2
  ) {
    return <LoadingPage />;
  }

  return (
    <DivFilm>
      <Banner dataVideo={dataVideo} isLoading={isLoading} data={dataBanner} />
      <DivLookContainer>
        <DivLook>
          <FormLook>
            <RowLook>
              <ColLook span={6}>
                <Input placeholder="Search name film" />
              </ColLook>
              <ColLook span={6}>
                <Select
                  showSearch
                  defaultValue=""
                  placeholder="Select category"
                  allowClear
                  value={valueCategory}
                  onChange={setValueCategory}
                  options={options}
                />
              </ColLook>
              <ColLook span={6}>
                <Select
                  showSearch
                  defaultValue=""
                  placeholder="Select country"
                  allowClear
                  value={valueCountry}
                  onChange={setValueCountry}
                  options={options1}
                />
              </ColLook>
              <ColLook span={6}>
                <Select
                  showSearch
                  defaultValue=""
                  placeholder="Select year"
                  allowClear
                  value={valueYear}
                  onChange={setValueYear}
                  options={options2}
                />
              </ColLook>
            </RowLook>
            <div>
              <ButtonSearch>
                <SearchOutlined />
                Search
              </ButtonSearch>
            </div>
          </FormLook>
        </DivLook>
      </DivLookContainer>
      {data &&
        data.map((item, id) => {
          if (item.film.length > 4) {
            return (
              <Content
                title={item.title}
                listFilm={item.film}
                key={id}
                type="movies"
              />
            );
          }
        })}
    </DivFilm>
  );
};

export default MoviesPage;
