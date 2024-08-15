import React, { useEffect, useState } from 'react';
import {
  DivAuth,
  DivContent,
  DivContainer,
  DivBanner,
  DivForm,
  DivFooter,
  TextBanner,
  Text,
  DivLink,
  TextContent,
  DivError,
} from './styles';
import ItemForm from '../../components/Common/ItemForm';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import Footer from '../../components/Footer';
import LogoImage from '../../components/Common/ImageBanner';
import { API_FORGOT_PASSWORD } from '../../configs/apis';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

function ForgotPasswordPage() {
  const [textError, setTextError] = useState();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Request sent successfully.',
    });
  };

  const onFinish = async (values) => {
    const response = await fetch(API_FORGOT_PASSWORD, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();

    if (responseJson.success) {
      success();
      setTimeout(() => {
        navigate('/auth/login');
      }, 1500);
    } else {
      setTextError(responseJson.message);
    }
  };

  const onFinishFailed = (errorInfo) => {};

  useEffect(() => {
    form.setFieldsValue({
      sex: 'female',
    });
  }, [form]);

  const handleFocus = () => {
    setTextError();
  };

  return (
    <DivAuth>
      <Helmet>
        <title>Forgot Password</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {contextHolder}
      <DivContainer>
        <DivBanner>
          <TextBanner>
            <LogoImage height="60" width="400" />
          </TextBanner>
        </DivBanner>
        <DivContent>
          <TextContent>Forgot password</TextContent>
          <DivForm>
            <Form
              form={form}
              name="forgotPasswordForm"
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
                label="Email"
                name="email"
                message="Please input your email!"
                input={<Input onFocus={handleFocus} />}
              />

              <Form.Item
                className="btn-login"
                wrapperCol={{
                  span: 24,
                }}>
                <Button htmlType="submit">Send</Button>
              </Form.Item>
              <DivError>{textError}</DivError>
              <DivLink>
                <Text>
                  <Link to="/auth/login">
                    <ArrowLeftOutlined /> Back to Login
                  </Link>
                </Text>
              </DivLink>
            </Form>
          </DivForm>
        </DivContent>
      </DivContainer>
    </DivAuth>
  );
}

export default ForgotPasswordPage;
