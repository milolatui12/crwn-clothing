import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './SignUp.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
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
            <div className="sign-up">
                <h2>Do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form>
                    <FormInput
                        type="text"
                        name="name"
                        value={this.state.name}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmpassword"
                        value={this.state.confirmpassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type="submit">sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;