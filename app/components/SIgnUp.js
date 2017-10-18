import React from "react";

import helpers from "../utils/helpers";

class SignUp extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          errors: { },
          newEmployee: {
              firstName: "",
              lastName:  "",
              userName:  "",
              title:  "",
              password:  ""
          },
      }
    }

    //create a drop-down for employee type
    // static defaultProps = {
    //     titles: [
    //         "Sales Associate",
    //         "Sales Lead",
    //         "Manager",
    //         "Co-Manager"
    //     ]
    // }
                  // <div>
                  //     <label>Title</label>
                  //     <br />
                  //     <select ref="title">
                  //         titleOptions{}
                  //     </select>
                  // </div>

    //
    // //function for submitting the form
    // handleSubmit(event){
    //   event.preventDefault();
    //   console.log("Submitted");
    //   this.setState({newEmployee: {
    //       firstName: this.refs.firstName.value,
    //       lastName: this.refs.lastName.value,
    //       employeeNumber: this.refs.employeeNumber.value,
    //       title: this.refs.title.value,
    //       phoneNumber: this.refs.phoneNumber.value,
    //       password: this.refs.password.value
    //   }}, function(){
    //       console.log(this.state);
    //
    //       //pass the date as a property to the main component here
    //       helpers.addEmployee(this.state.newEmployee)
    //       .then(function()
    //         {
    //             console.log("Posted new employee to mongo db!")
    //
    //         });
    //   });
    // }

    // Here we render the component
    render() {
      return (
          <div className = "container">
  
               <div>
                  <h3>Sign Up!</h3>
                  <form className="inputForms" action="/signup" method="POST">
                      <div>
                          <label>First Name</label>
                          <br />
                          <input type="text" ref="firstName" name="firstName" />
                      </div>
                      <div>
                          <label>Last Name</label>
                          <br />
                          <input type="text" ref="lastName" name="lastName" />
                      </div>
                      <div>
                          <label>Employee Number</label>
                          <br />
                          <input type="number" ref="employeeNumber" name="employeeNumber" />
                      </div>
                      <div>
                          <label>Title</label>
                          <br />
                          <input type="text" ref="title" name="title" />
                              
                      </div>
                      <div>
                          <label>Phone Number</label>
                          <br />
                          <input type="number" ref="phoneNumber" name="phoneNumber" />
                      </div>
                      <div>
                          <label>Password</label>
                          <br />
                          <input type="text" ref="password" name="password" />
                      </div>
                      <div>
                          <label>Re-enter Password</label>
                          <br />
                          <input type="text" ref="password" />
                      </div>
                      <input className="submitButton" type="submit" value="Sign Up!" />
                  </form> 
              </div>
          </div>
        )
    }

};

// Export the component back for use in other files
export default SignUp;
