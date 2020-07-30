import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './signin-signup.scss'

const SignInAndSignUp = () => {
    return (
        <div className="signin-signup">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;