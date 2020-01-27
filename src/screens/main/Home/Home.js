import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CardHeader, Card, CardContent } from 'semantic-ui-react'

class Home extends Component {
    render() {
        return (
            <div>
                {this.renderWelcomeText()}    
            </div>
        )
    }

    renderWelcomeText() {
        if (this.props.isLoggedIn) {
            return <h1>{'Welcome ' + this.props.user + '!'}</h1>
        } else return <h1>Welcome, you are not logged in yet.</h1>
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
    user: state.session.user,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
