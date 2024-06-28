import React, { useEffect, useState } from 'react';
import {
  DivAuth,
  DivContent,
  DivContainer,
  DivBanner,
  DivForm,
  TextBanner,
  Text,
  DivLink,
  TextContent,
  DivError,
} from './styles';
import ItemForm from '../../components/Common/ItemForm';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Select, message } from 'antd';
import LogoImage from '../../components/Common/ImageBanner';
import { API_SIGNUP } from '../../configs/apis';

function SignupPage() {
  const [textError, setTextError] = useState();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [options, setOptions] = useState([
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ]);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successful registration, password will be sent to your email.',
      duration: 2,
    });
  };

  const onFinish = async (values) => {
    console.log('Success:', values);
    const response = await fetch(API_SIGNUP, {
      method: 'POST',
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        sex: values.sex,
        // password: values.password,
        // confirmPassword: values.confirmPassword,
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
      }, 1000);
    } else {
      setTextError(responseJson.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleFocus = () => {
    setTextError();
  };

  return (
    <DivAuth>
      {contextHolder}
      <DivContainer>
        <DivBanner>
          <TextBanner>
            <LogoImage height="60" width="400" />
          </TextBanner>
        </DivBanner>
        <DivContent>
          <TextContent>Sign up to ShowHub</TextContent>
          <DivForm>
            <Form
              form={form}
              name="signupForm"
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
                label="First Name"
                name="firstName"
                message="Please input your first name!"
                input={<Input onFocus={handleFocus} />}
              />
              <ItemForm
                label="Last Name"
                name="lastName"
                message="Please input your last name!"
                input={<Input onFocus={handleFocus} />}
              />
              <ItemForm
                label="Email"
                name="email"
                message="Please input your email!"
                input={<Input onFocus={handleFocus} />}
              />
              <ItemForm
                label="Phone Number"
                name="phoneNumber"
                message="Please input your phone number!"
                input={<Input onFocus={handleFocus} />}
              />
              <ItemForm
                label="Gender"
                name="sex"
                message="Please input your sex!"
                input={
                  <Select
                    className="select-sex-signup"
                    style={{
                      width: '100%',
                      textAlign: 'left',
                    }}
                    allowClear
                    options={options}
                  />
                }
              />
              {/* <ItemForm
                label="Password"
                name="password"
                message="Please input your password!"
                input={<Input.Password onFocus={handleFocus} />}
              />
              <ItemForm
                label="Confirm Password"
                name="confirmPassword"
                message="Please input your confirm password!"
                input={<Input.Password onFocus={handleFocus} />}
              /> */}
              <Form.Item
                className="btn-login"
                wrapperCol={{
                  span: 24,
                }}>
                <Button htmlType="submit">Sign up</Button>
              </Form.Item>
              <DivError>{textError}</DivError>
              <DivLink>
                <Text>
                  Already have a account ? <Link to="/auth/login">Sign in</Link>
                </Text>
              </DivLink>
            </Form>
          </DivForm>
        </DivContent>
      </DivContainer>
    </DivAuth>
  );
}

export default SignupPage;
