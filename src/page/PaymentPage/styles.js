import { Col, Row } from 'antd';
import styled from 'styled-components';

export const PaymentContainer = styled.div`
  width: 100%;
`;
export const PaymentHeader = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

export const ServicePack = styled.div`
  padding: 36px 3%;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleService = styled.h2`
  text-align: left;
  font-size: 28px;
  margin: 0 0 1.4rem;
`;

export const DivPackage = styled.div``;

export const RowPack = styled(Row)``;

export const ColPack = styled(Col)``;

export const DivNotification = styled(Col)`
  margin: 24px 10px;
  & p {
    text-align: left;
    font-size: 14px;
  }

  & p:last-child {
    margin-top: 10px;
  }
`;

export const DivActionContinue = styled.div`
  margin: 20px auto;
`;

export const ButtonContinue = styled.button`
  background: rgb(229, 9, 20);
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 14px 200px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
`;

export const DivFooter = styled.div``;
