import React, { Component } from 'react'
import adminActions from '../admin.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class Profile extends Component {
    componentDidMount() {
        this.props.getProfile();
        this.props.getStudents();
        this.props.getTeachers();
        this.props.getLessons();
        this.props.getPayments();
    }

    render() {
        console.log('RENDERING PROFILE')
        return (
            <div>
                <p>my profile</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(adminActions.getProfile()),
    getStudents: () => dispatch(adminActions.getStudents()),
    getTeachers: () => dispatch(adminActions.getTeachers()),
    getLessons: () => dispatch(adminActions.getLessons()),
    getPayments: () => dispatch(adminActions.getPayments()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
