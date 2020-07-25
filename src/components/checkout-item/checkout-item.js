import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart-action';

import './checkout-item.scss';

const CheckoutItem = ({ item, clearItem }) => {
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">${price}</span>
            <div onClick={() => clearItem(item)} className="remote-button">&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);