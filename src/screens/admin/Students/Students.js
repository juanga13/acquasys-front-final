import React, { Component } from 'react'
import adminActions from '../admin.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requestStates from '../../../utils/requestStates';

class Students extends Component {
    componentDidMount() {
        this.props.getStudents();    
    }

    render() {
        const { students, getStudentsStatus } = this.props;
        return (
            <div>
                {getStudentsStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Students</h3>
                    <ul>
                        <h5>Name, Surname</h5>
                        {students.map((student) => (
                        <li>{student.name + ', ' + student.surname}</li>
                    ))}</ul>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    students: state.admin.responseStudents,
    getStudentsStatus: state.admin.getStudentsStatus,
})

const mapDispatchToProps = dispatch => ({
    getStudents: () => dispatch(adminActions.getStudents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Students))
