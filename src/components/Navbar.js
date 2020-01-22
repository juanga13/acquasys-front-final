import React, { Component } from 'react'
import { Menu, Image, Button } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import sessionActions from '../redux/actions/session'
import { connect } from 'react-redux'

class Navbar extends Component {
    render() {
        return (
            <div className=''>
                <Menu fixed='top' size='massive' >
                    <Menu.Item as={NavLink} exact to='/'>
                        <Image />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        {this.props.isLoggedIn ? this.renderLoggedInItems() : this.renderNotLoggedInItems()}
                    </Menu.Menu>
                </Menu>
            </div>
        )        
    }

    renderLoggedInItems() {
        return (
            <Menu.Item as={Button} onClick={this.props.logout}>
                Logout
            </Menu.Item>
        )
    }

    renderNotLoggedInItems() {
        return (
            <Menu.Item as={NavLink} to='/login'>
                Login
            </Menu.Item>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(sessionActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
