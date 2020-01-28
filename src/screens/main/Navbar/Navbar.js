import React, { Component } from 'react'
import { Menu, Image, Button, Visibility, Sticky, Dropdown } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import sessionActions from '../../session/session.actions'
import { connect } from 'react-redux'
import roles from '../../../utils/roles'

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
        const role = localStorage.getItem('role');
        if (role === roles.ADMIN) return ([
            <Menu.Item as={NavLink} to='/calendar' key='navlink-profile'>
                Calendario
            </Menu.Item>,
            <Dropdown item text='Admnistracion'>
                <Menu.Menu>
                    <Menu.Item as={NavLink} to='/students' key='navlink-students'>Alumnos</Menu.Item>
                    <Menu.Item as={NavLink} to='/teachers' key='navlink-teachers'>Profesores</Menu.Item>
                    <Menu.Item as={NavLink} to='/lessons' key='navlink-lessons'>Clases</Menu.Item>
                    <Menu.Item as={NavLink} to='/payments' key='navlink-payments'>Pagos</Menu.Item>
                </Menu.Menu>
            </Dropdown>,
            <Dropdown item text='Mi cuenta' icon='user'>
                <Menu.Menu>
                    <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>Mi perfil</Menu.Item>,
                    <Menu.Item icon='sign-out' className='nav navlink' as={Button} onClick={this.props.logout} key='navlink-logout'>Cerrar sesión</Menu.Item>
                </Menu.Menu>
            </Dropdown>,
        ]) 
        else if (role === roles.TEACHER) return ([
            
            <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>
                Profile
            </Menu.Item>,
            <Menu.Item as={Button} onClick={this.props.logout} key='navlink-logout'>
                Logout
            </Menu.Item>,
        ])
        else if (role === roles.TEACHER) return ([
            
            <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>
                Profile
            </Menu.Item>,
            <Menu.Item as={Button} onClick={this.props.logout} key='navlink-logout'>
                Logout
            </Menu.Item>,
        ])
        else if (role === roles.TEACHER) return ([
            <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>
                Profile
            </Menu.Item>,
            <Menu.Item as={Button} onClick={this.props.logout} key='navlink-logout'>
                Logout
            </Menu.Item>,
        ])
        else return (
            <Menu.Header color='red'>
                Invalid role
            </Menu.Header>
        )
    }

    renderNotLoggedInItems() {
        return ([
            <Menu.Item icon='newspaper' as={NavLink} to='/news'>Noticias</Menu.Item>,
            <Menu.Item icon='address card' as={NavLink} to='/contact'>Contacto</Menu.Item>,
            <Dropdown item icon='bars' text=''>
                <Menu.Menu>
                    <Menu.Item icon='sign-in' as={NavLink} to='/login'>Ingresar al sistema</Menu.Item>
                </Menu.Menu>
            </Dropdown>,
        ])
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(sessionActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
