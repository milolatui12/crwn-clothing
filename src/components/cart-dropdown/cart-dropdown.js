import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-action';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';


const CartDropdown = ({ cartItems,  history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length?
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    )):
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push(`/checkout`)
                    dispatch(toggleCartHidden())
                }}
            >
                go to checkout
            </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));