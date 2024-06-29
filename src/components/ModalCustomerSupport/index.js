import {
  MinusOutlined,
  SendOutlined,
  HomeOutlined,
  MessageOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import {
  ModalCustomer,
  BtnLog,
  DivContainer,
  DivContainerChat,
  Title,
  DivChat,
  DivFooter,
  ButtonFooter,
  DivForm,
  FormChat,
  ButtonChat,
  DivContentChat,
  TitleChat,
  ChatContent,
  TextUser,
  TextUserResponse,
  TextWelcome,
  DivItemChat,
  DivItemChatRes,
  DivTextUser,
  DivAvatarUser,
  DivText,
  DivAvatar,
  DivInfo,
  ButtonInfo,
} from './styles';
import { useContext, useEffect, useState } from 'react';
import { Form, Input, Popconfirm } from 'antd';
import ItemForm from '../Common/ItemForm';
import { CheckLoginContext } from '../../contexts/LoginContext';
import {
  API_GET_ON_MESSAGE_USER,
  API_UPDATE_MESSAGE,
  API_UPDATE_OFF_MESSAGE,
} from '../../configs/apis';

function ModalCustomerSupport({
  isModal,
  handleOk,
  handleCancel,
  isState,
  setIsState,
  socket,
  handleChatCustomer,
  setMessage,
  message,
  roomId,
  setRoomId,
  visible,
  handleOutRoom,
}) {
  const [input, setInput] = useState();

  const { userInfo } = useContext(CheckLoginContext);

  useEffect(() => {
    setIsState(undefined);
    const fetchListChat = async () => {
      const response = await fetch(
        API_GET_ON_MESSAGE_USER + '/' + userInfo.userId,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      if (json.data) {
        setMessage(json.data.messages);
        setRoomId(json.data.roomId);
        setIsState(2);
      } else {
        setIsState(0);
        setMessage([]);
        setRoomId();
      }
    };
    fetchListChat();
  }, []);

  const handleChat = () => {
    setIsState(1);
    setMessage([]);
  };

  const handleHome = () => {
    setIsState(0);
  };

  const onFinish = async (values) => {
    handleChatCustomer(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmitChat = async (e) => {
    console.log('Submit');
    e.preventDefault();
    const data = {
      input: input,
      userId: userInfo.userId,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      time:
        new Date(Date.now()).getHours() +
        ':' +
        new Date(Date.now()).getMinutes(),
      avatar: userInfo.avatarUser,
    };
    setMessage((prev) => [...prev, data]);
    setInput('');
    socket.emit('chatCustomer', { roomId: roomId, data: data });
    socket.off('chatCustomer');
    await fetch(API_UPDATE_MESSAGE + '/' + roomId, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const onConfirm = async () => {
    socket.emit('leaveRoom', roomId);
    socket.off('leaveRoom');
    socket.emit('receiveLeaveRoom', roomId);
    socket.off('receiveLeaveRoom');
    setIsState(0);
    setMessage([]);
    setRoomId();

    await fetch(API_UPDATE_OFF_MESSAGE + '/' + roomId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const onCancel = (e) => {};

  return (
    <ModalCustomer
      open={isModal}
      style={{ right: 30, top: 10 }}
      closeIcon={<MinusOutlined />}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}>
      {visible && (
        <DivInfo>
          <div>
            <p>This chat session has been ended</p>
            <ButtonInfo onClick={handleOutRoom}>Oke</ButtonInfo>
          </div>
        </DivInfo>
      )}
      {isState !== 2 ? (
        <DivContainer>
          {isState === 1 && (
            <BtnLog onClick={handleHome}>
              <ArrowLeftOutlined />
            </BtnLog>
          )}
          <Title>SHOWHUB</Title>
          {isState === 0 && (
            <DivChat>
              <p>Welcome to SHOWHUB! Top quality movie viewing website!</p>
              <button onClick={handleChat}>
                Chat now <SendOutlined />
              </button>
            </DivChat>
          )}
          {isState === 1 && (
            <DivChat>
              <p>Welcome to SHOWHUB! Top quality movie viewing website!</p>
              <DivForm>
                <Form
                  name="chatForm"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off">
                  <ItemForm
                    label="Issues needing support:"
                    name="issues"
                    message="Please input your issues!"
                    input={<Input />}
                  />
                  <Form.Item
                    className="btn-login"
                    wrapperCol={{
                      span: 24,
                    }}>
                    <button htmlType="submit">Start chat</button>
                  </Form.Item>
                </Form>
              </DivForm>
            </DivChat>
          )}

          <DivFooter>
            <ButtonFooter
              onClick={handleHome}
              handle={isState === 0 ? true : false}>
              <HomeOutlined /> <p>Home</p>
            </ButtonFooter>
            <ButtonFooter
              onClick={handleChat}
              handle={isState === 1 ? true : false}>
              <MessageOutlined /> <p>Chat</p>
            </ButtonFooter>
          </DivFooter>
        </DivContainer>
      ) : (
        <DivContainerChat>
          <Popconfirm
            title="Out room chat"
            description="Are you sure to leave this room?"
            onConfirm={onConfirm}
            onCancel={onCancel}
            okText="Yes"
            cancelText="No">
            <BtnLog>
              <ArrowLeftOutlined />
            </BtnLog>
          </Popconfirm>

          <Title>SHOWHUB</Title>
          <DivContentChat>
            <TitleChat>Live chat</TitleChat>
            <ChatContent>
              <TextWelcome>Welcome to the chat.</TextWelcome>
              {message &&
                message.length > 0 &&
                message.map((itemMes, id) => {
                  return itemMes.userId === userInfo.userId ? (
                    <DivItemChat>
                      <DivTextUser>
                        <TextUser key={id} style={{ color: '#000' }}>
                          <span>{itemMes.input}</span>
                        </TextUser>
                        <p>You {itemMes.time}</p>
                      </DivTextUser>
                      <DivAvatarUser>
                        <img
                          src={itemMes.avatar.url}
                          alt={itemMes.avatar.imageId}
                        />
                      </DivAvatarUser>
                    </DivItemChat>
                  ) : (
                    <DivItemChatRes>
                      <DivAvatar>
                        <img
                          src={itemMes.avatar.url}
                          alt={itemMes.avatar.imageId}
                        />
                      </DivAvatar>
                      <DivText>
                        <TextUserResponse key={id} style={{ color: '#000' }}>
                          {itemMes.input}
                        </TextUserResponse>
                        <p>
                          Admin {`${itemMes.firstName} ${itemMes.lastName}`}{' '}
                          {itemMes.time}
                        </p>
                      </DivText>
                    </DivItemChatRes>
                  );
                })}
            </ChatContent>
            <FormChat onSubmit={handleSubmitChat}>
              <input
                name="search"
                placeholder="Enter chat message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <ButtonChat htmlType="submit">
                <SendOutlined />
              </ButtonChat>
            </FormChat>
          </DivContentChat>
        </DivContainerChat>
      )}
    </ModalCustomer>
  );
}

export default ModalCustomerSupport;
