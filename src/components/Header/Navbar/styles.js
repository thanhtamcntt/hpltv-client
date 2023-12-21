import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivNavbar = styled.div``;

export const RowNavbar = styled(Row)``;
export const ColLeft = styled(Col)`
  text-align: left;
  & a {
    color: var(--black);
    font-weight: bold;
    font-size: 36px;
  }
`;
export const ColRight = styled(Col)`
  display: flex;
  align-items: center;
`;

export const ListNav = styled.ul`
  display: flex;
`;

export const ItemNav = styled.li`
  padding: 10px 14px;
  & a {
    color: var(--black);
    font-size: 20px;
    font-weight: 400;
    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 18px;
    }
  }
  @media (max-width: 1200px) {
    padding: 10px 10px;
  }
`;
