import React, { Component } from 'react'
import Navbar from './main/Navbar/Navbar'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './main/Home/Home'
import Login from './session/Login/Login'
import './Routes.scss'
import sessionActions from './session/session.actions'
import { connect } from 'react-redux'
import { Profile } from './admin/Profile/Profile'
import requestStates from '../utils/requestStates'
import { NoMatch } from './common/NoMatch'

class Routes extends Component {
    componentDidMount() {
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token') !== undefined) this.props.refreshToken();
    }

    render() {
        const { refreshTokenStatus } = this.props;
        if (refreshTokenStatus === requestStates.NONE || refreshTokenStatus === requestStates.LOADING) {
            return (
                <div>
                    <h1>Refreshing token</h1>
                </div>
            )
        } else if (refreshTokenStatus === requestStates.SUCCESS) {
            console.log('logged in, rendering PROFGILE')
            return (
                <div className='routes-container'>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/profile' component={Profile}/>
                    </Switch>
                </div>
            )
        } else if (refreshTokenStatus === requestStates.ERROR) {
            console.log('ERROR invalid token')
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
        } else return <h1>refreshTokenStatus does not exists????</h1>
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
    refreshTokenStatus: state.session.refreshTokenStatus,
})

const mapDispatchToProps = dispatch => ({
    refreshToken: () => dispatch(sessionActions.refreshToken()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Routes))