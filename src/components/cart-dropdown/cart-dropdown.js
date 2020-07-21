import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';


const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                }
            </div>
            <CustomButton>go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);