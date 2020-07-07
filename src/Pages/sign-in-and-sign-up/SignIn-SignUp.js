import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './SignIn-SignUp.scss'

const SignInAndSignUp = () => {
    return (
        <div className="signin-signup">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;