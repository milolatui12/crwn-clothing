import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import { clearCart } from './cart.actions';


function* clear() {
    yield put(clearCart());
}

export function* onclearCart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clear)
}

export function* cartSagas() {
    yield all([call(onclearCart)])
}