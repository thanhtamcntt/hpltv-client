import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivFilm = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 500px;
`;
export const BannerPage = styled.div``;
export const BannerContent = styled.div``;

export const ButtonSlick = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  left: ${(props) => !props.next && '0'};
  right: ${(props) => props.next && '0'};
  z-index: 100;
  border: none;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  & span svg {
    font-size: 1.2rem;
    color: #fff;
  }
  &:hover {
    background-color: #0066b3;
  }
`;

export const ImageBanner = styled.img``;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowPage = styled(Row)`
  max-width: 1200px;
  margin: 50px 0;
`;
export const ColPage = styled(Col)`
  margin-top: 30px;
  padding: 0 10px;
  & h3 {
    height: 30px !important;
  }
  & div {
    padding: 0 !important;
  }
`;
