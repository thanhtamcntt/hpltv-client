import { Title, TextFilm } from './styles';
import dayjs from 'dayjs';

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
      <TextFilm>Duration: {data.film.duration} minute</TextFilm>
      <TextFilm>
        <span>Rating:&nbsp;</span>
        <span>
          {data.film.rating}/5 ({data.film.totalRating} evaluate)
        </span>
      </TextFilm>
      <TextFilm>Category: {data.category}</TextFilm>
      <TextFilm>Country: {data.film.country}</TextFilm>
      <TextFilm>Product company: {data.film.productCompany}</TextFilm>
    </>
  );
}

export default InfoMovies;
