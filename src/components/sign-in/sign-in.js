import React from 'react';
import { signInWithGoogle, auth } from '../../firebase/Firebase';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error);
        }
        
    }

    handleChange =(event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">Already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="email"
                        required 
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password"
                        required
                    />
                    <div className="signin-button">
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={ signInWithGoogle }>sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;