import { Title, TextFilm } from './styles';
import dayjs from 'dayjs';
import { Rate } from 'antd';

function InfoMovies({ data }) {
  return (
    <>
      <Title>{data.film.title}</Title>
      <TextFilm>
        Release date:&nbsp;
        {dayjs(data.film.releaseDate).format('YYYY-MM-DD')}
      </TextFilm>
      <TextFilm>Director: {data.film.director}</TextFilm>
      <TextFilm>Cast: {data.film.cast}</TextFilm>
      <TextFilm>Duration: {data.film.duration}</TextFilm>
      <TextFilm>
        Rating: &nbsp; <Rate /> / {data.film.rating}
      </TextFilm>
      <TextFilm>Category: {data.category}</TextFilm>
      <TextFilm>Country: {data.film.country}</TextFilm>
      <TextFilm>Product company: {data.film.productCompany}</TextFilm>
    </>
  );
}

export default InfoMovies;
