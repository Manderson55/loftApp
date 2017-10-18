import React from "react";
import ReactDOM from "react-dom";

import helpers from "../utils/helpers";

// Create the Main component
class EmployeeList extends React.Component {

    constructor(){
      console.log("inside constructor");
        super();
        this.state = {
           errors: { },
           employeeList: [
              {
              employeeNumber:"",
              firstName: "",
              lastName:  "",
              phoneNumber: "",
              title:  "",
              password:  ""
              }
          ]
      }
    }

    //  On load display the employees from  the DB
    componentWillMount() {
         console.log("COMPONENT MOUNTED in EmployeeList.js");

    // The moment the page renders on page load, we will retrieve the existing employees.
        helpers.getEmployees()
        .then(function(response) {
              console.log("inside .then ");
              console.log("before setting var employeeList", response.data);
              var employeeList = response.data;
              console.log("after setting var employeeList", employeeList);
              this.setState.employeeList;

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
                            <tr>
                                <td>Mariela Anderson</td>
                                <td>Sales Associate</td>
                                <td>888-888-8888</td>                               
                            </tr>
                             <tr>
                                <td>Sarah Managern</td>
                                <td>Manager</td>
                                <td>555-555-5555</td>                               
                            </tr>
                              <tr>
                                <td>Joe Key</td>
                                <td>Key Holder</td>
                                <td>777-777-7777</td>                               
                            </tr>
                          </tbody>                           
                        </table>
                    </div>
                </div>

            </div>

        )
    }

}; 

export default EmployeeList;

                           // {list.map(function(employee, index){
                           //      return <li key={index}>{employee.firstName} {employee.lastName} <br />{employee.title}</li>;
                           //   })}
 

 
