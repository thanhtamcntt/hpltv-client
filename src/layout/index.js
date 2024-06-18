import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { ButtonCustomerSupport } from './styles';
import ModalCustomerSupport from '../components/ModalCustomerSupport';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const newSocket = io('http://localhost:4000/user');
const newSocketAdmin = io('http://localhost:4000/admin');

function Layout({ children }) {
  const [isModal, setIsModal] = useState(false);
  const [socket, setSocket] = useState();
  const [isState, setIsState] = useState(0);
  const [message, setMessage] = useState([]);
  const handleOpenCustomerSupport = () => {
    setIsModal((prev) => !prev);
  };

  const handleOk = () => {
    setIsModal(false);
  };
  const handleCancel = () => {
    setIsModal(false);
  };

  const handleChatCustomer = async (values) => {
    setIsState(2);
    setTimeout(() => {
      const id = uuidv4();
      const data = {
        roomId: id,
        nameUser: values.name,
        issues: values.issues,
      };
      newSocket.emit('joinRoom', data);
      newSocket.emit('receiveRoom', data);
    }, 500);
  };

  useEffect(() => {
    if (isState === 2) {
      // console.log('vo day');
      // const storedSocketId = localStorage.getItem('socketId');

      // if (!storedSocketId) {
      //   const newSocket = io('http://localhost:4000/user', {
      //     query: { socketId: storedSocketId },
      //   });
      //   newSocket.on('connect', () => {
      //     localStorage.setItem('socketId', newSocket.id);
      //   });
      //   setSocket(newSocket);
      // } else {

      setSocket(newSocket);
      // }

      newSocket.on('chatCustomer', (data) => {
        console.log(data);
        setMessage((prev) => [...prev, data]);
      });
      return () => {
        // if (socket) {
        // newSocket.off('chatCustomer');
        // newSocket.disconnect();
        // }
      };
    }
  }, [isState, message]);

  return (
    <React.Fragment>
      <ModalCustomerSupport
        isModal={isModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
        isState={isState}
        setIsState={setIsState}
        socket={socket}
        handleChatCustomer={handleChatCustomer}
        setMessage={setMessage}
        message={message}
      />
      <ButtonCustomerSupport onClick={handleOpenCustomerSupport}>
        <CustomerServiceOutlined />
      </ButtonCustomerSupport>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
