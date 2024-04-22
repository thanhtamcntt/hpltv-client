import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import {
  PaySuccessContainer,
  PaySuccessContent,
  Title,
  DivIcon,
  DivInformation,
  DivDetail,
  ListInfoDetail,
  ItemDetail,
  DivThanks,
  TitleThanks,
  DivRedirect,
  ButtonRedirect,
} from './styles.js';
import { useEffect, useState,useContext} from 'react';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckLoginContext } from '../../contexts/LoginContext/index.js';

function PaySuccessPage(props) {
  const [dataPaymentSuccess, setDataPaymentSuccess] = useState();
  const [count, setCount] = useState(5);

  const { userInfo} = useContext(CheckLoginContext);

  const navigate = useNavigate();

  useEffect(() => {
    const addPayment = async () => {
      const dataPayment = await JSON.parse(localStorage.getItem('dataPayment'));

      const data = {
        dataPayment: dataPayment,
        userId: userInfo.userId,
      };
      let response;
      if (props.login) {
        response = await fetch(
          process.env.REACT_APP_API_ADD_DATA_PACKAGE_PAYMENT + '?login=true',
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
              'Content-Type': 'application/json',
            },
          },
        );
      } else {
        response = await fetch(
          process.env.REACT_APP_API_ADD_DATA_PACKAGE_PAYMENT + '?login=false',
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
              'Content-Type': 'application/json',
            },
          },
        );
      }

      const responseJson = await response.json();
      if (responseJson.success) {
        setDataPaymentSuccess(responseJson.order);
        localStorage.removeItem('dataPayment');
      }
    };
    addPayment();
  }, []);

  useEffect(() => {
    let timer;
    if (count - 1 >= 0) {
      timer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else {
      navigate('/');
    }

    return () => clearTimeout(timer);
  }, [count]);

  const handleClickHomePage = () => {
    navigate('/');
  };

  if (!dataPaymentSuccess) {
    return (
      <div className="loading-component">
        <div>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </div>
      </div>
    );
  }
  return (
    <>
      <PaySuccessContainer>
        <PaySuccessContent>
          <DivIcon>
            <CheckCircleFilled />
          </DivIcon>
          <DivInformation>
            <Title>Payment success</Title>
            <DivDetail>
              <ListInfoDetail>
                <ItemDetail>
                  Name package: {dataPaymentSuccess.typePack}
                </ItemDetail>
                <ItemDetail>
                  Price: {dataPaymentSuccess.information.monthlyPrice} USD/month
                </ItemDetail>
                <ItemDetail>
                  Time order: {dataPaymentSuccess.createAt}
                </ItemDetail>
                <ItemDetail>
                  Expired time: {dataPaymentSuccess.expirationDate}
                </ItemDetail>
              </ListInfoDetail>
            </DivDetail>
          </DivInformation>
          <DivThanks>
            <TitleThanks>
              Thank you for subscribing to our movie package! Wishing you a
              wonderful entertainment experience.
            </TitleThanks>
          </DivThanks>
          <DivRedirect>
            <ButtonRedirect onClick={handleClickHomePage}>
              Go to home page <ArrowRightOutlined />
            </ButtonRedirect>
            <span>You will be redirected later {count}</span>
          </DivRedirect>
        </PaySuccessContent>
      </PaySuccessContainer>
    </>
  );
}

export default PaySuccessPage;
