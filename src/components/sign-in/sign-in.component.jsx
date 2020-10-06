import React, { useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Message from '../message/message.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { selectSignInError } from '../../redux/user/user.selectors';

import { SignInContainer, ButtonContainer } from './sign-in.styles';


const  SignIn = ({ googleSignIn, emailSignIn, error}) => {

  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  
  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

    emailSignIn(email, password)
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <Message error={ error } />
        <ButtonContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  error: selectSignInError
})

const mapDispatchToProps = dispatch => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
