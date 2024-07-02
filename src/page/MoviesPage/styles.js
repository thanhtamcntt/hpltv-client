import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivFilm = styled.div`
  width: 100%;
  min-height: 500px;
`;

export const DivLookContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  border-top: 2px dotted var(--white-bg);
  padding-top: 3rem;
`;
export const DivLook = styled.div`
  max-width: 90%;
  margin-left: 20px;
`;
export const FormLook = styled.form`
  & > div {
    &:last-child {
      margin-top: 1rem;
      text-align: left;
      & button {
        cursor: pointer;
        padding: 10px 30px;
        font-size: 16px;
        color: var(--white-bg);
        font-weight: 500;
        border-radius: 3px;
        transition: all 0.3s linear;
        background-color: rgba(228, 183, 13, 1);
        & > span {
          margin-right: 6px;
        }

        &:hover {
          background-color: rgba(228, 183, 13, 0.85);
        }
      }
    }
  }
`;
export const RowLook = styled(Row)``;
export const ColLook = styled(Col)`
  height: 40px;
  text-align: left;
  & > div,
  & > input {
    width: 96%;
    height: 100%;
    text-align: left;
  }

  & > div {
    & .ant-select-selector {
      border-radius: 3px !important;
    }
  }

  & > input {
    padding: 0 10px;
    border-radius: 3px !important;
  }
`;
export const ButtonSearch = styled.button``;
