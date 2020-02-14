import React, { Component } from 'react'
import { Segment, Image, Header, Divider } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import './Dashboard.scss'
import { students, teachers, lessons, payments } from '../../../assets/index'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header as='h1'>Dashboard</Header>
                <Divider/>
                <div className='item-container'>
                    <NavLink to='/students'>
                        <Segment color='green' raised>
                            <Image src={students} width='230px'/>
                            <Header as='h4'>Alumnos</Header>
                        </Segment>
                    </NavLink>
                    <NavLink to='/teachers'>
                        <Segment color='blue' raised>
                            <Image src={teachers} width='230px'/>
                            <Header as='h4'>Profesores</Header>
                        </Segment>
                    </NavLink>
                    <NavLink to='/lessons'>
                        <Segment color='yellow' raised>
                            <Image src={lessons} width='230px'/>
                            <Header as='h4'>Clases</Header>
                        </Segment>
                    </NavLink>
                    <NavLink to='/payments'>
                        <Segment color='purple' raised>
                            <Image src={payments} width='230px'/>
                            <Header as='h4'>Pagos</Header>
                        </Segment>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Dashboard
 