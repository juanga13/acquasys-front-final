import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const DataValuePair = props => (
    <Grid.Row>
        <Grid.Column width={6}><p style={{fontWeight: 'bold'}}>{props.name}</p></Grid.Column>
        <Grid.Column width={6}>{props.icon ? <Icon name={props.value}/> : props.value}</Grid.Column>
    </Grid.Row>
)

export default DataValuePair