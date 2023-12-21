import styled from 'styled-components';

export const DivNavbar = styled.div`
  & a {
    color: var(--black);
    font-weight: bold;
    font-size: 36px;
  }

  @media (max-width: 767px) {
    & a {
      font-size: 35px;
    }
  }
  @media (max-width: 575px) {
    & a {
      font-size: 28px;
    }
  }
`;
