import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Splitform from "./Splitform";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IeHluKti8d84EZ7062A8Bfh94DGIiwDRFbR9IhIShbZJkvRGAdPIagSFjwBD5CPA4XGTBKSeKnEEY3DmcMJM9kp00GFsc2FLX"
);

const Payment = ({ handlePaymentSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <Splitform handlePayment={handlePaymentSuccess}></Splitform>
    </Elements>
  );
};

export default Payment;
