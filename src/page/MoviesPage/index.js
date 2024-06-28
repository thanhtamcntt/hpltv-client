import { useEffect, useRef, useState } from 'react';
import {
  DivFilm,
  BannerPage,
  ButtonSlick,
  BannerContent,
  ImageBanner,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../redux/action/home/movies';
import { fetchAllCategory } from '../../redux/action/category/category';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Content from '../../components/Content';
import { API_GET_NEW_MOVIES } from '../../configs/apis';
import LoadingPage from '../LoadingPage';
import Banner from '../../components/Banner';

const MoviesPage = () => {
  const [data, setData] = useState();
  const [dataVideo, setDataVideo] = useState();
  const [dataBanner, setDataBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const refContent = useRef();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);
  const category = useSelector((state) => state.categorySlice);
  useEffect(() => {
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
    ]);
  }, [dispatch]);

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

  if (!movies || !category || !data || !dataVideo) {
    return <LoadingPage />;
  }

  return (
    <DivFilm>
      <Banner dataVideo={dataVideo} isLoading={isLoading} data={dataBanner} />
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
