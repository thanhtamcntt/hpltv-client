import { useEffect, useRef, useState } from 'react';
import {
  DivFilm,
  BannerPage,
  ButtonSlick,
  BannerContent,
  ImageBanner,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../../redux/action/home/movies';
import { fetchAllCategory } from '../../../redux/action/category/category';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Content from '../../Common/Content';
import LoadingComponent from '../../Common/LoadingComponent';

const MoviesPage = () => {
  const [data, setData] = useState();
  const [banner, setBanner] = useState();

  const refContent = useRef();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesSlice);
  const category = useSelector((state) => state.categorySlice);
  useEffect(() => {
    dispatch(fetchAllMovies());
    dispatch(fetchAllCategory());
  }, [dispatch]);

  useEffect(() => {
    if (movies && category) {
      let arrayBanner = [];
      for (let item in movies.data) {
        if (item < 3) arrayBanner.push(movies.data[item].imageUrl.url);
      }
      setBanner(arrayBanner);
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

  if (!movies || !category || !data) {
    return <LoadingComponent />;
  }

  return (
    <DivFilm>
      <BannerPage>
        <ButtonSlick onClick={() => refContent.current.prev()}>
          <LeftOutlined />
        </ButtonSlick>
        <Carousel
          dots={false}
          autoplay={true}
          ref={refContent}
          slidesToShow={1}>
          {banner &&
            banner.map((item, id) => {
              return (
                <BannerContent key={id}>
                  <ImageBanner
                    src={item}
                    alt="image-banner"
                    width="100%"
                    height="750"
                  />
                </BannerContent>
              );
            })}
        </Carousel>
        <ButtonSlick next="next" onClick={() => refContent.current.next()}>
          <RightOutlined />
        </ButtonSlick>
      </BannerPage>
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
