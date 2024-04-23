import { useParams } from 'react-router-dom';
import {
  DivContainer,
  RowSeries,
  ColSeriesLeft,
  ColSeriesRight,
  RowLeft,
  ColLeft,
  ColRight,
  ImageSeries,
  Title,
  TextFilm,
  DivFilmForMovies,
  RowFilm,
  ColFilm,
  DivNotifi,
  TextNotifi,
  TitleList,
} from './styles';
import LoadingComponent from '../../components/Common/LoadingComponent';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../redux/action/home/movies';
import { fetchAllSeries } from '../../redux/action/home/series';
import { useEffect, useState } from 'react';
import Film from '../../components/FilmAndMovies/FilmComponent';
import FilmMost from '../../components/FilmAndMovies/FilmMost';

function FilmForSeriesPage() {
  const [data, setData] = useState();
  const [seriesData, setSeriesData] = useState();
  const [mostSeriesData, setMostSeriesData] = useState();

  const { seriesId } = useParams();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);
  const series = useSelector((state) => state.seriesSlice);
  useEffect(() => {
    Promise.all([dispatch(fetchAllMovies()), dispatch(fetchAllSeries())]);
  }, [dispatch, seriesId]);

  useEffect(() => {
    if (movies && series) {
      let arrayData = [];
      for (let itemSeries of series.data) {
        if (itemSeries._id === seriesId) {
          setSeriesData(itemSeries);
          for (let item of movies.data) {
            if (itemSeries.listSeriesId.includes(item._id))
              arrayData.push(item);
          }
        }
      }

      setData(arrayData.reverse());
    }
  }, [movies, series]);

  useEffect(() => {
    if (series) {
      let arrayData = [];
      for (let itemSeries of series.data) {
        arrayData.push(itemSeries);
      }
      setMostSeriesData(arrayData);
    }
  }, [series]);

  if (!series || !movies || !data || !seriesData || !mostSeriesData) {
    return <LoadingComponent />;
  }

  return (
    <DivContainer>
      <RowSeries>
        <ColSeriesLeft span={16}>
          <RowLeft>
            <ColLeft span={12}>
              <ImageSeries
                src={seriesData.imageUrl.url}
                alt={seriesData.title}
              />
            </ColLeft>
            <ColRight span={12}>
              <Title>{seriesData.title}</Title>
              <TextFilm>
                <b>Description:</b> {seriesData.description}
              </TextFilm>
            </ColRight>
          </RowLeft>
          <DivFilmForMovies>
            <TitleList>List Film for series {seriesData.title}</TitleList>
            <RowFilm>
              {data && data.length ? (
                data.map((film, id) => {
                  return (
                    <ColFilm key={id} span={6}>
                      <Film
                        title={film.title}
                        image={film.imageUrl.url}
                        idFilm={film._id}
                        type="movies"
                      />
                    </ColFilm>
                  );
                })
              ) : (
                <DivNotifi>
                  <TextNotifi>
                    There are currently no series available.
                  </TextNotifi>
                </DivNotifi>
              )}
            </RowFilm>
          </DivFilmForMovies>
        </ColSeriesLeft>
        <ColSeriesRight span={8}>
          <FilmMost
            title={'Recommended series'}
            film={mostSeriesData}
            filmId={seriesId}
            type="series"
          />
        </ColSeriesRight>
      </RowSeries>
    </DivContainer>
  );
}

export default FilmForSeriesPage;
