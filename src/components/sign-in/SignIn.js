import React from 'react';
import FormInput from '../form-input/FormInput'
import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
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
                <h2>Already have an account</h2>
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

                    <input type="submit" value="Submit form"></input>
                </form>
            </div>
        )
    }
}

export default SignIn;