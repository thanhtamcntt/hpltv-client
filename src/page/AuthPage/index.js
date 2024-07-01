import {
  AuthContainer,
  AuthContent,
  Title,
  Text,
  DivInformation,
  DivDetail,
  ButtonVerify,
  DivHeader,
} from './styles.js';
import { Form, Input, message } from 'antd';
import HeaderPaymentComponent from '../../components/HeaderPaymentComponent/index.js';
import { API_VERIFY_LOGIN } from '../../configs/apis.js';
import { useNavigate } from 'react-router-dom';
import { CheckLoginContext } from '../../contexts/LoginContext/index.js';
import { useContext } from 'react';

function AuthPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { setIsLogin } = useContext(CheckLoginContext);

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Confirmed successfully.',
      duration: 1,
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Confirmation code is incorrect!!',
      duration: 2.5,
    });
  };

  const onFinish = async (values) => {
    const response = await fetch(API_VERIFY_LOGIN, {
      method: 'POST',
      body: JSON.stringify({
        code: values.code,
      }),
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
        'Content-type': 'application/json',
      },
    });
    const responseJson = await response.json();
    if (responseJson.success) {
      success();
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      error();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      {contextHolder}
      <AuthContainer>
        <DivHeader>
          <div>
            <HeaderPaymentComponent />
          </div>
        </DivHeader>
        <AuthContent>
          <DivInformation>
            <Title>Two-factor authentication</Title>
            <Text>
              Open your authentication app and enter the code for DigitalOcean.
            </Text>
            <DivDetail>
              <Form
                name="verifyForm"
                labelCol={{
                  flex: '110px',
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
                style={{
                  maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter the confirmation code!!',
                    },
                  ]}>
                  <Input placeholder="Enter 6 digit code" />
                </Form.Item>

                <Form.Item label="">
                  <ButtonVerify type="primary" htmlType="submit">
                    Verify
                  </ButtonVerify>
                </Form.Item>
              </Form>
            </DivDetail>
          </DivInformation>
        </AuthContent>
      </AuthContainer>
    </>
  );
}

export default AuthPage;
