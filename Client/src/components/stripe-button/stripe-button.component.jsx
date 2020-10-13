import React from 'react';
import { connect } from 'react-redux';

import { clearCart } from '../../redux/cart/cart.actions';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HDJmjHZEhke9kOMFAPFuRwg6W6TOSp6ktTQyFZ892M7g2L2b7tVTrhVeTnlPMTTRLOtHi8IduzT9LitdwqCVtjJ009lxlYLsk';

  const onToken = token => {
    axios({
      method: 'post',
      url: '/payment',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
    .then(response => {
        alert('succesful payment');
        clearCart();
    })
    .catch(error => {
        console.log('Payment Error: ', error);
        alert(
        'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
    });
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
