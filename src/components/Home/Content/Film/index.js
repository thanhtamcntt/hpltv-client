import LayoutButton from '../../../../layout/ButtonLayout';
import { DivFilm, ImageFilm, NameFilm } from './styles';

function Film(props) {
  return (
    <DivFilm>
      <ImageFilm src={props.image} alt={props.title} />
      <NameFilm>{props.title}</NameFilm>
      <LayoutButton text="Watching" />
    </DivFilm>
  );
}

export default Film;
