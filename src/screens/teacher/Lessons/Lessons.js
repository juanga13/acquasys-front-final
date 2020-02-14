import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export class Lessons extends Component {
    render() {
        return (
            <div className='card'>
                <div className='head'>
                    <Header>Lessons</Header>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Lessons))