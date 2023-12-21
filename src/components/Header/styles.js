import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivHeader = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 10px auto;
  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (max-width: 1250px) {
    max-width: calc(100% - 40px);
  }

  @media (max-width: 575px) {
    max-width: calc(100% - 30px);
    margin: 10px auto;
  }
`;

export const RowHeader = styled(Row)``;
export const ColLeft = styled(Col)``;
export const ColRight = styled(Col)``;
