import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'

import sessionActions from './session/session.actions'

import { ADMIN, TEACHER, STUDENT, UNVERIFIED_STUDENT } from '../utils/roles'
import { NONE, LOADING, SUCCESS, ERROR } from '../utils/requestStates'

import './Routes.scss'

import { Contact, Home, Navbar, News } from './main/index.main'
import Login from './session/Login/Login'
import { 
    Profile as AdminProfile, 
    Dashboard as AdminDashboard, 
    AdminCalendar, 
    Students as AdminStudents, 
    Teachers as AdminTeachers, 
    Lessons as AdminLessons, 
    Payments as AdminPayments, 
} from './admin/index.admin'
import {
    Profile as TeacherProfile,
    Dashboard as TeacherDashboard,
    Calendar as TeacherCalendar,
    Lessons as TeacherLessons,
    Attendances as TeacherAttendances,
} from './teacher/index.teacher'
import StudentCalendar from "./student/Calendar/StudentCalendar";
import StudentLessons from "./student/Lessons/StudentLessons";
import StudentProfile from "./student/Profile/StudentProfile";
import StudentDashboard from "./student/Dashboard/StudentDashboard";
import Register from './session/Register/Register'
import UnverifiedProfile from "./unverified/UnverifiedProfile/UnverifiedProfile";


class Routes extends Component {
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
        const role = localStorage.getItem('role')
        switch (role) {
            case ADMIN:
                return (
                    <div>
                        <Navbar/>
                        <div className='routes-container'>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/profile' component={AdminProfile}/>
                                <Route path='/dashboard' component={AdminDashboard}/>
                                <Route path='/calendar' component={AdminCalendar}/>
                                <Route path='/students' component={AdminStudents}/>
                                <Route path='/teachers' component={AdminTeachers}/>
                                <Route path='/lessons' component={AdminLessons}/>
                                <Route path='/payments' component={AdminPayments}/>
                                
                                <Route path="*" render={() => <Redirect to='/dashboard'/>}/>
                            </Switch>
                        </div>
                    </div>
                )
            case TEACHER:
                return (
                    <div>
                        <Navbar/>
                        <div className='routes-container'>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/profile' component={TeacherProfile}/>
                                <Route path='/dashboard' component={TeacherDashboard}/>
                                <Route path='/calendar' component={TeacherCalendar}/>
                                <Route path='/lessons' component={TeacherLessons}/>
                                <Route path='/attendances' component={TeacherAttendances}/>
                                
                                <Route path="*" render={() => <Redirect to='/dashboard'/>}/>
                            </Switch>
                        </div>
                    </div>
                )

            case STUDENT:
                return (
                    <div>
                        <Navbar/>
                        <div className='routes-container'>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/news' component={News}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/profile' component={StudentProfile}/>
                                <Route path='/dashboard' component={StudentDashboard}/>
                                <Route path='/calendar' component={StudentCalendar}/>
                                <Route path='/lessons' component={StudentLessons}/>
                                {/* TODO: student specific routes */}

                                <Route path="*" render={() => <Redirect to='/dashboard'/>}/>
                            </Switch>
                        </div>
                    </div>
                )

            case UNVERIFIED_STUDENT:
                return (
                    <div>
                        <Navbar/>
                        <div className='routes-container'>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/news' component={News}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/profile' component={UnverifiedProfile}/>
                                
                                <Route path="*" render={() => <Redirect to='/dashboard'/>}/>
                            </Switch>
                        </div>
                    </div>
                )

            default: return <h1>Invalid role</h1>
        }
        
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
                        <Route path='/register' component={Register}/>
                        
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