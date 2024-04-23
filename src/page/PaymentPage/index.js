import { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import {
  PaymentContainer,
  PaymentHeader,
  ServicePack,
  TitleService,
  DivPackage,
  RowPack,
  ColPack,
  DivFooter,
  DivNotification,
  DivActionContinue,
  ButtonContinue,
} from './styles';
import { Spin } from 'antd';
import HeaderPaymentComponent from '../../components/HeaderPaymentComponent';
import PackageComponent from '../../components/PackageComponent';
import { useNavigate } from 'react-router-dom';
import { CheckLoginContext } from '../../contexts/LoginContext';

function PaymentPage(props) {
  const [dataChoosePayment, setDataChoosePayment] = useState();
  const [data, setData] = useState();
  const [dataDisabled, setDataDisabled] = useState();

  
  const { userInfo } = useContext(CheckLoginContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPayment = async () => {
      const response = await fetch(
        process.env.REACT_APP_API_GET_ALL_PAYMENT_DATA,
      );
      const dataJson = await response.json();
      console.log(dataJson.data[0]);
      setDataChoosePayment(dataJson.data[0]);
      setData(dataJson.data);
    };
    fetchAllPayment();
  }, []);

  useEffect(() => {
    if (props.login) {
      const fetchPaymentDisabled = async () => {
        const response = await fetch(
          process.env.REACT_APP_API_GET_ALL_PAYMENT_DATA,
        );
        const dataJson = await response.json();

        const responseOrder = await fetch(
          process.env.REACT_APP_API_GET_ALL_ORDER,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
            },
          },
        );
        const dataJsonOrder = await responseOrder.json();
        console.log(dataJsonOrder.data);
        console.log(dataJson.data);
        let dataDisabledObj = [];
        dataJsonOrder.data.map((order, id) => {
          if (order.userId === userInfo.userId) {
            dataJson.data.map((item, id) => {
              if (item._id.toString() >= order.information._id.toString()) {
                dataDisabledObj.push(item._id);
              }
            });
          }
        });
        setDataDisabled(dataDisabledObj);
      };
      fetchPaymentDisabled();
    }
  }, [props.login]);

  const handleCLickContinue = async () => {
    await localStorage.setItem(
      'dataPayment',
      JSON.stringify(dataChoosePayment),
    );
    navigate('/option-checkout');
  };

  if (!dataChoosePayment) {
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
    <PaymentContainer>
      {!props.login && (
        <PaymentHeader>
          <HeaderPaymentComponent />
        </PaymentHeader>
      )}
      <ServicePack>
        <TitleService>
          Choose the service package that's right for you
        </TitleService>
        <DivPackage>
          <RowPack>
            {data &&
              data.map((item, id) => {
                return (
                  <ColPack span={6} key={id}>
                    <PackageComponent
                      item={item}
                      dataChoosePayment={dataChoosePayment}
                      setDataChoosePayment={setDataChoosePayment}
                      dataDisabled={dataDisabled}
                    />
                  </ColPack>
                );
              })}
          </RowPack>
        </DivPackage>
        <DivNotification>
          <p>
            Whether you can watch in HD (720p), Full HD (1080p), Ultra HD (4K)
            and HDR depends on your internet service and device capabilities.
            Not all content is available in all resolutions. See our Terms of
            Use for more details.
          </p>
          <p>
            Only people who live with you can use your account. Watch on 4
            different devices at once with the Premium plan, 2 with the Standard
            plan, and 1 with the Basic and Mobile plans.
          </p>
        </DivNotification>
        <DivActionContinue>
          <ButtonContinue onClick={handleCLickContinue}>
            Continue
          </ButtonContinue>
        </DivActionContinue>
      </ServicePack>
      {!props.login && (
        <DivFooter>
          <Footer />
        </DivFooter>
      )}
    </PaymentContainer>
  );
}

export default PaymentPage;
