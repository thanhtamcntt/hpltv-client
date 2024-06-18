import { Col, Row } from 'antd';
import styled from 'styled-components';
export const ContainerHeader = styled.div`
  background-color: transparent;
  margin-bottom: calc(var(--height) + var(--pd) * 2);
`;

export const DivHeader = styled.div`
  width: 100%;
  background-color: #0a0a0a;
  opacity: 0.9;
  padding: var(--pd) 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  height: var(--height);
  display: flex;
  align-items: center;
`;

export const ContentHeader = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

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
export const ColLeft = styled(Col)`
  margin: auto;
`;
export const ColRight = styled(Col)`
  display: flex;
  align-items: center;
`;
