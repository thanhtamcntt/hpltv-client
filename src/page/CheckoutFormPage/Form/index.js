import React, { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { FormCheckout, ButtonCheckout } from './styles';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = (props) => {
  console.log(props);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    const clientSecret = props.clientSecret;

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://google.com',
      },
      redirect: 'if_required',
    });

    if (error) {
      console.log(error);
      setErrorMessage(error.message);
    } else {
      navigate('/payment-success');
    }
  };

  return (
    <FormCheckout onSubmit={handleSubmit}>
      <PaymentElement />
      <ButtonCheckout type="submit" disabled={!stripe || !elements}>
        Pay
      </ButtonCheckout>
      {errorMessage && <div>{errorMessage}</div>}
    </FormCheckout>
  );
};

export default CheckoutForm;
