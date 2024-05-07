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

export const ColFooterTop = styled(Col)`
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 575px) {
    border-bottom: 1px solid white;
    padding: 10px 0;
  }
`;

export const ColFooterMiddle = styled(Col)`
  padding: 0 1rem;

  @media (max-width: 575px) {
    border-bottom: 1px solid white;
    padding: 10px 0;
  }
`;

export const ColFooterBot = styled(Col)`
  padding: 0 1rem;

  @media (max-width: 575px) {
    border-bottom: 1px solid white;
    padding: 10px 0;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  text-align: left;
  color: var(--white);
  margin-bottom: 10px;

  & span {
    text-decoration: underline;
    color: blue;
  }
`;

export const DivContentSocial = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
`;

export const DivSocial = styled.a`
  margin-left: 10px;
`;

export const DivIcon = styled.div`
  & img {
    cursor: pointer;
  }
`;

export const DivContentSupport = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const DivSupport = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  padding: 3px 0;
  border: 1px solid var(--border-color-sp);
  text-align: center;
  border-radius: 20px;
  margin-left: 10px;
  & span,
  & svg {
    font-size: 16px;
    color: var(--border-color-sp);
    cursor: pointer;
  }

  & svg {
    margin-right: 10px;
  }

  & span {
    font-weight: 500;
  }
`;

export const DivTextDownload = styled.div`
  text-align: right;
  font-size: 16px;
  color: var(--white);
  margin-bottom: 10px;
`;

export const DivDownload = styled.div`
  text-align: right;
  & img {
    margin-left: 10px;
    cursor: pointer;
  }
`;
