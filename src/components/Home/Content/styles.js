import styled from 'styled-components';

export const DivContent = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  position: relative;
`;

export const DivTitle = styled.div`
  text-align: left;
  margin-left: 40px;
  position: relative;
  z-index: 100;
`;

export const TextTitle = styled.h2`
  text-align: center;
  max-width: 15%;
  background-color: white;
  @media (max-width: 991px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    max-width: 20%;
  }

  @media (max-width: 575px) {
    font-size: 16px;
    max-width: 28%;
  }
`;

export const BorderText = styled.div`
  width: 100%;
  border: 1px solid var(--black);
  position: absolute;
  top: 18px;
  @media (max-width: 992px) {
    top: 12px;
  }
`;

export const DivContentFilm = styled.div`
  overflow: hidden;
`;

export const ButtonSlick = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  left: ${(props) => !props.next && '0'};
  right: ${(props) => props.next && '0'};
  z-index: 100;
  border: none;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  & span svg {
    font-size: 1.2rem;
    color: #fff;
  }
  &:hover {
    background-color: #0066b3;
  }
`;
