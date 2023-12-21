import styled from 'styled-components';

export const DivFilm = styled.div`
  text-align: center;
  padding: 0 22px;

  @media (max-width: 1200px) {
    & button {
      width: 150px;
      height: 40px;
      font-size: 20px;
    }
  }
  @media (max-width: 767px) {
    & button {
      width: 140px;
      height: 40px;
      font-size: 16px;
    }
  }
`;

export const ImageFilm = styled.img`
  width: 100%;
`;
export const NameFilm = styled.h3`
  margin: 10px 0;
  font-weight: 400;
`;
