import { useEffect } from 'react';
import Banner from '../../components/Home/Banner';
import Content from '../../components/Content';
import { DivHomePage, DivLoading } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesFeature } from '../../redux/action/home/movies';
import { fetchSeriesFeature } from '../../redux/action/home/series';
import { LoadingOutlined } from '@ant-design/icons';

function HomePage() {
  const movies = useSelector((state) => state.moviesSlice);
  const series = useSelector((state) => state.seriesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesFeature());
    dispatch(fetchSeriesFeature());
  }, []);

  return (
    <DivHomePage>
      <Banner />
      {movies && series ? (
        <>
          <Content
            title={'Latest movies'}
            listFilm={movies.data}
            type="movies"
          />
          <Content title="Movies" listFilm={movies.data} type="movies" />
          <Content title="Series" listFilm={series.data} type="series" />
        </>
      ) : (
        <DivLoading>
          <div>
            <LoadingOutlined />
          </div>
        </DivLoading>
      )}
    </DivHomePage>
  );
}

export default HomePage;
