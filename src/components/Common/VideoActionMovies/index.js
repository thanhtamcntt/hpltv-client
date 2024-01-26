import {
  DivVideo,
  TitleVideo,
  DivAction,
  ButtonAction,
  DivServer,
  DivContentVideo,
} from './styles';
import { Tag } from 'antd';

function VideoActionMovies({ data }) {
  return (
    <>
      <TitleVideo>{data.film.title}</TitleVideo>
      <DivVideo>
        <iframe
          width="100%"
          height="515"
          src={data.film.videoUrl.url}
          title={data.film.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </DivVideo>
      <DivContentVideo>
        <DivAction>
          <ButtonAction>
            <Tag color="#3b5999">Like</Tag>
          </ButtonAction>
          <ButtonAction>
            <Tag color="#3b5999">Share</Tag>
          </ButtonAction>
        </DivAction>
        <DivServer>
          <label>Vietsub #1</label>: &nbsp;
          <Tag color="#fbc50c">Full</Tag>
        </DivServer>
      </DivContentVideo>
    </>
  );
}

export default VideoActionMovies;
