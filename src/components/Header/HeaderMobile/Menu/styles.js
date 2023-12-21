import styled from 'styled-components';

export const DivMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 900;
`;

export const DivContentMenu = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 40%;
  background-color: white;
  z-index: 1000;
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 75%;
  }
`;

export const ButtonMenu = styled.button`
  position: absolute;
  background: none;
  border: none;
  right: 3%;
  top: 2%;
  cursor: pointer;
  & span {
    font-size: 30px;
  }

  &:hover span {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const TextTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 70px;
`;

export const DivPage = styled.div``;

export const DivAction = styled.div`
  margin-top: 30px;
`;

export const ListNav = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ItemNav = styled.li`
  & a {
    color: var(--black);
    font-size: 24px;
    font-weight: 700;
    padding: 10px 14px;
    display: flex;
    justify-content: space-between;
    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 18px;
    }
  }
  @media (max-width: 1200px) {
    padding: 10px 10px;
  }
`;

export const ListNavAction = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ItemNavAction = styled.li`
  & a {
    color: var(--black);
    font-size: 18px;
    font-weight: 700;
    padding: 6px 20px;
    border: 1px solid black;
    border-radius: 20px;
    &:hover {
      background-color: var(--bg-footer);
      color: white;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 18px;
    }
  }
  @media (max-width: 1200px) {
    padding: 10px 10px;
  }
`;
