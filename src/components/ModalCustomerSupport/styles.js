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
  font-size: 36px;
  margin: 40px 0 20px !important;
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

  & > h2 {
    margin: 20px 0 10px;
  }
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
  max-height: 400px;
  margin: 6px 10px 0;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DivItemChat = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;
  justify-content: flex-end;
`;

export const DivItemChatRes = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;
`;

export const TextWelcome = styled.p`
  text-align: center;
  color: #f00;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const DivAvatarUser = styled.div`
  margin-left: 6px;
  width: 25px;
  height: 25px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const DivAvatar = styled.div`
  margin-right: 6px;
  width: 25px;
  height: 25px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  align-items: flex-start;
  & > p:nth-child(2) {
    color: var(--black);
    font-size: 10px;
    font-weight: 700;
    margin-top: 4px;
  }
`;

export const DivTextUser = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  align-items: flex-end;
  & > p:nth-child(2) {
    color: var(--black);
    float: right;
    font-size: 10px;
    font-weight: 700;
    margin-top: 4px;
  }
`;

export const TextUser = styled.p`
  background-color: #4c77f6;
  padding: 0.2rem 0.4rem;
  text-align: right;
  border-radius: 10px;
  color: var(--white-bg) !important;
  text-align: right;
  max-width: 100%;
  float: right;
  font-size: 16px;
  font-weight: 500;
  & > p {
    font-size: 10px;
  }

  & > span {
    text-align: left;
  }
`;

export const TextUserResponse = styled.p`
  background-color: #10a829;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  text-align: left;
  color: var(--white-bg) !important;
  text-align: left;
  max-width: 100%;

  float: left;
  font-size: 16px;
  font-weight: 500;
  & > p {
    font-size: 10px;
  }
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

export const DivInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10003;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white-bg);
    width: 60%;
    border-radius: 10px;

    & > p {
      color: var(--black);
    }
  }
`;

export const ButtonInfo = styled.button`
  width: 100px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  border-radius: 5px;
  color: var(--white-bg);
  background-color: #00ac0b;
  cursor: pointer;
`;
