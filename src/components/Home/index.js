import { useEffect } from 'react';
import Banner from './Banner';
import Content from '../Common/Content';
import Pay from './Pay';
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
          <Content title="Top in 2023" listFilm={movies.data} />
          <Content title="Movies" listFilm={movies.data} />
          <Content title="Series" listFilm={series.data} />
        </>
      ) : (
        <DivLoading>
          <div>
            <LoadingOutlined />
          </div>
        </DivLoading>
      )}
      <Pay />
    </DivHomePage>
  );
}

export default HomePage;
