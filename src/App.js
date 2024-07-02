import Router from './routes';
import './App.css';
import Layout from './layout/index';
import { React, useContext, useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import LandingPage from './page/LandingPage';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import { jwtDecode } from 'jwt-decode';
import PaymentPage from './page/PaymentPage';
import OptionCheckoutPage from './page/OptionCheckoutPage';
import PaySuccessPage from './page/PaySuccessPage';
import CheckoutFormPage from './page/CheckoutFormPage';
import { CheckLoginContext } from './contexts/LoginContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies } from './redux/action/home/movies';
import { fetchAllSeries } from './redux/action/home/series';
import LoadingPage from './page/LoadingPage';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { ButtonCustomerSupport } from './styles';
import ModalCustomerSupport from './components/ModalCustomerSupport';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import ForgotPasswordPage from './page/ForgotPasswordPage';
import ResetPasswordPage from './page/ResetPasswordPage';
import AuthPage from './page/AuthPage';

const newSocket = io('http://localhost:4000/user');

function App() {
  const [isModal, setIsModal] = useState(false);
  const [socket, setSocket] = useState();
  const [isState, setIsState] = useState(0);
  const [message, setMessage] = useState([]);
  const [roomId, setRoomId] = useState();
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo, isLogin } = useContext(CheckLoginContext);
  const movies = useSelector((state) => state.moviesSlice);
  const series = useSelector((state) => state.seriesSlice);

  useEffect(() => {
    Promise.all([dispatch(fetchAllMovies()), dispatch(fetchAllSeries())]);
  }, [dispatch]);

  useEffect(() => {
    let check = false;
    const arr = window.location.pathname.split('/');
    const idFilm = arr[arr.length - 1];
    if (window.location.pathname.startsWith('/film/')) {
      for (let item of movies.data) {
        if (item._id === idFilm) {
          check = true;
          break;
        }
      }
      if (!check) {
        navigate('/');
      }
    } else if (window.location.pathname.startsWith('/series/')) {
      const idFilm = arr[arr.length - 1];
      for (let item of series.data) {
        if (item._id === idFilm) {
          check = true;
          break;
        }
      }
      if (!check) {
        navigate('/');
      }
    }
  }, [pathname, series, movies, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const tokenDecoded = jwtDecode(localStorage.getItem('token'));
      const dateExpiresIn = new Date(tokenDecoded.exp);
      const currentDate = new Date();
      if (currentDate > dateExpiresIn) {
        localStorage.clear();
        const tokenUser = localStorage.getItem('token');
        if (tokenUser === null) {
          window.location.reload();
        }
      }
    }
  }, [new Date() + 60 * 1000]);

  // socket chat
  const handleOpenCustomerSupport = () => {
    setIsModal((prev) => !prev);
  };

  const handleOk = () => {
    setIsModal(false);
  };
  const handleCancel = () => {
    setIsModal(false);
  };

  const handleOutRoom = () => {
    setVisible(false);
    setIsState(0);
  };

  const handleChatCustomer = async (values) => {
    setIsState(2);
    setTimeout(() => {
      const id = uuidv4();
      setRoomId(id);
      const data = {
        roomId: id,
        userId: userInfo.userId,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        issues: values.issues,
        userInfo: userInfo,
      };
      newSocket.emit('joinRoom', data);
      newSocket.emit('receiveRoom', data);
    }, 300);
  };
  useEffect(() => {
    if (isState === 2) {
      setSocket(newSocket);

      newSocket.on('chatCustomer', (data) => {
        console.log(data);
        setMessage((prev) => [...prev, data]);
      });

      newSocket.on('forceLeave', (roomId) => {
        newSocket.emit('leaveRoom', roomId);
        setVisible(true);
        setMessage([]);
        setRoomId();
      });
      return () => {
        newSocket.off('chatCustomer');
        // newSocket.disconnect();
      };
    }
  }, [isState, message]);
  console.log(isLogin);

  if (isLogin === undefined || userInfo === undefined) {
    return (
      <div className="loading-component">
        <LoadingPage />
      </div>
    );
  }
  return (
    <div className="App">
      {isLogin !== 0 && isLogin !== -1 && (
        <>
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
            roomId={roomId}
            setRoomId={setRoomId}
            visible={visible}
            handleOutRoom={handleOutRoom}
          />
          <ButtonCustomerSupport onClick={handleOpenCustomerSupport}>
            <CustomerServiceOutlined />
          </ButtonCustomerSupport>
        </>
      )}
      {isLogin === 2 ? (
        <Layout>
          <Router />
        </Layout>
      ) : isLogin === 1 ? (
        <Routes>
          <Route
            path="/choose-payment"
            element={<PaymentPage login={false} />}
          />
          <Route
            path="/payment-success"
            element={<PaySuccessPage login={false} />}
          />
          <Route
            path="/option-checkout"
            element={<OptionCheckoutPage login={false} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutFormPage login={false} />}
          />

          <Route
            path="*"
            element={<Navigate to={'/choose-payment'} replace={true} />}
          />
        </Routes>
      ) : isLogin === 0 ? (
        <Routes>
          <Route path="/two-factor-authentication" element={<AuthPage />} />
          <Route
            path="*"
            element={
              <Navigate to={'/two-factor-authentication'} replace={true} />
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route
            path="/auth/reset-password/:token"
            element={<ResetPasswordPage />}
          />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordPage />}
          />

          <Route path="/landing-page" element={<LandingPage />} />
          <Route
            path="*"
            element={<Navigate to={'/landing-page'} replace={true} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
