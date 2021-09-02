import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import useResponsiveFontSize from "./UseResponsiveFontSize";
import ToastBody from "react-bootstrap/ToastBody";
import ToastHeader from "react-bootstrap/ToastHeader";
import Toast from "react-bootstrap/Toast";
import "./Splitform.css";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,

          color: "black",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};
const Splitform = ({ handlePayment }) => {
  const [show, setShow] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
      setShow(true);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setShow(true);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="payment-form">
      <form onSubmit={handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            options={options}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            options={options}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <label>
          CVC
          <CardCvcElement
            options={options}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && (
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "relative",
            minHeight: "100px",
          }}
        >
          <Toast
            style={{ marginTop: "25%", marginLeft: "30%" }}
            className="bottom-0 start-50 translate-middle-x"
            onClose={() => setShow(false)}
            show={show}
            delay={5000}
            autohide
          >
            <Toast.Body className="bg-danger">
              Opps! You entered wrong credentials
            </Toast.Body>
          </Toast>
        </div>
      )}
      {paymentSuccess && (
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "relative",
            minHeight: "100px",
          }}
        >
          <Toast
            className="bottom-0 start-50 translate-middle-x"
            onClose={() => setShow(false)}
            show={show}
            delay={5000}
            autohide
          >
            <Toast.Body className="bg-success">
              Congratulations! Your order has been placed
            </Toast.Body>
          </Toast>
        </div>
      )}
    </div>
  );
};

export default Splitform;
