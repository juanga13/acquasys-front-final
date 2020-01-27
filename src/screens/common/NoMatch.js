import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon, Button } from 'semantic-ui-react'

export class NoMatch extends Component {
    render() {
        return (
            <Header as='h2' icon>
                <Icon name='settings'/>
                Sorry, this page does not exists or is unavailable
                <Header.Subheader>
                    Go back to home: <Button basic as={Link} exact to='/'>Redirect me</Button>
                </Header.Subheader>
            </Header>
        )
    }
}

export default NoMatch
