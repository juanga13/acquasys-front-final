import React, { Component } from 'react'
import { NONE, LOADING, ERROR, SUCCESS } from '../../../utils/requestStates';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Teachers extends Component {

    render() {
        const { teachers,  getTeachersStatus } = this.props;
        
        switch (getTeachersStatus) {
            case (NONE):
                return <h1>none</h1>
            case (LOADING):
                return <h1>loading</h1>
            case (ERROR):
                return <h1>error</h1>
            case (SUCCESS):
                return (
                    <div>
                        <div style={{margin: '10px', border: '1px solid gray'}}>
                            <h3>Teachers</h3>
                            <ul>
                                <li>Name, Surname</li>
                                {teachers.map((teacher) => (
                                <li>{teacher.name + ', ' + teacher.surname}</li>
                            ))}</ul>
                        </div>
                    </div>
                )
            default:
                return <h1>default</h1>
        }
    }
}

const mapStateToProps = state => ({
    teachers: state.admin.responseTeachers,
    getTeachersStatus: state.admin.getTeachersStatus,
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Teachers))
