import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { I18n } from 'react-redux-i18n'

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
            return <p>{I18n.t('main.home.welcomeLogged')}</p>
        } else return <p>{I18n.t('main.home.welcomeNotLogged')}</p>
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
