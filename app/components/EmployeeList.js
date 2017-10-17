import React from "react";
import ReactDOM from "react-dom";

import helpers from "../utils/helpers";

// Create the Main component
class EmployeeList extends React.Component {

    getState(){
        return (employeeList:[])
    }

    //  On load display the employees from  the DB
    componentDidMount() {
         console.log("COMPONENT MOUNTED in EmployeeList_Schedule.js");

    // The moment the page renders on page load, we will retrieve the existing employees.
        helpers.getEmployees()
        .then(function(response) {
              console.log("inside .then ");
              console.log(response);
         
              if (response !== this.state.employeeList) {
                  console.log("EmployeeList", response.data);
                  this.setState({employeeList: response.data});
              }
        }.bind(this));
    }


    render(){
        var list = this.props.employeeList;
        console.log(Array.isArray(list));
        console.log(list);
        return (
            <div className = "container">

                <div className="panel">
                    <div className="panel-heading ">Employees</div>
                    <div className="panel-body">
                        <ul>
                            <li>Mariela</li>
                            <li>Sarah</li>
                            <li>Juan</li>

                        </ul>
                    </div>
                </div>

            </div>

        )
    }

}; 

export default EmployeeList;

                           // {list.map(function(employee, index){
                           //      return <li key={index}>{employee.firstName} {employee.lastName} <br />{employee.title}</li>;
                           //  })}