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
import LoadingComponent from '../../Common/LoadingComponent';
import FilmMost from '../../Common/FilmMost';
import { fetchMoviesSameMovies } from '../../../redux/action/film/SameMovies';
import FilmSameComponent from '../../Common/FilmSameComponent';
import CommentComponent from '../../Common/CommentComponent';
import {
  createComment,
  fetchAllComment,
} from '../../../redux/action/comment/comment';
import InfoMovies from '../../Common/InfoMovies';
import VideoActionMovies from '../../Common/VideoActionMovies';
import ListComment from '../../Common/ListComment';

const DetailFilmPage = (props) => {
  const [data, setData] = useState();
  const [dataComment, setDataComment] = useState();

  const navigate = useNavigate();

  const { filmId } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);
  const category = useSelector((state) => state.categorySlice);
  const mostNew = useSelector((state) => state.moviesMostNewSlice);
  const mostView = useSelector((state) => state.moviesMostViewSlice);
  const mostRating = useSelector((state) => state.moviesMostRatingSlice);
  const sameMovies = useSelector((state) => state.sameMoviesSlice);
  const comment = useSelector((state) => state.commentSlice);

  useEffect(() => {
    Promise.all([
      dispatch(fetchAllMovies()),
      dispatch(fetchMoviesMostNew()),
      dispatch(fetchMoviesMostView()),
      dispatch(fetchMoviesMostRating()),
      dispatch(fetchMoviesSameMovies(filmId)),
      dispatch(fetchAllCategory()),
      dispatch(fetchAllComment()),
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
  }, [movies, category]);

  useEffect(() => {
    if (comment) {
      console.log('comment', comment);
      let data = [];
      for (let item of comment.data) {
        if (item.moviesId === filmId) {
          data.push(item);
        }
      }
      setDataComment(data);
    }
  }, [comment]);

  const handleWatchingMovies = () => {
    navigate('/film/watching-movies/' + filmId);
  };

  const handleAddComment = async (comment) => {
    console.log(JSON.parse(localStorage.getItem('userInfo')));
    if (comment) {
      const user = await JSON.parse(localStorage.getItem('userInfo'));
      const data = {
        userId: user._id,
        content: comment,
        moviesId: filmId,
      };
      await dispatch(createComment(data));
      data.userId = JSON.parse(localStorage.getItem('userInfo'));
      window.location.reload();
    }
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
    !comment ||
    !comment.data ||
    !dataComment
  ) {
    return <LoadingComponent />;
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
                <VideoActionMovies data={data} />
              </>
            )}
            <DivFilmSame>
              <FilmSameComponent listFilm={sameMovies.data} filmId={filmId} />
            </DivFilmSame>
            <DivComment>
              <DivContentComment>
                {props.watching && (
                  <CommentComponent handleAddComment={handleAddComment} />
                )}
                <ListComment dataComment={dataComment} />
              </DivContentComment>
            </DivComment>
          </RowLeft>
        </ColDetail>
        <ColDetail span={7} right={'right'}>
          <FilmMost
            title={'Newly updated movie'}
            film={mostNew.data}
            filmId={filmId}
          />
          <FilmMost
            title={'Most watched movies'}
            film={mostView.data}
            filmId={filmId}
          />
          <FilmMost
            title={'Recommended film'}
            film={mostRating.data}
            filmId={filmId}
          />
        </ColDetail>
      </RowDetail>
    </DivContainer>
  );
};

export default DetailFilmPage;
