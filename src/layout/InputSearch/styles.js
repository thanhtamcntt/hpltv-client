import styled from 'styled-components';

export const FormSearch = styled.form`
  background: var(--bg-search);
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: space-between;
`;

export const InputSearch = styled.input`
  background: var(--bg-search);
  padding: 0px 15px;
  width: 70%;
  height: 100%;
  &::placeholder {
    color: var(--white);
    font-size: 16px;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    width: 80%;
  }
`;

export const ButtonSearch = styled.button`
  flex: 1;
  background: var(--bg-search);
  & span {
    font-size: 24px;
    color: white;
  }
`;
