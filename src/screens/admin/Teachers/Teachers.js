import React, { Component } from 'react'
import requestStates from '../../../utils/requestStates';

export class Teachers extends Component {
    componentDidMount() {
        this.props.getTeachers();
    }

    render() {
        const { teachers,  getTeachersStatus } = this.props;
        return (
            <div>
                {getTeachersStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Teachers</h3>
                    <ul>
                        <li>Name, Surname</li>
                        {teachers.map((teacher) => (
                        <li>{teacher.name + ', ' + teacher.surname}</li>
                    ))}</ul>
                </div>}
            </div>
        )
    }
}

export default Teachers
