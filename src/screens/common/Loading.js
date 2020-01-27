import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'

export class Loading extends Component {
    render() {
        return (
            <div>
                <Loader/>
                <p>Refreshing token...</p>
            </div>
        )
    }
}

export default Loading
