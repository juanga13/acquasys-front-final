import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class Attendances extends Component {
    render() {
        return (
            <div className='card'>
                <div className='head'>
                    <Header>Attendances</Header>
                </div>
                <div className='body'>

                </div>
                <div className='footer'>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Attendances))
