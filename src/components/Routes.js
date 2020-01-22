import React, { Component } from 'react'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'

class Routes extends Component {
    render() {
        return (
            <div className='main'>
                <Navbar/>
                <Switch>
                    <Route exact path='/' render={() => <Home/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                </Switch>
            </div>
        )
    }
}

export default Routes
