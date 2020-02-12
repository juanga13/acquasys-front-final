import React, { Component } from 'react'
import { connect } from 'react-redux'
import sessionActions from '../actions'
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Header, Message, Segment } from 'semantic-ui-react';
import { LOADING, ERROR } from '../../../utils/requestStates';
import './Login.scss'

class Login extends Component {
    handleLogin = data => {
        const { email, password } = data;
        this.props.login(email, password);
    }

    render() {
        const { loginStatus, loginResponse } = this.props
        return (
            <div className='login-form'>
                <Segment size='big'>
                    <Header dividing>Ingrese al sistema</Header>
                    {loginStatus === ERROR && <Message error content={'Hubo un error al enviar el formulario (' + loginResponse + ')'}/>}
                    <LoginForm onSubmit={this.handleLogin} loading={loginStatus === LOADING}/> 
                </Segment>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    loginStatus: state.session.loginStatus,
    loginResponse: state.session.loginResponse,
})

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(sessionActions.login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))