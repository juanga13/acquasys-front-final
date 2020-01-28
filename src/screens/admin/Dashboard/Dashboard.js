import React, { Component } from 'react'
import { Segment, Image } from 'semantic-ui-react'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Segment color='green'>
                    <Segment><Image></Image></Segment>
                    <Segment>Alumnos</Segment>
                </Segment>
                <Segment color='blue'>
                    <Segment><Image></Image></Segment>
                    <Segment>Profesores</Segment>
                </Segment>
                <Segment color='yellow'>
                    <Segment><Image></Image></Segment>
                    <Segment>Clases</Segment>
                </Segment>
                <Segment color='purple'>
                    <Segment><Image></Image></Segment>
                    <Segment>Pagos</Segment>
                </Segment>
            </div>
        )
    }
}

export default Dashboard
 