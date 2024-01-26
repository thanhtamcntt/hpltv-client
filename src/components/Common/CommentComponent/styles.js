import styled from 'styled-components';

export const DivComment = styled.div`
  width: 100%;
`;
export const DivTitle = styled.div`
  text-align: left;
`;
export const TitleComment = styled.h2``;

export const DivInput = styled.div`
  text-align: left;
  & textarea {
    height: 80px;
  }
`;

export const ButtonSend = styled.button`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 1);
  color: var(--bg-search);
  padding: 10px 20px;
  border-radius: 5px;
  uppercase: true;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
