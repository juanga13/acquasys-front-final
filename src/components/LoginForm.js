import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import Input from './Input';
import regex from '../utils/regex'

const initialState = {
    values: {
        email: '',
        password: '',
    },
    errors: {
        email: false,
        password: false,
    },
}

class LoginForm extends Component {
    state = initialState;

    _verifyForm() {
        console.log('verify form')
        const { email, password } = this.state.values;
        const errors = {
            email: !regex.email.test(email),
            password: password.length < 4,  // TODO: password regex
        }
        console.log(Object.values(errors))
        if (Object.values(errors).every((value) => !value)) {
            this.setState({...this.state, errors: initialState.errors})
            return true; 
        } else {
            this.setState({...this.state, errors: errors});
            return false;  
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({...this.state, values: {...this.state.values, [e.target.id]: e.target.value}});
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this._verifyForm()) {
            const { email, password } = this.state.values;
            this.props.onSubmit({email, password});
        } else {
        }
    }

    render() {
        // console.log('render')
        return (
            <Form onSubmit={this.handleSubmit} loading={this.props.loading}>
                <Input 
                    key='email'
                    label='Email'
                    id='email'
                    type='email'
                    value={this.state.values.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoFocus
                    icon='mail'
                    error={this.state.errors.email}
                />
                <Input 
                    key='password'
                    label='Contraseña'
                    id='password'
                    type='password'
                    value={this.state.values.password}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    icon='lock'
                    error={this.state.errors.password}
                />
                <Button>Ingresar</Button>
            </Form>
        )
    }
}

export default LoginForm