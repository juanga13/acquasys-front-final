import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "./Calendar.scss";

// must manually import the stylesheets for each plugin
// import "./node_modules/@fullcalendar/core/main.css";
// import "./node_modules/@fullcalendar/daygrid/main.css";
// import "./node_modules/@fullcalendar/timegrid/main.css";

export default class Calendar extends React.Component {
    calendarComponentRef = React.createRef();

    render() {
        return (
            <div className="calendar-app">
                <div className="calendar-app-calendar">
                    <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        ref={this.calendarComponentRef}
                        weekends={true}
                        events={this.props.calendarEvents}
                        eventClick={this.props.handleEventClick}
                    />
                </div>
            </div>
        );
    }

}
