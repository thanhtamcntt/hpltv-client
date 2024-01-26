import Router from './routes';
import './App.css';
import Layout from './layout/index';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import LandingPage from './components/page/LandingPage';
import LoginPage from './components/page/LoginPage';
import SignupPage from './components/page/SignupPage';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('token') ? true : false,
  );
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [localStorage.getItem('token')]);

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

  return (
    <div className="App">
      {isLogin ? (
        <Layout>
          <Router />
        </Layout>
      ) : (
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/landing-page" replace={true} />}
          />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
