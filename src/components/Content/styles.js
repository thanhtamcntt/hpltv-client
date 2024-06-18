import styled from 'styled-components';

export const DivContent = styled.div`
  max-width: 1200px;
  margin: 70px auto;
  position: relative;
  min-height: 300px;
`;

export const DivTitle = styled.div`
  text-align: left;
  margin-left: 20px;
  position: relative;
  z-index: 100;
  color: var(--white);
`;

export const TextTitle = styled.h2`
  text-align: left;
  display: flex;
  align-items: center;
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
  height: 2px;
  background: var(--white);
  flex: 1;
  margin-left: 1rem;
`;

export const DivContentFilm = styled.div`
  overflow: hidden;
  margin-top: 12px;
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
  width: 40px;
  height: 40px;
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
