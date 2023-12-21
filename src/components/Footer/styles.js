import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivFooter = styled.div`
  width: 100%;
  background: var(--bg-footer);
  padding: 50px 0 20px;
  text-align: center;
  @media (max-width: 575px) {
    padding: 10px 0 20px;
  }
`;

export const DivContentFooter = styled.div`
  max-width: 1200px;
  margin: 10px auto;
`;

export const RowFooter = styled(Row)``;
export const ColTop = styled(Col)``;
export const ColBot = styled(Col)``;

export const RowFooterTop = styled(Row)``;
export const ColFooterTop = styled(Col)`
  @media (max-width: 575px) {
    border-bottom: 1px solid white;
    padding: 10px 0;
  }
`;
