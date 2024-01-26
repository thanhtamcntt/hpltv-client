import React, { useEffect } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import InputItem from './InputItem';
import validator from 'validator';
import { jwtDecode } from 'jwt-decode';

function ModalEditProfile(props) {
  const [form] = Form.useForm();

  const handleCancel = () => {
    props.setIsModal(false);
    form.resetFields();
  };

  const onFinish = async (values) => {
    if (props.type === 'edit') {
      if (
        validator.isEmail(values.email) &&
        validator.isMobilePhone(values.phoneNumber)
      ) {
        const response = await fetch(process.env.REACT_APP_API_UPDATE_PROFILE, {
          method: 'PATCH',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          const tokenUser = jwtDecode(localStorage.getItem('token')).user;
          if (tokenUser) {
            tokenUser.username = json.user.username;
            tokenUser.email = json.user.email;
            tokenUser.phoneNumber = json.user.phoneNumber;
          }
        }
      }
    } else {
      const response = await fetch(process.env.REACT_APP_API_CHANGE_PASSWORD, {
        method: 'PATCH',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const json = await response.json();
      console.log(json);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  console.log('user', props.user);

  useEffect(() => {
    if (props.type === 'edit') {
      form.setFieldsValue({
        username: props.user.username,
        email: props.user.email,
        phoneNumber: props.user.phoneNumber,
      });
    }
  }, [props.isModal]);

  return (
    <Modal
      title={props.title}
      open={props.isModal}
      onCancel={handleCancel}
      footer={null}>
      <Form
        form={form}
        name={props.type === 'edit' ? 'ProfileEditForm' : 'ProfileUpdateForm'}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        {props.type === 'edit' ? (
          <>
            <InputItem
              label="Username"
              name="username"
              message="Please input your username!"
              input={<Input />}
            />
            <InputItem
              label="E-mail"
              name="email"
              message="Please input your email!"
              input={<Input />}
            />
            <InputItem
              label="Phone Number"
              name="phoneNumber"
              message="Please input your phone number!"
              input={<Input />}
            />
          </>
        ) : (
          <>
            <InputItem
              label="Current password"
              name="currentPassword"
              message="Please input your current password!"
              input={<Input.Password />}
            />
            <InputItem
              label="New password"
              name="newPassword"
              message="Please input your new password!"
              input={<Input.Password />}
            />
            <InputItem
              label="Confirm new password"
              name="confirmNewPassword"
              message="Please input your confirm new password!"
              input={<Input.Password />}
            />
          </>
        )}

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
          className="btn-update-profile">
          <Button htmlType="submit">Update</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalEditProfile;
