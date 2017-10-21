import React from "react";
import ReactDOM from "react-dom";

import helpers from "../utils/helpers";

const axios = require("axios");

import { Redirect } from 'react-router';


// Create the Main component
class EmployeeList extends React.Component {

    constructor(){
      console.log("inside constructor");
        super();
        this.state = {
           errors: { },
           employeeList: []
      }
    }

    //  On load display the employees from  the DB
    componentWillMount() {
         console.log("COMPONENT MOUNTED in EmployeeList.js");

         // Make a request for a user with a given ID 
          axios.get("/isAuthenticated")
           .then(function (response) {
                 console.log(response);
           })
           .catch((error) => {
                 console.log(error);
                 this.props.route.history.push("/signin");
           });

    // The moment the page renders on page load, we will retrieve the existing employees.
        helpers.getEmployees()
        .then(function(response) {
              console.log("inside .then ");
              console.log("before setting var employeeList", response.data);
              var employeeList = response.data;
              console.log("after setting var employeeList", employeeList);
              this.setState({employeeList:employeeList});

        }.bind(this));
        console.log("After Bind ", this.state.employeeList);
    }

// it is rendering before calling helpers.....!!!!!!!!

    render(){

        console.log("inside render");
        console.log(this.props.employeeList);
        var list = this.props.employeeList;
        console.log(Array.isArray(list));
        console.log(list);
        return (
            <div className = "container">

                <div className="panel">
                    <div className="panel-heading ">Employees</div>
                    <div className="panel-body employeeInfo">
                        <table>
                          <thead>
                            <tr>
                                <th>Associate Name</th>
                                <th>Title</th>
                                <th>Phone Number</th>                                
                            </tr>
                          </thead>
                          <tbody>
                          {this.state.employeeList.map((employee) => {
                            if (employee.firstName || employee.lastName || employee.title || employee.phoneNumber) {
                              return (
                                <tr>
                                    <td>{employee.firstName} {employee.lastName}</td>
                                    <td>{employee.title}</td>
                                    <td>{employee.phoneNumber}</td>                               
                                </tr>
                              );
                            }
                          })}
                          </tbody>                           
                        </table>
                    </div>
                </div>

            </div>

        )
    }

}; 

export default EmployeeList;