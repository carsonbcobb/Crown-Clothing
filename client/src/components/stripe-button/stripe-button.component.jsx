import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_2ZqKZP77gs8mVQpnVUaHwp15006VW6ZZdN";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Succesful!");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Crown Clothing Company"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
