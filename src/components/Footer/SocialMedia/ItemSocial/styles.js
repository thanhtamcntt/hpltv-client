import styled from 'styled-components';

export const DivItemSocial = styled.a`
  display: flex;
  margin: 30px 0px 30px 20%;
  @media (max-width: 767px) {
    margin: 30px 0px 30px 22%;
  }
  @media (max-width: 575px) {
    margin: 30px 0px 30px 32%;
  }
`;

export const DivIcon = styled.div`
  & span {
    color: var(--white);
    font-size: 20px;
  }
`;
export const DivLink = styled.div``;

export const TextContact = styled.p`
  color: var(--white);
  font-weight: 400;
  margin-left: 20px;
`;
