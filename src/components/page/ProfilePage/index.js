import { useEffect, useState } from 'react';
import {
  DivContainer,
  DivProfile,
  DivContent,
  RowContent,
  ColLeft,
  ColRight,
  DivImage,
  DivContentLeft,
  NameUser,
  DivNameUser,
  DivInfo,
  Text,
  DivContentRight,
  DivUpload,
} from './styles';
import LoadingComponent from '../../Common/LoadingComponent';
import { Image, Upload, Button, Form, Tabs, notification } from 'antd';
import { CameraOutlined, DeleteOutlined } from '@ant-design/icons';
import FormUpdateProfile from './FormUpdateProfile';

function ProfilePage() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const openNotification = (placement, message) => {
    notification.error({
      message: `Notification Error`,
      description: message,
      placement,
    });
  };

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

  const [items, setItems] = useState([
    {
      key: 'update',
      label: 'Update Profile',
      children: <FormUpdateProfile form={form} options={options} type="edit" />,
    },
    {
      key: 'change',
      label: 'Change Password',
      children: (
        <FormUpdateProfile form={form} options={options} type="change" />
      ),
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      setUser(userInfo);
      form.setFieldsValue({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        sex: userInfo.sex,
      });
      console.log(user);
    }
  }, []);

  const handleChange = async (info) => {
    setLoading(true);
    console.log(JSON.parse(localStorage.getItem('userInfo')));
    console.log(info.file);
    if (
      info.file.type !== 'image/jpeg' &&
      info.file.type !== 'image/jpg' &&
      info.file.type !== 'image/png'
    ) {
      openNotification('top', 'Invalid image type!!');
      return;
    }

    const formData = new FormData();
    formData.append('imageUrl', info.file);
    const response = await fetch(process.env.REACT_APP_API_CHANGE_AVATAR, {
      method: 'PATCH',
      body: formData,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      const user = JSON.parse(localStorage.getItem('userInfo'));
      user.avatarUser = json.imageUpdate;
      localStorage.setItem('userInfo', JSON.stringify(user));
      window.location.reload();
    }
  };

  const handleDeleteAvatar = async () => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (
      user &&
      user.avatarUser.imageId !== 'image-webFilm/bn7cwddncp0ls6rlyczw'
    ) {
      const data = {
        imageUser: user.avatarUser,
      };
      const response = await fetch(process.env.REACT_APP_API_DELETE_AVATAR, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-type': 'application/json',
        },
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        await localStorage.removeItem('userInfo');
        const user = JSON.parse(localStorage.getItem('userInfo'));
        user.avatarUser = json.imageUpdate;
        localStorage.setItem('userInfo', JSON.stringify(user));
        window.location.reload();
      }
    } else {
      openNotification('topRight', 'Default images cannot be deleted!!');
      return;
    }
  };

  if (!user) {
    return <LoadingComponent />;
  }

  return (
    <DivContainer>
      <DivProfile>
        <DivContent>
          <RowContent>
            <ColLeft span={10}>
              <DivContentLeft>
                <DivNameUser>
                  <NameUser>
                    {user.lastName} {user.firstName}
                  </NameUser>
                </DivNameUser>
                {loading ? (
                  <DivImage className="content-mage">
                    <LoadingComponent />
                  </DivImage>
                ) : (
                  <DivImage className="content-mage">
                    <Image width={200} height={200} src={user.avatarUser.url} />
                    <Button
                      icon={<DeleteOutlined />}
                      onClick={handleDeleteAvatar}
                    />
                  </DivImage>
                )}
                <DivUpload>
                  <Upload
                    showUploadList={false}
                    onChange={handleChange}
                    beforeUpload={(file) => {
                      return false;
                    }}>
                    <Button icon={<CameraOutlined />}>Upload new photo</Button>
                  </Upload>
                </DivUpload>
                <DivInfo>
                  <Text>Email: {user.email}</Text>
                  <Text>Phone Number: {user.phoneNumber}</Text>
                  <Text>Sex: {user.sex}</Text>
                </DivInfo>
              </DivContentLeft>
            </ColLeft>
            <ColRight span={14}>
              <DivContentRight>
                <Tabs defaultActiveKey="update" items={items} />
              </DivContentRight>
            </ColRight>
          </RowContent>
        </DivContent>
      </DivProfile>
    </DivContainer>
  );
}

export default ProfilePage;
