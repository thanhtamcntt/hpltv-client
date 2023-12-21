import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivSearch = styled.div``;

export const RowSearch = styled(Row)``;
export const ColLeft = styled(Col)`
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
export const FormSearch = styled.form`
  background: var(--bg-search);
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: space-between;

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 30px !important;
  }
`;

export const InputSearch = styled.input`
  background: var(--bg-search);
  padding: 0px 20px;
  width: 85%;
  height: 100%;
  &::placeholder {
    color: var(--white);
    font-size: 16px;
  }
`;

export const ButtonSearch = styled.button`
  flex: 1;
  background: var(--bg-search);
  & span {
    font-size: 24px;
    color: white;
  }
`;
export const ListNav = styled(Row)`
  width: 100%;
  display: flex;
`;

export const ItemNav = styled(Col)`
  height: 100%;
  text-align: right;
  & a {
    color: var(--black);
    font-size: 20px;
    font-weight: 400;
    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 18px;
    }
  }
`;
