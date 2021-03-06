import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {ERROR, LOADING, NONE, SUCCESS} from "../../../utils/requestStates";
import Calendar from "../../common/Calendar/Calendar";
import LessonModal from "../Lessons/Modals/LessonModal";

class StudentCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLesson: {id: 0, name: "error"},
            showModal: false
        }
    }
    render() {
        const { responseCalendar, getCalendarStatus, responseLessons, editLesson} = this.props;
        switch (getCalendarStatus) {
            case (NONE):
                return <h1>none</h1>
            case (LOADING):
                return <h1>loading</h1>
            case (ERROR):
                return <h1>error</h1>
            case (SUCCESS):
                return (
                    <div>
                      {/*  <LessonModal data={this.state.currentLesson} isOpen={this.state.showModal}
                                     onClose={() => { this.setState({showModal: false})}}
                                     onSubmit={() => {editLesson(this.state.currentLesson)}}
                                     />*/}
                        <div style={{margin: '10px', border: '1px solid gray'}}>
                            <h3>Calendar</h3>
                            <Calendar calendarEvents={responseCalendar} handleEventClick={(info) => {
                                 this.setState({
                                     currentLesson: responseLessons.find(x => x.id === info.event._def.extendedProps.lessonId),
                                     showModal: true
                                 });
                            } }/>
                        </div>
                    </div>
                )
            default:
                return <h1>default</h1>
        }
    }
}

const mapStateToProps = state => ({
    currentStartDate: state.student.currentStartDate,
    currentEndDate: state.student.currentEndDate,
    responseCalendar: state.student.responseCalendar,
    getCalendarStatus: state.student.getCalendarStatus,
    responseLessons: state.student.lessons,
})

const mapDispatchToProps = (dispatch) => ({
    //editLesson: (lesson) => dispatch(unverifiedActions.editLesson(lesson)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentCalendar))