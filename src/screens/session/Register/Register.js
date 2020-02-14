import React, { Component } from 'react'
import { connect } from 'react-redux'
import sessionActions from '../session.actions'
import { withRouter } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import { Header, Message, Segment } from 'semantic-ui-react';
import { LOADING, ERROR } from '../../../utils/requestStates';
import './Register.scss'

class Register extends Component {
    handleRegister = data => {
        const { email, password } = data;
        this.props.register(email, password);
    }

    render() {
        const { registerStatus, registerResponse } = this.props
        return (
            <div className='register-form'>
                <Segment size='big'>
                    <Header dividing>Registrarse</Header>
                    {registerStatus === ERROR && <Message error content={'Hubo un error al ingresar al sistema, Email o contraseña incorrectos'}/>}
                    <RegisterForm onSubmit={this.handleRegister} loading={registerStatus === LOADING}/> 
                </Segment>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    registerStatus: state.session.registerStatus,
    registerResponse: state.session.registerResponse,
})

const mapDispatchToProps = (dispatch) => ({
    register: (email, password) => dispatch(sessionActions.register(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))