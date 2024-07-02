import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const AuthContent = styled.div`
  width: 400px;
  height: 50vh;
  background-color: var(--white-bg);
  margin: 25vh auto 0;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const DivHeader = styled.div`
  border-bottom: 1px solid #e6e6e6;
  & > div {
    margin: 0 auto;

    width: 100%;
    max-width: 1200px;
  }
`;

export const DivInformation = styled.div`
  width: 90%;
  margin: 20px auto 0;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 30px;
`;

export const Text = styled.p`
  margin: 1rem 0;
`;
export const DivDetail = styled.div`
  margin: 20px 0;

  & input {
    padding: 8px 12px !important;
    border-radius: 2px !important;
  }

  & .ant-form-item-explain-error {
    margin: 6px 0 4px;
  }

  & > form > div {
    margin-bottom: 12px !important;
  }
`;

export const ButtonVerify = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #4ed80d;
  color: var(--white-bg);
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background-color: #65fb1e;
  }
`;
