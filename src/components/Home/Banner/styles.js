import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivBanner = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  border-radius: 20px 20px 300px 20px;
  padding: 100px 0;

  background: linear-gradient(
    135deg,
    #ca26ff 7.17%,
    #f4cac0 85.48%,
    #fff3b0 100%
  );

  @media (max-width: 1250px) {
    max-width: calc(100% - 40px);
  }

  @media (max-width: 767px) {
    padding: 20px 0 50px;
    border-radius: 20px 20px 200px 20px;
  }
`;

export const RowBanner = styled(Row)``;
export const ColBanner = styled(Col)``;

export const BannerTitle = styled.h2`
  text-align: left;
  margin: 40px 0 20px 100px;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 0.125em;
  text-align: left;

  & span {
    font-size: 40px;
    letter-spacing: 0.395em;
    color: var(--white);
  }

  @media (max-width: 1200px) {
    font-size: 45px;
    margin: 30px 0 20px 60px;
    & span {
      font-size: 30px;
    }
  }

  @media (max-width: 991px) {
    font-size: 42px;
    margin: 30px 0 20px 40px;
    & span {
      font-size: 28px;
    }
  }

  @media (max-width: 575px) {
    font-size: 38px;
    margin: 30px 0 20px 40px;
    & span {
      font-size: 25px;
    }
  }
`;

export const BannerContent = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.015em;
  text-align: left;
  margin: 60px 80px 60px 140px;
  color: var(--white);

  @media (max-width: 1200px) {
    font-size: 18px;
    margin: 60px 40px 60px 80px;
  }

  @media (max-width: 767px) {
    margin: 20px 30px 60px 60px;
  }
  @media (max-width: 575px) {
    margin: 20px 30px 30px 60px;
    font-size: 15px;
  }
`;

export const DivButtonBanner = styled.div`
  text-align: right;
  padding-right: 30px;

  @media (max-width: 767px) {
    padding-right: 50px;
  }

  @media (max-width: 575px) {
    padding-right: 50px;
    & button {
      width: 130px;
      height: 40px;
      font-size: 18px;
    }
  }
`;

export const ImageBanner = styled.img`
  max-width: 450px;
  @media (max-width: 1200px) {
    max-width: 95%;
  }
  @media (max-width: 767px) {
    margin-top: 40px;
    height: 400px;
  }
  @media (max-width: 767px) {
    height: 300px;
  }
`;
