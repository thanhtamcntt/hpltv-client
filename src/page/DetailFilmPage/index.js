import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
import { useContext, useEffect, useState } from 'react';
import { fetchAllMovies } from '../../redux/action/home/movies';
import { fetchAllCategory } from '../../redux/action/category/category';
import { fetchMoviesMostView } from '../../redux/action/film/MostView';
import { fetchMoviesMostNew } from '../../redux/action/film/MostNew';
import { fetchMoviesMostRating } from '../../redux/action/film/MostRating';
import {
  handleLikeMovies,
  handleRatingMoviesAction,
} from '../../redux/action/home/movies';
import FilmMost from '../../components/FilmAndMovies/FilmMost';
import { fetchMoviesSameMovies } from '../../redux/action/film/SameMovies';
import { fetchAllOrder } from '../../redux/action/order';
import { fetchAllPackage } from '../../redux/action/package';
import FilmSameComponent from '../../components/FilmAndMovies/FilmSameComponent';
import CommentComponent from '../../components/Comment/CommentComponent';
import InfoMovies from '../../components/FilmAndMovies/InfoMovies';
import VideoActionMovies from '../../components/FilmAndMovies/VideoActionMovies';
import LoadingPage from '../LoadingPage';
import { Modal } from 'antd';
import { CheckLoginContext } from '../../contexts/LoginContext';

const { confirm } = Modal;

const DetailFilmPage = (props) => {
  const [data, setData] = useState();
  const [isLike, setIsLike] = useState(false);
  const [isRating, setIsRating] = useState(false);
  const [dataValueUserRating, setDataValueUserRating] = useState(0);
  const [isWatching, setIsWatching] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { userInfo } = useContext(CheckLoginContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { filmId } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);
  const category = useSelector((state) => state.categorySlice);
  const mostNew = useSelector((state) => state.moviesMostNewSlice);
  const mostView = useSelector((state) => state.moviesMostViewSlice);
  const mostRating = useSelector((state) => state.moviesMostRatingSlice);
  const sameMovies = useSelector((state) => state.sameMoviesSlice);
  const order = useSelector((state) => state.orderSlice);
  const packageData = useSelector((state) => state.packageSlice);

  useEffect(() => {
    Promise.all([
      dispatch(fetchAllMovies()),
      dispatch(fetchMoviesMostNew()),
      dispatch(fetchMoviesMostView()),
      dispatch(fetchMoviesMostRating()),
      dispatch(fetchMoviesSameMovies(filmId)),
      dispatch(fetchAllCategory()),
      dispatch(fetchAllOrder()),
      dispatch(fetchAllPackage()),
    ]);
  }, [dispatch, filmId]);

  useEffect(() => {
    if (movies && category) {
      let objectData = { category: [], film: null };
      for (let item of movies.data) {
        if (item._id === filmId) {
          objectData.film = item;
          for (let cate of category.data) {
            if (item.listCategoryId.includes(cate._id))
              objectData.category.push(cate.name);
          }
        }
      }
      objectData.category = objectData.category.slice(1);
      setData(objectData);
    }
  }, [movies, category, filmId]);

  useEffect(() => {
    if (
      data &&
      data.film &&
      data.film.listUserIdLike.includes(userInfo.userId)
    ) {
      setIsLike(true);
    }
  }, [data]);

  useEffect(() => {
    setIsRating(false);
    setDataValueUserRating(0);
    if (data && data.film) {
      data.film.listUserIdRating.some((item) => {
        console.log(item.toString(), userInfo.userId.toString());
        if (item.userId.toString() === userInfo.userId.toString()) {
          setDataValueUserRating(item.valueRating);
          setIsRating(true);
        }
      });
    }
  }, [data]);
  useEffect(() => {
    setIsWatching(true);
    if (data && data.film) {
      order.data.some((item) => {
        if (item.userId.toString() === userInfo.userId.toString()) {
          if (data.film.listPackageIdBand.includes(item.packageId._id)) {
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
    const data = {
      userId: userInfo.userId,
      isLike: isLike,
      filmId: filmId,
    };
    await dispatch(handleLikeMovies(data));
    setIsLike((prev) => !prev);
  };

  const handleRatingMovies = async (value) => {
    console.log('rating: ', value);
    const data = {
      filmId: filmId,
      userId: userInfo.userId,
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
    return <LoadingPage />;
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
