import React, { Component } from 'react'
import adminActions from '../admin.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requestStates from '../../../utils/requestStates';

class Profile extends Component {
    componentDidMount() {
        this.props.getProfile();
        
    }

    render() {
        const { profile } = this.props;
        const { getProfileStatus } = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top'}}>
                {getProfileStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Profile</h3>
                    <p>{'Email  : ' + profile.email}</p>
                    <p>{'Name   : ' + profile.name}</p>
                    <p>{'Surname: ' + profile.surname}</p>
                </div>}
                
                
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.admin.responseProfile,
    getProfileStatus: state.admin.getProfileStatus,
})

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(adminActions.getProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
