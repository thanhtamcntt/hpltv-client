import { useEffect, useRef, useState } from 'react';
import {
  DivFilm,
  BannerPage,
  ButtonSlick,
  BannerContent,
  ImageBanner,
  ColPage,
  RowPage,
  DivContent,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSeries } from '../../../redux/action/home/series';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Film from '../../Common/FilmComponent';
import LoadingComponent from '../../Common/LoadingComponent';

const SeriesPage = () => {
  const [data, setData] = useState();
  const [banner, setBanner] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  const [slide, setSlide] = useState(5);

  const refContent = useRef();
  const dispatch = useDispatch();
  const series = useSelector((state) => state.seriesSlice);

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
    dispatch(fetchAllSeries());
  }, [dispatch]);

  useEffect(() => {
    if (series) {
      let arrayBanner = [];
      for (let item in series.data) {
        if (item < 3) arrayBanner.push(series.data[item].imageUrl.url);
      }
      setBanner(arrayBanner);

      let arrayData = [];
      for (let item of series.data) {
        arrayData.push(item);
      }

      setData(arrayData);
    }
  }, [series]);

  if (!series || !data) {
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
                    height="600"
                  />
                </BannerContent>
              );
            })}
        </Carousel>
        <ButtonSlick next="next" onClick={() => refContent.current.next()}>
          <RightOutlined />
        </ButtonSlick>
      </BannerPage>
      <DivContent>
        <RowPage>
          {data &&
            data.map((item, id) => {
              return (
                <ColPage key={id} span={slide}>
                  <Film
                    title={item.title}
                    image={item.imageUrl.url}
                    idFilm={item._id}
                    type="series"
                  />
                </ColPage>
              );
            })}
        </RowPage>
      </DivContent>
    </DivFilm>
  );
};

export default SeriesPage;
