import React from 'react';
import {
  DivLandingPage,
  DivActionAuth,
  DivInformation,
  TextBanner,
  DivContentAuth,
  DivBanner,
  DivContent,
  TextTitle,
  TextContent,
  TextContent2,
  ButtonLogin,
  RowInformation,
  ColInformation,
  TitleInformation,
  TextInformation,
  ImageInformation,
} from './styles';
import { Link, useNavigate } from 'react-router-dom';
import banner1 from '../../../assets/images/img-login.jpg';
import imageInfo1 from '../../../assets/images/laptop-landing.jpg';
import imageInfo2 from '../../../assets/images/tv-landing.jpg';
import { RightOutlined } from '@ant-design/icons';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <DivLandingPage>
      <DivActionAuth backgroundImage={banner1}>
        <DivContentAuth>
          <DivBanner>
            <TextBanner>ShowHub</TextBanner>
          </DivBanner>
          <DivContent>
            <TextTitle>
              Enjoy hit movies, featured TV shows and more from only 70,000 VND.
            </TextTitle>
            <TextContent>Join today, cancel anytime.</TextContent>
            <TextContent2>
              Are you ready to watch? Log in to reactivate your membership.
            </TextContent2>
            <ButtonLogin>
              <Link to="/auth/login">
                Start <RightOutlined />
              </Link>
            </ButtonLogin>
          </DivContent>
        </DivContentAuth>
      </DivActionAuth>
      <DivInformation>
        <RowInformation>
          <ColInformation span={12}>
            <TitleInformation>Enjoy on your TV</TitleInformation>
            <TextInformation>
              Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </TextInformation>
          </ColInformation>
          <ColInformation span={12}>
            <ImageInformation src={imageInfo1} />
          </ColInformation>
        </RowInformation>
      </DivInformation>
      <DivInformation>
        <RowInformation>
          <ColInformation span={12}>
            <TitleInformation>Watch everywhere</TitleInformation>
            <TextInformation>
              Stream unlimited movies and TV shows on your phone, tablet, laptop
              and TV.
            </TextInformation>
          </ColInformation>
          <ColInformation span={12}>
            <ImageInformation src={imageInfo2} />
          </ColInformation>
        </RowInformation>
      </DivInformation>
    </DivLandingPage>
  );
}

export default LandingPage;
