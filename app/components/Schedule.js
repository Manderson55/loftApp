import React from "react";
import ReactDOM from "react-dom";

class Schedule extends React.Component {

  // Here we render the component
    render() {

        return (
            <div className = "container">

                <div className="panel">
                    <div className="panel-heading ">Schedule</div>
                    <div className="panel-body pdf-container">

                        <img className="schedule" alt="schedule" src="/assets/images/schedule.jpg"/>

                    </div>
                </div>
            </div>
        )

     }

};

export default Schedule;
