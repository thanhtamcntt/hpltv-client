import {
  DivVideo,
  TitleVideo,
  DivAction,
  ButtonAction,
  DivServer,
  DivContentVideo,
  RatingAction,
} from './styles';
import { Tag, Rate } from 'antd';
import { FacebookShareButton } from 'react-share';

function VideoActionMovies({
  data,
  isLike,
  handleClickLikeMovies,
  handleRatingMovies,
  isRating,
  dataValueUserRating,
}) {
  const handleLikeMovies = () => {
    handleClickLikeMovies();
  };

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
          <ButtonAction onClick={() => handleLikeMovies()}>
            {isLike ? (
              <Tag color="#FFD700">Liked</Tag>
            ) : (
              <Tag color="#3b5999">Like</Tag>
            )}
          </ButtonAction>
          <ButtonAction>
            <Tag color="#3b5999">
              <FacebookShareButton url="facebook.com" hashtag="#showhub">
                Share
              </FacebookShareButton>
            </Tag>
          </ButtonAction>
          <RatingAction>
            <label>Rating:</label>&nbsp;&nbsp;
            <div>
              <Rate
                disabled={isRating ? true : false}
                value={dataValueUserRating}
                allowHalf
                onChange={(value) => handleRatingMovies(value)}
              />
            </div>
          </RatingAction>
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
