import styled from 'styled-components';

export const DivContact = styled.div`
  width: 100%;
`;
export const DivBanner = styled.div`
  margin-bottom: 1.5rem;
`;
export const BannerContact = styled.img`
  width: 100%;
  height: 370px;
`;

export const DivContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 5rem;
  text-align: left;
  & a {
    color: #ffd700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Text = styled.p`
  margin-bottom: 1.5rem;
  color: var(--white-bg);
  line-height: 2rem;
`;

export const Title = styled.h3`
  margin-bottom: 1.5rem;
  color: #ffd700;
`;
