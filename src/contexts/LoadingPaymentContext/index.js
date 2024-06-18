import React, { createContext, useState } from 'react';

export const CheckLoadingContext = createContext();

function LoadingPaymentContext({ children }) {
  const [isLogin, setIsLogin] = useState();

  return (
    <CheckLoadingContext.Provider
      value={{
        setIsLogin,
        isLogin,
      }}>
      {children}
    </CheckLoadingContext.Provider>
  );
}

export default LoadingPaymentContext;
