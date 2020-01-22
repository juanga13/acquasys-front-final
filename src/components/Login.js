import React, { Component } from 'react'
import { connect } from 'react-redux'
import sessionActions from '../redux/actions/session'
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Grid, Header, Message } from 'semantic-ui-react';
import requestStates from '../utils/requestStates';

class Login extends Component {
    handleLogin = data => {
        const { email, password } = data;
        this.props.login(email, password);
    }

    render() {
        console.log('render')
        console.log(this.props)
        return (
            <div className=''>
                <Header dividing>Ingrese al sistema</Header>
                {this.props.loginStatus === requestStates.ERROR && <Message error content='Hubo un error al enviar el formulario.'/>}
                <LoginForm onSubmit={this.handleLogin} loading={this.props.loginStatus === requestStates.LOADING}/> 
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