import React, { Component } from 'react'
import { connect } from 'react-redux'
import sessionActions from '../session.actions'
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Header, Message, Segment } from 'semantic-ui-react';
import requestStates from '../../../utils/requestStates';
import './Login.scss'

class Login extends Component {
    handleLogin = data => {
        const { email, password } = data;
        this.props.login(email, password);
    }

    render() {
        console.log('rendering login')
        return (
            <div className='login-form'>
                <Segment size='big'>
                    <Header dividing>Ingrese al sistema</Header>
                    {this.props.loginStatus === requestStates.ERROR && <Message error content='Hubo un error al enviar el formulario.'/>}
                    {/* <h1>{}</h1> */}
                    <LoginForm onSubmit={this.handleLogin} loading={this.props.loginStatus === requestStates.LOADING}/> 
                </Segment>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    loginStatus: state.session.loginStatus,
    response: state.session.response,
})

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(sessionActions.login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))