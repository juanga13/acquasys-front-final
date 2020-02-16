import React, { Component } from 'react'
import { Menu, Image, Button, Visibility, Sticky, Dropdown, Icon } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import sessionActions from '../../session/session.actions'
import { connect } from 'react-redux'
import roles from '../../../utils/roles'
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

    renderLoggedInItemsLeft() {
        const role = localStorage.getItem('role')
        if (role === roles.ADMIN || role === roles.STUDENT) return ([
            <Menu.Item as={NavLink} to='/dashboard' key='navlink-profile'>
                <Icon name='th large'/>
                Dashboard
            </Menu.Item>,
        ])
        else return null
    }

    renderLoggedInItemsRight() {
        const role = localStorage.getItem('role');
        if (role === roles.ADMIN) return ([
            <Menu.Item as={NavLink} to='/calendar' key='navlink-profile'><Icon name='calendar'/>Calendario</Menu.Item>,
            <Menu.Item className='admin-management-menu'>
                <Menu.Header>{I18n.t('main.navbar.admin.management')}</Menu.Header>
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
                    <Dropdown.Item icon='sign-out' className='nav navlink' as={Button} onClick={this.props.logout} key='navlink-logout'>Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        ]) 
        else if (role === roles.TEACHER) return ([
            
            <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>
                Perfil
            </Menu.Item>,
            <Menu.Item as={Button} onClick={this.props.logout} key='navlink-logout'>
                Salir
            </Menu.Item>,
        ])
        else if (role === roles.STUDENT) return ([
            <Menu.Item as={NavLink} to='/calendar' key='navlink-profile'><Icon name='calendar'/>Calendario</Menu.Item>,
            <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>
                Perfil
            </Menu.Item>,
            <Menu.Item as={NavLink} to='/lessons' key='navlink-lessons'><Icon name='tablet'/>Clases</Menu.Item>,
            <Menu.Item as={Button} onClick={this.props.logout} key='navlink-logout'>
                Salir
            </Menu.Item>,
        ])
        else if (role === roles.UNVERIFIED_STUDENT) return ([
            <Menu.Item as={NavLink} to='/profile' key='navlink-profile'>
                Perfil
            </Menu.Item>,
            <Menu.Item as={Button} onClick={this.props.logout} key='navlink-logout'>
                Salir
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
            <Menu.Item icon='newspaper' as={NavLink} to='/news'>Noticias </Menu.Item>,
            <Menu.Item icon='address card' as={NavLink} to='/contact'>Contacto </Menu.Item>,
            <Dropdown item icon='bars' text=''>
                <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to='/login'><Icon name='sign-in'/>Ingresar al sistema</Dropdown.Item>
                </Dropdown.Menu>
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
