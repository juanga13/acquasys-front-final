import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <p>Sweet HOME aaaalabama</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
    user: state.session.user,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
