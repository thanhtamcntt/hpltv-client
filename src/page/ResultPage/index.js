import { useEffect, useState } from 'react';
import {
  DivFilm,
  Title,
  ColPage,
  RowPage,
  DivContent,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../redux/action/home/movies';
import Film from '../../components/FilmAndMovies/FilmComponent';
import { useLocation } from 'react-router-dom';
import LoadingPage from '../LoadingPage';

const ResultPage = () => {
  const [data, setData] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  const [slide, setSlide] = useState(4);

  const location = useLocation();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    if (width >= 1200) {
      setSlide(4);
    }
    if (width >= 992 && width < 1200) {
      setSlide(6);
    }
    if (width < 992 && width >= 768) {
      setSlide(6);
    }
    if (width < 768 && width > 576) {
      setSlide(8);
    }
    if (width < 576) {
      setSlide(12);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  console.log(movies);
  useEffect(() => {
    if (movies) {
      let arrayData = [];
      for (let item of movies.data) {
        if (
          item.title
            .toLowerCase()
            .includes(location.state.searchKey.toLowerCase())
        )
          arrayData.push(item);
      }

      setData(arrayData);
    }
  }, [movies, location.state.searchKey]);

  if (!movies || !data) {
    return <LoadingPage />;
  }

  return (
    <DivFilm>
      <Title>Kết quả tìm kiếm từ khóa {location.state.searchKey}</Title>
      <DivContent>
        <RowPage justify="start">
          {data &&
            data.map((item, id) => {
              return (
                <ColPage key={id} span={slide}>
                  <Film title={item.title} image={item.imageUrl.url} />
                </ColPage>
              );
            })}
        </RowPage>
      </DivContent>
    </DivFilm>
  );
};

export default ResultPage;
