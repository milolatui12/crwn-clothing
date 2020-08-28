import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HDJmjHZEhke9kOMFAPFuRwg6W6TOSp6ktTQyFZ892M7g2L2b7tVTrhVeTnlPMTTRLOtHi8IduzT9LitdwqCVtjJ009lxlYLsk';

  const onToken = token => {
      console.log(token);
      alert('Payment Successful');
  }

  return (
      <StripeCheckout 
          label="Pay Now"
          name="CRWN Clothing Ltd."
          billingAddress
          shippingAddress
          image="https://svgshare.com/i/CUz.svg"
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
      />
  )
}

export default StripeCheckoutButton;
