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
} from './styles';
import { useState } from 'react';
import { Form, Input } from 'antd';
import ItemForm from '../Common/ItemForm';

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
}) {
  const [roomId, setRoomId] = useState();
  const [input, setInput] = useState();

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

  const handleSubmitChat = (e) => {
    console.log('Submit');
    e.preventDefault();
    setMessage((prev) => [...prev, input]);
    setInput('');
    socket.emit('chatCustomer', input);
    socket.off('chatCustomer');
  };

  return (
    <ModalCustomer
      open={isModal}
      style={{ right: 30, top: 10 }}
      closeIcon={<MinusOutlined />}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}>
      {isState !== 2 ? (
        <DivContainer>
          {isState !== 0 && (
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
                    label="Name:"
                    name="name"
                    message="Please input your name!"
                    input={<Input />}
                  />
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
          <BtnLog onClick={handleChat}>
            <ArrowLeftOutlined />
          </BtnLog>
          <Title>SHOWHUB</Title>
          <DivContentChat>
            <TitleChat>Live chat</TitleChat>
            <ChatContent>
              {message &&
                message.length > 0 &&
                message.map((item, id) => {
                  return (
                    <p key={id} style={{ color: '#000' }}>
                      {item}
                    </p>
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
