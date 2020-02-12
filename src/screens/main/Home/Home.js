import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CardHeader, Card, CardContent } from 'semantic-ui-react'

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Home page, news and shit</h2>
                {this.renderWelcomeText()}    
            </div>
        )
    }

    renderWelcomeText() {
        if (this.props.isLoggedIn) {
            return <p>{'Welcome ' + this.props.user.name + '!'}</p>
        } else return <p>Welcome, you are not logged in yet.</p>
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
    user: state.session.user,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
