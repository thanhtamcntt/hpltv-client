import React from 'react';
import {
  DivBanner,
  BannerTitle,
  RowBanner,
  ColBanner,
  BannerContent,
  DivButtonBanner,
  ImageBanner,
  ButtonLayout,
} from './styles';
import bannerImage from '../../../assets/images/image-banner.png';

function Banner() {
  return (
    <DivBanner>
      <RowBanner>
        <ColBanner span={14} md={14} sm={24} xs={24}>
          <BannerTitle>
            ShowHub
            <br />
            <span>enjoy watching</span>
          </BannerTitle>
          <BannerContent>
            Premium non-entertainment benefits at ShowHub, home of diverse and
            unique cinema products. We are proud to bring you exceptional
            experiences, from cult blockbusters to artistic works of art.
          </BannerContent>
          <DivButtonBanner>
            <ButtonLayout>Start now</ButtonLayout>
          </DivButtonBanner>
        </ColBanner>
        <ColBanner span={10} md={10} sm={24} xs={24}>
          <ImageBanner src={bannerImage} />
        </ColBanner>
      </RowBanner>
    </DivBanner>
  );
}

export default Banner;
