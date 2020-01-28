import React, { Component } from 'react'
import adminActions from '../admin.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requestStates from '../../../utils/requestStates';

class Profile extends Component {
    componentDidMount() {
        this.props.getProfile();
        this.props.getStudents();
        this.props.getTeachers();
        this.props.getLessons();
        this.props.getPayments();
    }

    render() {
        console.log('render')
        const { profile, students, teachers, lessons, payments } = this.props;
        const { getProfileStatus, getStudentsStatus, getTeachersStatus, getLessonsStatus, getPaymentsStatus } = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top'}}>
                {getProfileStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Profile</h3>
                    <p>{'Email  : ' + profile.email}</p>
                    <p>{'Name   : ' + profile.name}</p>
                    <p>{'Surname: ' + profile.surname}</p>
                </div>}
                {getStudentsStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Students</h3>
                    <ul>
                        <h5>Name, Surname</h5>
                        {students.map((student) => (
                        <li>{student.name + ', ' + student.surname}</li>
                    ))}</ul>
                </div>}
                {getTeachersStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Teachers</h3>
                    <ul>
                        <li>Name, Surname</li>
                        {teachers.map((teacher) => (
                        <li>{teacher.name + ', ' + teacher.surname}</li>
                    ))}</ul>
                </div>}
                {getLessonsStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Lessons</h3>
                    <ul>
                        <h5>Name, Surname</h5>
                        {lessons.map((lesson) => (
                        <li>{lesson.name + ', ' + lesson.surname}</li>
                    ))}</ul>
                </div>}
                {getPaymentsStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Payments</h3>
                    <ul>
                        <h5>Name, Surname</h5>
                        {payments.map((payment) => (
                        <li>{payment.name + ', ' + payment.surname}</li>
                    ))}</ul>
                </div>}
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.admin.responseProfile,
    students: state.admin.responseStudents,
    teachers: state.admin.responseTeachers,
    lessons: state.admin.responseLessons,
    payments: state.admin.responsePayments,
    getProfileStatus: state.admin.getProfileStatus,
    getStudentsStatus: state.admin.getStudentsStatus,
    getTeachersStatus: state.admin.getTeachersStatus,
    getLessonsStatus: state.admin.getLessonsStatus,
    getPaymentsStatus: state.admin.getPaymentsStatus,
})

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(adminActions.getProfile()),
    getStudents: () => dispatch(adminActions.getStudents()),
    getTeachers: () => dispatch(adminActions.getTeachers()),
    getLessons: () => dispatch(adminActions.getLessons()),
    getPayments: () => dispatch(adminActions.getPayments()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
