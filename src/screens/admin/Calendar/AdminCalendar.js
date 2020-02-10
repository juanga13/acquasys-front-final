import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {ERROR, LOADING, NONE, SUCCESS} from "../../../utils/requestStates";
import Calendar from "../../common/calendar/Calendar";

class AdminCalendar extends Component {

    render() {
        const { responseCalendar, getCalendarStatus, responseLessons } = this.props;
        const [currentLesson, setCurrentLesson] = useState();
        const [showModal, setShowModal] = useState(false);

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
                        <div style={{margin: '10px', border: '1px solid gray'}}>
                            <h3>Calendar</h3>
                            <Calendar calendarEvents={responseCalendar} handleEventClick={(info) => {
                                 setCurrentLesson(responseLessons.find(x => x.id === info.event._def.extendedProps.lessonId));
                                 setShowModal(true);
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
    currentStartDate: state.admin.currentStartDate,
    currentEndDate: state.admin.currentEndDate,
    responseCalendar: state.admin.responseCalendar,
    getCalendarStatus: state.admin.getCalendarStatus,
    responseLessons: state.admin.responseLessons,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminCalendar))