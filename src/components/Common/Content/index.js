import {
  DivContent,
  DivTitle,
  TextTitle,
  BorderText,
  DivContentFilm,
  ButtonSlick,
} from './styles';
import Film from '../FilmComponent/index';
import { useEffect, useState, useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function Content(props) {
  const [films, setFirms] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [slide, setSlide] = useState(5);

  const refContent = useRef();
  useEffect(() => {
    setFirms(props.listFilm);
  }, [props.listFilm]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    if (width >= 992) {
      setSlide(5);
    }
    if (width < 992 && width >= 768) {
      setSlide(4);
    }
    if (width < 768 && width > 576) {
      setSlide(3);
    }
    if (width < 576) {
      setSlide(2);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <DivContent>
      <DivTitle>
        <TextTitle>{props.title}</TextTitle>
      </DivTitle>
      <DivContentFilm>
        <ButtonSlick onClick={() => refContent.current.prev()}>
          <LeftOutlined />
        </ButtonSlick>
        <Carousel
          dots={false}
          autoplay={true}
          ref={refContent}
          slidesToShow={slide}>
          {films &&
            films.map((film, id) => {
              return (
                <Film
                  key={id}
                  title={film.title}
                  image={film.imageUrl.url}
                  idFilm={film._id}
                  type={props.type}
                />
              );
            })}
        </Carousel>
        <ButtonSlick next="next" onClick={() => refContent.current.next()}>
          <RightOutlined />
        </ButtonSlick>
      </DivContentFilm>
      <BorderText />
    </DivContent>
  );
}

export default Content;
