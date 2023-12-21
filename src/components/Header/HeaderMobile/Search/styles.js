import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivSearch = styled.div`
  width: 100%;
`;

export const RowSearch = styled(Row)``;
export const ColLeft = styled(Col)`
  display: flex;
  justify-content: flex-end;
  & form {
    height: 40px;
    width: 80%;
  }
  @media (max-width: 575px) {
    & form {
      height: 38px;
      width: 80%;
    }
  }
`;
export const ColRight = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonMenu = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover span {
    color: rgba(0, 0, 0, 0.6);
  }

  & span {
    font-size: 34px;
  }

  @media (max-width: 767px) {
    & span {
      font-size: 30px;
    }
  }

  @media (max-width: 575px) {
    & span {
      font-size: 22x;
    }
  }
`;
