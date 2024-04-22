import React from 'react';
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
} from './styles';
import ItemForm from '../../components/Common/ItemForm';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import Footer from '../../components/Footer';

function LoginPage() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Success:', values.email);
    const response = await fetch(process.env.REACT_APP_API_LOGIN, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.success) {
      await localStorage.setItem('tokenUser', responseJson.token);
      if (localStorage.getItem('tokenUser')) {
        navigate('/choose-payment');
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <DivAuth>
      <DivContainer>
        <DivBanner>
          <TextBanner>ShowHub</TextBanner>
        </DivBanner>
        <DivContent>
          <TextContent>Sign in to ShowHub</TextContent>
          <DivForm>
            <Form
              name="loginForm"
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
                input={<Input />}
              />

              <ItemForm
                label="Password"
                name="password"
                message="Please input your password!"
                input={<Input.Password />}
              />

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}>
                <Button htmlType="submit">Sign in</Button>
              </Form.Item>
              <DivLink>
                <Text>
                  New to ShowHub? <Link to="/auth/signup">Sign up</Link>
                </Text>
                <Text>
                  <Link to="/auth/signup">Forgot password ?</Link>
                </Text>
              </DivLink>
            </Form>
          </DivForm>
        </DivContent>
      </DivContainer>
      <DivFooter>
        <Footer />
      </DivFooter>
    </DivAuth>
  );
}

export default LoginPage;
