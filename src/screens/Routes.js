import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { Loader, Dropdown } from 'semantic-ui-react'
// actions
import sessionActions from './session/session.actions'
// scss
import './Routes.scss'
// component screens
import { Contact, Home, Navbar, News } from './main/index.main'
import Login from './session/Login/Login'
import { AdminCalendar, Dashboard, Lessons, Payments, Profile, Students, Teachers } from './admin/index.admin'
// utils
import { NONE, LOADING, SUCCESS, ERROR } from '../utils/requestStates'

const sexes = ['F', 'M']

class Routes extends Component {
    state = {
        value: sexes[0]
    }

    componentDidMount() {
        if (localStorage.getItem('token') !== null) this.props.refreshToken();
    }

    render() {
        const { isLoggedIn, refreshStatus } = this.props;
        const hasToken = localStorage.getItem('token') !== null;
        if (!hasToken) {
            return this.renderNotLoggedInRoutes()
        } else {
            if (isLoggedIn) return this.renderLoggedInRoutes()
            if (refreshStatus === NONE || refreshStatus === LOADING) {
                return <Loader/>
            } else if (refreshStatus === ERROR) {
                return this.renderNotLoggedInRoutes()
            } else if (refreshStatus === SUCCESS) {
                return this.renderLoggedInRoutes()
            } else return <h1>wtf</h1>
        }
    }

    renderLoggedInRoutes() {
        return (
            <div>
                <Navbar/>
                <div className='routes-container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/dashboard' component={Dashboard}/>
                        <Route path='/calendar' component={AdminCalendar}/>
                        <Route path='/students' component={Students}/>
                        <Route path='/teachers' component={Teachers}/>
                        <Route path='/lessons' component={Lessons}/>
                        <Route path='/payments' component={Payments}/>
                        <Route path='/profile' component={Profile}/>
                        
                        <Route path="*" render={() => <Redirect to='/dashboard'/>}/>
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
                        <Route path='/news' component={News}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/login' component={Login}/>
                        
                        <Route path="*" render={() => <Redirect to='/login'/>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
    refreshStatus: state.session.refreshStatus,
})

const mapDispatchToProps = dispatch => ({
    refreshToken: () => dispatch(sessionActions.refreshToken()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Routes))