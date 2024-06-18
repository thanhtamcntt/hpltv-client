import styled from 'styled-components';

export const FormSearch = styled.form`
  background: var(--bg-search);
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: space-between;
`;

export const InputSearch = styled.input`
  background: var(--bg-search);
  padding: 0px 15px;
  width: 72%;
  height: 100%;
  color: var(--white-bg);
  &::placeholder {
    color: var(--white-bg);
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 75%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 70%;
  }
`;

export const ButtonSearch = styled.button`
  flex: 1;
  border-left: 1px solid var(--white-bg);
  cursor: pointer;
  background: var(--bg-search);
  & span {
    font-size: 24px;
    color: white;
  }
`;
