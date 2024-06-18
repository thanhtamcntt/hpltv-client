import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalCustomer = styled(Modal)`
  color: var(--white-bg);
  text-align: center;
  width: 400px !important;
  position: absolute;

  & .ant-modal-content {
    height: 600px !important;

    background: linear-gradient(
      160deg,
      rgb(72, 196, 58) -20%,
      rgb(6, 54, 1) 35%,
      rgb(0, 0, 0) 180%
    );
  }
  & svg {
    color: var(--white-bg);
    font-size: 22px;
  }

  & .ant-modal-close {
    top: 10px !important;
  }
`;
export const BtnLog = styled.button`
  position: relative;
  top: -8px;
  left: -160px;
  cursor: pointer;
  background: transparent;
`;
export const DivContainer = styled.div`
  position: relative;
  height: 560px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 36px;
`;

export const DivChat = styled.div`
  background-color: var(--bg-chat);
  border-radius: 10px;
  padding: 1.5rem 1rem;
  & p {
    margin-bottom: 1rem;
  }
  & button {
    color: var(--white-bg);
    width: 100%;
    background: rgb(15 155 0);
    padding: 0.7rem 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s linear;
    & span {
      margin-left: 10px;
    }

    &:hover {
      background: rgb(17, 135, 4);
    }
  }
`;

export const DivFooter = styled.div`
  width: 100%;
  background-color: var(--bg-chat);
  border-radius: 20px;
  position: absolute;
  bottom: 0;
`;
export const ButtonFooter = styled.button`
  width: 50%;
  padding: 0.8rem 0;
  background: transparent;
  color: ${(props) => (!props.handle ? '#7f7f7f' : 'var(--white-bg)')};
  cursor: pointer;
  & p {
    margin-top: 4px;
  }
  & svg {
    color: ${(props) => (!props.handle ? '#7f7f7f' : 'var(--white-bg)')};
  }

  &:hover {
    color: var(--white-bg);
    & svg {
      color: var(--white-bg);
    }
  }
`;

export const DivForm = styled.div`
  & label {
    color: var(--white-bg) !important;
  }

  & button {
    margin-top: 24px;
  }

  & input {
    padding: 8px 10px;
  }

  & .ant-form-item {
    margin-bottom: 1rem !important;
  }
`;

export const DivContainerChat = styled.div`
  height: 100%;
`;
export const DivContentChat = styled.div`
  background: var(--white-bg);
  height: 100%;
`;

export const TitleChat = styled.h3`
  background: #212b30;
  padding: 2px 0;
`;

export const ChatContent = styled.div`
  min-height: 400px;
`;

export const FormChat = styled.form`
  display: flex;
  align-items: center;
  border-top: 1px solid var(--black);

  & input {
    width: 80%;
    padding: 12px 10px;
  }
`;

export const ButtonChat = styled.button`
  flex: 1;
  padding: 10px 0;
  border-left: 1px solid var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    color: var(--black);
  }
`;
