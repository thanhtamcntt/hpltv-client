import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivContact = styled.div`
  width: 100%;
`;
export const DivBanner = styled.div``;
export const BannerContact = styled.img`
  width: 100%;
  height: 370px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 5rem;
`;
export const DivTitle = styled.div`
  margin: 4rem 0;
  color: var(--white-bg);
`;
export const Title = styled.h2`
  font-size: 30px;
`;

export const RowContent = styled(Row)``;

export const ColContent = styled(Col)``;

export const DivForm = styled.div`
  & label {
    color: var(--white-bg) !important;
  }
  & input {
    padding: 8px;
    border-radius: 3px;
  }

  & button {
    margin-top: 1rem;
    width: 100%;
    height: 40px;
    font-weight: 500;
  }
  .ant-form-item-explain-error {
    margin-top: 4px;
  }
`;

export const TitleLeft = styled.h2`
  text-align: left;
  color: var(--white-bg);
  margin-bottom: 1rem;
`;
export const TitleRight = styled.h3`
  text-align: left;
  color: var(--white-bg);
  margin-bottom: 1rem;
`;

export const DivListQuestion = styled.div`
  text-align: left;
  margin-right: 4rem;
  color: var(--white-bg);
`;
export const InfoQuestion = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`;
export const TitleQuestion = styled.p`
  margin-bottom: 4px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #0870fc;
  }
`;
export const DescriptionQuestion = styled.p`
  color: #ffdc00;
`;
