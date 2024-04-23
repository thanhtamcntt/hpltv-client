import Router from './routes';
import './App.css';
import Layout from './layout/index';
import { React, useContext, useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Spin } from 'antd';
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

function App() {
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
    console.log(window.location.pathname);
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
  }, [window.location.pathname]);

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

  if (isLogin === undefined || userInfo === undefined) {
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
  console.log(isLogin);
  return (
    <div className="App">
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
      ) : (
        <Routes>
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
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
