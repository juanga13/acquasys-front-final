import React, { Component } from 'react'
import { Menu, Image, Button, Visibility, Sticky } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import sessionActions from '../../session/session.actions'
import { connect } from 'react-redux'

class Navbar extends Component {
    render() {
        return (
            <div className=''>
                <Sticky>
                    <Menu borderless size='massive'>
                        <Menu.Item as={NavLink} exact to='/' key='navlink-home'>
                            <Image />
                        </Menu.Item>
                        <Menu.Menu position='right' key='navlink-group'>
                            {this.props.isLoggedIn ? this.renderLoggedInItems() : this.renderNotLoggedInItems()}
                        </Menu.Menu>
                    </Menu>
                </Sticky>
            </div>
        )        
    }

    renderLoggedInItems() {
        return ([
            <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>
                Profile
            </Menu.Item>,
            <Menu.Item as={Button} onClick={this.props.logout} key='navlink-logout'>
                Logout
            </Menu.Item>,
        ])
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
