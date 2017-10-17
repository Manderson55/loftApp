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
                        <label htmlFor="file">Load from file:</label>
                        <input type="file" />
                     </div>
                </div>
            </div>
        )

     }

};

// Export the component back for use in other files
export default Schedule;
