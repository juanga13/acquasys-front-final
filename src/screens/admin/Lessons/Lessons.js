import React, { Component } from 'react'
import requestStates from '../../../utils/requestStates';

export class Lessons extends Component {
    componentDidMount() {
        this.props.getLessons();
    }

    render() {
        const { lessons, getLessonsStatus } = this.props;
        return (
            <div>
                {getLessonsStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Lessons</h3>
                    <ul>
                        <h5>Name, Surname</h5>
                        {lessons.map((lesson) => (
                        <li>{lesson.name + ', ' + lesson.surname}</li>
                    ))}</ul>
                </div>}
            </div>
        )
    }
}

export default Lessons
