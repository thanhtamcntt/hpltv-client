import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 100%;
`;

export const DivProfile = styled.div`
  margin: 30px auto 50px;
  width: 100%;
  max-width: 800px;
  position: relative;
`;

export const DivContent = styled.div`
  input:disabled {
    color: var(--black);
    background-color: #fffcfc;
    opacity: 1;
    text-shadow: 1px 1px 1px #fff;
  }
`;

export const RowContent = styled(Row)``;

export const ColLeft = styled(Col)``;
export const ColRight = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

export const DivContentLeft = styled.div`
  background-color: var(--bg-profile);
  width: 90%;
  padding: 20px 10px 40px;
  color: var(--white);
`;

export const DivNameUser = styled.div`
  color: var(--white-bg);
`;

export const NameUser = styled.h2`
  margin-bottom: 20px;
  color: var(--white-bg);
`;

export const DivInfo = styled.div`
  margin-top: 30px;
  color: var(--white-bg);
`;

export const Text = styled.p`
  text-align: left;
  margin: 16px 40px 0;
  font-size: 16px;
  color: var(--white-bg);
`;

export const DivImage = styled.div`
  text-align: center;
  position: relative;

  & img {
    border-radius: 50%;
  }

  & button {
    position: absolute;
    left: 62%;
    top: 0;
    background-color: var(--white);
    width: 40px !important;
    height: 40px;
    border-radius: 40px;
    border: 2px solid #ccc;

    & svg {
      font-size: 24px;
    }
  }

  & .loading-container {
    margin: 100px 0;
  }
`;

export const DivUpload = styled.div`
  margin-top: 30px;
`;

export const DivContentRight = styled.div`
  background-color: var(--bg-profile);
  padding: 30px 20px;
  width: 90%;
`;
