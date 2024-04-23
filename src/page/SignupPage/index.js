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
} from './styles';
import ItemForm from '../../components/Common/ItemForm';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import Footer from '../../components/Footer';

function SignupPage() {
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

  const onFinish = async (values) => {
    console.log('Success:', values);
    const response = await fetch(process.env.REACT_APP_API_SIGNUP, {
      method: 'POST',
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        sex: values.sex,
        password: values.password,
        confirmPassword: values.confirmPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    const responseJson = await response.json();
    console.log(response.status);
    console.log(responseJson);
    if (responseJson.success) {
      navigate('/auth/login');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    form.setFieldsValue({
      sex: 'female',
    });
  }, []);

  return (
    <DivAuth>
      <DivContainer>
        <DivBanner>
          <TextBanner>ShowHub</TextBanner>
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
                input={<Input />}
              />
              <ItemForm
                label="Last Name"
                name="lastName"
                message="Please input your last name!"
                input={<Input />}
              />
              <ItemForm
                label="Email"
                name="email"
                message="Please input your email!"
                input={<Input />}
              />
              <ItemForm
                label="Phone Number"
                name="phoneNumber"
                message="Please input your phone number!"
                input={<Input />}
              />
              <ItemForm
                label="Sex"
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
              <ItemForm
                label="Password"
                name="password"
                message="Please input your password!"
                input={<Input.Password />}
              />
              <ItemForm
                label="Confirm Password"
                name="confirmPassword"
                message="Please input your confirm password!"
                input={<Input.Password />}
              />
              <Form.Item
                wrapperCol={{
                  span: 24,
                }}>
                <Button htmlType="submit">Sign up</Button>
              </Form.Item>
              <DivLink>
                <Text>
                  Already have a account ? <Link to="/auth/login">Sign in</Link>
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

export default SignupPage;
