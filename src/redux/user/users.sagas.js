import { takeLatest, put, all, call } from 'redux-saga/effects';

import UsersActionTypes from './user.types';

import { signInSuccess, signInFailure } from './user.actions';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

function* getSnapshotFromUserAuth(userAuth) {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithEmail({payload: { email, password }}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UsersActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignINStart() {
    yield takeLatest(UsersActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignINStart)]);
}