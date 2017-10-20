import React from "react";
import ReactDOM from "react-dom";

const axios = require("axios");

class Schedule extends React.Component {




  // Here we render the component
    render() {
        axios.get("/isAuthenticated")
           .then(function (response) {
                 console.log(response);
           })
           .catch((error) => {
                 console.log(error);
                 this.props.route.history.push("/signin");
           });

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
