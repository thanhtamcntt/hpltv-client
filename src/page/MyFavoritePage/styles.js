import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivFilm = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px 0;
  min-height: 500px;
`;

export const Title = styled.h2`
  text-align: left;
  color: var(--white);
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 900px;
  }

  @media (max-width: 767px) {
    max-width: 650px;
    margin: 0 auto;
  }
`;

export const RowPage = styled(Row)`
  width: 100%;
  margin-bottom: 50px;
`;
export const ColPage = styled(Col)`
  margin-top: 30px;
  padding: 0 10px;

  & div {
    padding: 0 !important;
  }
`;
