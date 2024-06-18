import {
  DivContact,
  DivBanner,
  BannerContact,
  DivContent,
  DivTitle,
  Title,
  RowContent,
  ColContent,
  DivForm,
  Container,
  TitleLeft,
  TitleRight,
  DivListQuestion,
  InfoQuestion,
  TitleQuestion,
  DescriptionQuestion,
} from './styles';
import contactImage from '../../assets/images/contact_us.jpg';
import { Button, Form, Input, message } from 'antd';
import InputItem from '../../components/Common/InputItem';
import TextArea from 'antd/es/input/TextArea';
import { useContext, useEffect, useState } from 'react';
import { API_FETCH_ALL_COMMON_QUESTIONS } from '../../configs/apis';
import { API_CREATE_QUESTION_CUSTOMER } from '../../configs/apis';
import { CheckLoginContext } from '../../contexts/LoginContext';
import { io } from 'socket.io-client';

function ContactPage() {
  const [questions, setQuestions] = useState();
  const [openQuestions, setOpenQuestions] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [socket, setSocket] = useState();

  const { userInfo } = useContext(CheckLoginContext);

  const [form] = Form.useForm();

  const success = (msg) => {
    messageApi.open({
      type: 'success',
      content: msg,
    });
  };

  const error = (msg) => {
    messageApi.open({
      type: 'error',
      content: msg,
    });
  };

  useEffect(() => {
    const fetchAllCommonQuestions = async () => {
      const response = await fetch(API_FETCH_ALL_COMMON_QUESTIONS);
      const responseJson = await response.json();
      setQuestions(responseJson.data);
    };
    fetchAllCommonQuestions();
    const socket = io('http://localhost:4000');
    setSocket(socket);
  }, []);

  const handleOpenDescription = (id) => {
    setOpenQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onFinish = async (values) => {
    console.log(values);
    const response = await fetch(API_CREATE_QUESTION_CUSTOMER, {
      method: 'POST',
      body: JSON.stringify({
        title: values.title,
        description: values.comment,
        userId: userInfo.userId,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.success) {
      form.setFieldsValue({
        title: '',
        comment: '',
      });
      success(
        'Thank you for your feedback. We have received your information and will respond via email as soon as possible.',
      );
    } else {
      error('The system is experiencing a problem. Please try again later!!');
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSocket = () => {
    socket.emit('msg', '123');
  };

  return (
    <DivContact>
      {contextHolder}
      <DivBanner>
        <BannerContact src={contactImage} />
      </DivBanner>
      <Container>
        <DivContent>
          <DivTitle>
            <Title>Let’s Start a Conversation</Title>
            <button onClick={handleSocket}>Test socket</button>
          </DivTitle>
          <RowContent>
            <ColContent span={12}>
              <TitleLeft>Some frequently asked questions</TitleLeft>
              <DivListQuestion>
                {questions &&
                  questions.map((item, id) => {
                    return (
                      <InfoQuestion key={id}>
                        <TitleQuestion
                          onClick={() => handleOpenDescription(item._id)}>
                          {item.title}
                        </TitleQuestion>
                        {openQuestions[item._id] && (
                          <DescriptionQuestion>
                            {item.description}
                          </DescriptionQuestion>
                        )}
                      </InfoQuestion>
                    );
                  })}
              </DivListQuestion>
            </ColContent>
            <ColContent span={12}>
              <TitleRight>Please note: all fields are required.</TitleRight>
              <DivForm>
                <Form
                  form={form}
                  name={'contactForm'}
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  style={{
                    textAlign: 'center',
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  autoComplete="off">
                  <InputItem
                    label="Title"
                    name="title"
                    message="Please input your title!"
                    input={<Input />}
                  />
                  <InputItem
                    label="Comment"
                    name="comment"
                    message="Please input your comment!"
                    input={
                      <TextArea
                        maxLength={200}
                        // onChange={onChange}
                        placeholder="Enter comments"
                        style={{
                          height: 100,
                          resize: 'none',
                        }}
                      />
                    }
                  />
                  <Form.Item
                    wrapperCol={{
                      span: 24,
                    }}>
                    <Button type="primary" htmlType="submit">
                      SEND MESSAGE
                    </Button>
                  </Form.Item>
                </Form>
              </DivForm>
            </ColContent>
          </RowContent>
        </DivContent>
      </Container>
    </DivContact>
  );
}

export default ContactPage;
