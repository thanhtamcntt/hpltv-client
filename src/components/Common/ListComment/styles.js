import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivListComment = styled.div`
  width: 100%;

  margin-top: 50px;
`;

export const DivDetailComment = styled.div`
  width: 100%;
  background-color: #fefdfd;
  padding: 20px 0;
`;

export const RowComment = styled(Row)``;
export const ColLeftComment = styled(Col)``;
export const ColRightComment = styled(Col)``;

export const DivContent = styled.div`
  margin-right: 10px;
  border: 1px solid #ccc;
`;

export const AvatarUserComment = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const NameUser = styled.h3`
  margin: 0 10px;
  padding: 5px 0;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;
export const ContentUser = styled.p`
  text-align: left;
  padding: 15px 10px;
`;

export const DivAction = styled.div`
  margin-top: 10px;
`;
export const ReplyButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  color: #3f94d5;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  & p {
    margin-left: 6px;
  }
`;
