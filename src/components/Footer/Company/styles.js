import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivCompany = styled.div`
  @media (max-width: 991px) and (min-width: 576px) {
    margin-top: 30px;
  }
`;

export const TextTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
  color: var(--white);
  text-align: center;
`;

export const RowCompany = styled(Row)`
  margin: 40px 0;
`;

export const ColCompany = styled(Col)`
  & a {
    color: var(--white);
    font-weight: 400;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  & form {
    width: 70%;
  }

  @media (max-width: 575px) {
    padding-bottom: 20px;
  }
`;
