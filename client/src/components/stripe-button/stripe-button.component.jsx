import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { response } from "express";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2ZqKZP77gs8mVQpnVUaHwp15006VW6ZZdN";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please ensure you are using the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
