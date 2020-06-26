import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {ERROR, LOADING, NONE, SUCCESS} from "../../../utils/requestStates";
import Calendar from "../../common/Calendar/Calendar";
import LessonModal from "./Modals/LessonModal";
import adminActions from "../admin.actions";
import { Header } from 'semantic-ui-react';

class AdminCalendar extends Component {
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
                    <div className='card'>
                        <LessonModal 
                            data={this.state.currentLesson} 
                            isOpen={this.state.showModal}
                            onClose={() => { this.setState({showModal: false})}}
                            onSubmit={() => {editLesson(this.state.currentLesson)}}
                        />
                        
                        <div className='head'>
                            <Header>Calendar</Header>
                        </div>
                        <div className='body'>
                            <Calendar 
                                calendarEvents={responseCalendar} 
                                handleEventClick={(info) => this.setState({
                                    currentLesson: responseLessons.find(x => x.id === info.event._def.extendedProps.lessonId),
                                    showModal: true
                                })}
                            />
                        </div>
                        <div className='footer'>

                        </div>
                    </div>
                )
            default:
                return <h1>default</h1>
        }
    }
}

const mapStateToProps = state => ({
    currentStartDate: state.admin.main.currentStartDate,
    currentEndDate: state.admin.main.currentEndDate,
    responseCalendar: state.admin.main.responseCalendar,
    getCalendarStatus: state.admin.main.getCalendarStatus,
    responseLessons: state.admin.main.lessons,
})

const mapDispatchToProps = (dispatch) => ({
    editLesson: (lesson) => dispatch(adminActions.editLesson(lesson)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminCalendar))