import { useNavigate, useParams } from 'react-router-dom';
import {
  DivContainer,
  RowDetail,
  ColDetail,
  RowLeft,
  ColLeft,
  ColRight,
  ImageFilm,
  DivContent,
  TextContent,
  TitleContent,
  DivWatchButton,
  ButtonWatch,
  DivFilmSame,
  DivComment,
  DivContentComment,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllMovies } from '../../../redux/action/home/movies';
import { fetchAllCategory } from '../../../redux/action/category/category';
import { fetchMoviesMostView } from '../../../redux/action/film/MostView';
import { fetchMoviesMostNew } from '../../../redux/action/film/MostNew';
import { fetchMoviesMostRating } from '../../../redux/action/film/MostRating';
import {
  handleLikeMovies,
  handleRatingMoviesAction,
} from '../../../redux/action/home/movies';
import FilmMost from '../../Common/FilmMost';
import { fetchMoviesSameMovies } from '../../../redux/action/film/SameMovies';
import { fetchAllOrder } from '../../../redux/action/order';
import FilmSameComponent from '../../Common/FilmSameComponent';
import CommentComponent from '../../Common/CommentComponent';
import InfoMovies from '../../Common/InfoMovies';
import VideoActionMovies from '../../Common/VideoActionMovies';
import LoadingPage from '../LoadingPage';
import { Modal, notification } from 'antd';

const { confirm } = Modal;

const DetailFilmPage = (props) => {
  const [data, setData] = useState();
  const [isLike, setIsLike] = useState(false);
  const [isRating, setIsRating] = useState(false);
  const [dataValueUserRating, setDataValueUserRating] = useState(0);
  const [isWatching, setIsWatching] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `unsuccessful`,
      description:
        'Your service package cannot watch this movie, please upgrade to a higher service package to be able to watch this movie!!',
      placement,
    });
  };

  const { filmId } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);
  const category = useSelector((state) => state.categorySlice);
  const mostNew = useSelector((state) => state.moviesMostNewSlice);
  const mostView = useSelector((state) => state.moviesMostViewSlice);
  const mostRating = useSelector((state) => state.moviesMostRatingSlice);
  const sameMovies = useSelector((state) => state.sameMoviesSlice);
  const order = useSelector((state) => state.orderSlice);
  console.log(`order: `, order.data);

  useEffect(() => {
    Promise.all([
      dispatch(fetchAllMovies()),
      dispatch(fetchMoviesMostNew()),
      dispatch(fetchMoviesMostView()),
      dispatch(fetchMoviesMostRating()),
      dispatch(fetchMoviesSameMovies(filmId)),
      dispatch(fetchAllCategory()),
      dispatch(fetchAllOrder()),
    ]);
  }, [dispatch, filmId]);

  useEffect(() => {
    if (movies && category) {
      let objectData = { category: '', film: null };
      for (let item of movies.data) {
        if (item._id === filmId) {
          objectData.film = item;
          for (let cate of category.data) {
            if (item.listCategoryId.includes(cate._id))
              objectData.category = objectData.category + ', ' + cate.name;
          }
        }
      }
      objectData.category = objectData.category.slice(1);
      setData(objectData);
    }
  }, [movies, category, filmId]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    console.log('data: ', data);

    if (data && data.film && data.film.listUserIdLike.includes(user._id)) {
      setIsLike(true);
    }
  }, [data]);

  useEffect(() => {
    setIsRating(false);
    setDataValueUserRating(0);
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (data && data.film) {
      data.film.listUserIdRating.some((item) => {
        if (item.userId.toString() === user._id.toString()) {
          setDataValueUserRating(item.valueRating);
          setIsRating(true);
          return true;
        }
        return false;
      });
    }
  }, [data]);

  useEffect(() => {
    setIsWatching(true);
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (data && data.film) {
      order.data.some((item) => {
        if (item.userId.toString() === user._id.toString()) {
          if (data.film.listPackageIdBand.includes(item.information._id)) {
            setIsWatching(false);
            return true;
          }
        }
        return false;
      });
    }
  }, [data, order]);

  const handleWatchingMovies = () => {
    if (isWatching) {
      navigate('/film/watching-movies/' + filmId);
    } else {
      setIsModalOpen(true);
      confirm({
        title: 'Operation failed!!',
        content: `Your service package cannot watch this movie, please upgrade to a higher service 
        package to be able to watch this movie. Have you recently upgraded your current package?`,
        okText: 'Yes',
        cancelText: 'No',
        onOk() {
          navigate('/package-upgrade');
        },
        onCancel() {},
      });
    }
  };

  const handleClickLikeMovies = async () => {
    const user = await JSON.parse(localStorage.getItem('userInfo'));
    const data = {
      userId: user._id,
      isLike: isLike,
      filmId: filmId,
    };
    await dispatch(handleLikeMovies(data));
    setIsLike((prev) => !prev);
  };

  const handleRatingMovies = async (value) => {
    console.log('rating: ', value);
    const user = await JSON.parse(localStorage.getItem('userInfo'));
    const data = {
      filmId: filmId,
      userId: user._id,
      valueRating: value,
    };
    await dispatch(handleRatingMoviesAction(data));
    setIsRating(true);
  };

  if (
    !movies ||
    !category ||
    !data ||
    !data.film ||
    !mostNew ||
    !mostNew.data ||
    !mostView ||
    !mostView.data ||
    !mostRating ||
    !mostRating.data ||
    !sameMovies ||
    !sameMovies.data ||
    !order ||
    !order.data
  ) {
    return LoadingPage;
  }

  return (
    <DivContainer>
      <RowDetail>
        <ColDetail span={17}>
          <RowLeft>
            {props.watching === false ? (
              <>
                <ColLeft span={10}>
                  <ImageFilm src={data.film.imageUrl.url} />
                  <DivWatchButton>
                    <ButtonWatch onClick={handleWatchingMovies}>
                      Watch a movie
                    </ButtonWatch>
                  </DivWatchButton>
                </ColLeft>
                <ColRight span={14}>
                  <InfoMovies data={data} />
                </ColRight>
                <DivContent>
                  <TitleContent>Content</TitleContent>
                  <TextContent>{data.film.description}</TextContent>
                </DivContent>
              </>
            ) : (
              <>
                <VideoActionMovies
                  data={data}
                  isLike={isLike}
                  handleClickLikeMovies={handleClickLikeMovies}
                  handleRatingMovies={handleRatingMovies}
                  isRating={isRating}
                  dataValueUserRating={dataValueUserRating}
                />
              </>
            )}
            <DivFilmSame>
              <FilmSameComponent listFilm={sameMovies.data} filmId={filmId} />
            </DivFilmSame>
            <DivComment>
              <DivContentComment>
                {props.watching && <CommentComponent />}
              </DivContentComment>
            </DivComment>
          </RowLeft>
        </ColDetail>
        <ColDetail span={7} right={'right'}>
          <FilmMost
            title={'Newly updated movie'}
            film={mostNew.data}
            filmId={filmId}
            type="movies"
          />
          <FilmMost
            title={'Most watched movies'}
            film={mostView.data}
            filmId={filmId}
            type="movies"
          />
          <FilmMost
            title={'Recommended film'}
            film={mostRating.data}
            filmId={filmId}
            type="movies"
          />
        </ColDetail>
      </RowDetail>
    </DivContainer>
  );
};

export default DetailFilmPage;
