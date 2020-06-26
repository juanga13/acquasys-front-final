import React, { Component } from 'react'
import { Menu, Image, Button, Sticky, Dropdown, Icon } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import sessionActions from '../../session/session.actions'
import { connect } from 'react-redux'
import { ADMIN, TEACHER, STUDENT, UNVERIFIED_STUDENT } from '../../../utils/roles'
import { brandLogo } from '../../../assets'
import { I18n } from 'react-redux-i18n'
import './Navbar.scss'

class Navbar extends Component {
    render() {
        return (
            <div className=''>
                <Sticky>
                    <Menu borderless style={{borderRadius: 0}}>
                        <Menu.Item as={NavLink} exact to='/' key='navlink-home'>
                            <Image src={brandLogo} height='50px'/>
                        </Menu.Item>
                        <Menu.Menu key='navlink-left-group'>
                            {this.props.isLoggedIn ? this.renderLoggedInItemsLeft() : null}
                        </Menu.Menu>
                        <Menu.Menu position='right' key='navlink-right-group'>
                            {this.props.isLoggedIn ? this.renderLoggedInItemsRight() : this.renderNotLoggedInItems()}
                        </Menu.Menu>
                    </Menu>
                </Sticky>
            </div>
        )        
    }

    renderNotLoggedInItems() {
        return ([
            <Menu.Item as={NavLink} to='/news' key='navbar-item-news'>Noticias</Menu.Item>,
            <Menu.Item as={NavLink} to='/contact' key='navbar-item-contact'>Contacto</Menu.Item>,
            <Menu.Item as={NavLink} to='/login' key='navbar-item-login'>Ingresar</Menu.Item>,
            <Menu.Item as={NavLink} to='/register' key='navbar-item-login'>Registrarse</Menu.Item>,
        ])
    }

    renderLoggedInItemsLeft() {
        return ([
            <Menu.Item as={NavLink} to='/dashboard' key='navlink-profile'><Icon name='th large'/>Dashboard</Menu.Item>,
            // <Menu.Item as={NavLink} to='/news' key='navbar-item-news'>Noticias</Menu.Item>,
            // <Menu.Item as={NavLink} to='/contact' key='navbar-item-contact'>Contacto</Menu.Item>,
        ])
    }

    renderLoggedInItemsRight() {
        const role = localStorage.getItem('role');
        console.log('Hola, rendering logged in items right', role);
        switch(role) {
            case ADMIN:
                return ([
                    <Menu.Item as={NavLink} to='/calendar' key='navlink-profile'><Icon name='calendar'/>Calendario</Menu.Item>,
                    <Menu.Item className='management-menu'>
                        <Menu.Header>Administración</Menu.Header>
                        <Menu.Menu style={{display: 'flex', flexDirection: 'row'}}>
                            <Menu.Item as={NavLink} to='/students' key='navlink-students'><Icon name='child'/>Alumnos</Menu.Item>
                            <Menu.Item as={NavLink} to='/teachers' key='navlink-teachers'><Icon name='female'/>Profesores</Menu.Item>
                            <Menu.Item as={NavLink} to='/lessons' key='navlink-lessons'><Icon name='tablet'/>Clases</Menu.Item>
                            <Menu.Item as={NavLink} to='/payments' key='navlink-payments'><Icon name='wpforms'/>Pagos</Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>,
                    <Dropdown item text='Mi cuenta'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to='/profile' key='navlink-profile'>Mi perfil</Dropdown.Item>
                            <Dropdown.Item className='nav navlink' as={Button} onClick={this.props.logout} icon='sign-out' key='navlink-logout'>Cerrar sesión</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>,
                ]) 

            case TEACHER:
                return ([
                    <Menu.Item as={NavLink} to='/calendar' key='navlink-profile'><Icon name='calendar'/>Calendario</Menu.Item>,
                    <Menu.Item className='management-menu'>
                        <Menu.Header>Administración</Menu.Header>
                        <Menu.Menu style={{display: 'flex', flexDirection: 'row'}}>
                            <Menu.Item as={NavLink} to='/lessons' key='navlink-lessons'><Icon name='tablet'/>Clases</Menu.Item>
                            <Menu.Item as={NavLink} to='/attendances' key='navlink-attendances'><Icon name='wpforms'/>Asistencias</Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>,
                    <Dropdown item text='Mi cuenta'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to='/profile' key='navlink-profile'>Mi perfil</Dropdown.Item>
                            <Dropdown.Item className='nav navlink' as={Button} onClick={this.props.logout} icon='sign-out' key='navlink-logout'>Cerrar sesión</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>,
                ])

        case STUDENT:
            return ([
                <Menu.Item as={NavLink} to='/calendar' key='navlink-profile'><Icon name='calendar'/>Calendario</Menu.Item>,
                <Menu.Item className='management-menu'>
                    <Menu.Header>Administración</Menu.Header>
                    <Menu.Menu style={{display: 'flex', flexDirection: 'row'}}>
                        <Menu.Item as={NavLink} to='/lessons' key='navlink-lessons'><Icon name='tablet'/>Clases</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>,
                <Dropdown item text='Mi cuenta'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to='/profile' key='navlink-profile'>Mi perfil</Dropdown.Item>
                        <Dropdown.Item className='nav navlink' as={Button} onClick={this.props.logout} icon='sign-out' key='navlink-logout'>Cerrar sesión</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
            ])
            
        case UNVERIFIED_STUDENT:
            return ([
                <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>
                    Profile
                </Menu.Item>,
                <Menu.Item as={Button} onClick={this.props.logout} key='navlink-logout'>
                    Logout
                </Menu.Item>,
            ])
        

        default:
            return ([
                <Menu.Header color='red'>
                    Invalid role
                </Menu.Header>
            ])
        }
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(sessionActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
