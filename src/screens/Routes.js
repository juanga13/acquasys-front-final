import React, { Component } from 'react'
import Navbar from './main/Navbar/Navbar'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './main/Home/Home'
import Login from './session/Login/Login'
import './Routes.scss'
import sessionActions from './session/session.actions'
import { connect } from 'react-redux'
import Profile from './admin/Profile/Profile'
import requestStates from '../utils/requestStates'
import NoMatch from './common/NoMatch'

class Routes extends Component {
    componentDidMount() {
        this.props.refreshLogin();
    }

    render() {
        const { isLoggedIn, loginStatus } = this.props;
        if (isLoggedIn && loginStatus === requestStates.SUCCESS) {
            return this.renderLoggedInRoutes()
        } else {
            return this.renderNotLoggedInRoutes()
        }
    }

    renderLoggedInRoutes() {
        return (
            <div>
                <Navbar/>
                <div className='routes-container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/profile' component={Profile}/>
                    </Switch>
                </div>
            </div>
        )
    }

    renderNotLoggedInRoutes() {
        return (
            <div>
                <Navbar/>
                <div className='routes-container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path="*" component={NoMatch}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
    loginStatus: state.session.loginStatus,
})

const mapDispatchToProps = dispatch => ({
    refreshLogin: () => dispatch(sessionActions.refreshLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Routes))