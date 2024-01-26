import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivLandingPage = styled.div`
  width: 100%;
`;

export const DivActionAuth = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivContentAuth = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const DivBanner = styled.div``;
export const DivContent = styled.div`
  padding: 6rem 0 4rem;
  width: calc(100% - 6rem);
  margin: 2rem 0;
`;

export const TextBanner = styled.h2`
  text-align: left;
  padding: 2rem;
  margin: 0;
  font-size: 44px;
  text-transform: uppercase;
  color: var(--white);
`;

export const TextTitle = styled.h1`
  margin: 0;
  color: var(--white);
  font-size: 44px;
`;

export const TextContent = styled.p`
  margin: 0;
  color: var(--white);
  font-size: 24px;
  margin-top: 20px;
  font-weight: 500;
`;
export const TextContent2 = styled.p`
  margin: 0;
  color: var(--white);
  margin-top: 30px;
  font-size: 18px;
`;

export const ButtonLogin = styled.button`
  padding: 14px 0;
  margin-top: 30px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 5px;
  background-color: red;
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & a {
    padding: 14px 30px;
    color: var(--white);
    text-decoration: none;
  }
`;

export const DivInformation = styled.div`
  background: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 5px solid #ccc;
`;

export const RowInformation = styled(Row)`
  width: 100%;
  max-width: 1200px;
  padding: 4rem;
`;
export const ColInformation = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TitleInformation = styled.h1`
  text-align: left;
  color: var(--white);
  font-size: 44px;
`;
export const TextInformation = styled.p`
  text-align: left;
  color: var(--white);
  font-size: 24px;
`;
export const ImageInformation = styled.img`
  width: 100%;
`;
