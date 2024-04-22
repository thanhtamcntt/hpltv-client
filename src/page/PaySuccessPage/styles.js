import styled from 'styled-components';

export const PaySuccessContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const PaySuccessContent = styled.div`
  width: 600px;
  height: 60vh;
  background-color: var(--white);
  margin: 20vh auto 0;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
`;

export const DivIcon = styled.div`
  & > span {
    margin: 25px 0;
  }
  & svg {
    color: #5cae35;
    font-size: 60px;
  }
`;

export const DivInformation = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const DivDetail = styled.div`
  margin: 20px 0;
`;

export const ListInfoDetail = styled.ul`
  list-style: square;
`;

export const ItemDetail = styled.li`
  text-align: left;
  margin: 5px 0;
`;
export const DivThanks = styled.div`
  margin: 30px 0;
`;

export const TitleThanks = styled.h2`
  font-weight: 500;
  margin: 0 auto;
  font-size: 16px;
`;

export const DivRedirect = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  & > span {
    margin-top: 14px;
  }
`;

export const ButtonRedirect = styled.button`
  padding: 10px 16px;
  border-radius: 5px;
  background-color: #5ba0b5;
  color: var(--white);
  font-weight: 500;
  width: 30%;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    opacity: 0.85;
  }
`;
