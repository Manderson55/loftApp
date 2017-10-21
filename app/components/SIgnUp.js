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

    // Here we render the component
    render() {
      return (
          <div className = "container">
  
               <div>
                  <h3>Sign Up!</h3>
                  <form className="inputForms" action="/signup" method="POST">
                     <div className="form-group row has-danger">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-8 input-group">
                            <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
                            <input type="text" name="firstName" ref="firstName" className="form-control" id="firstName" placeholder="Enter your First Name" required />
                        </div>
                      </div>

                     <div className="form-group row has-danger">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-8 input-group">
                            <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
                            <input type="text" name="lastName" ref="lastName" className="form-control" id="firstName" placeholder="Enter your Last Name" required />
                        </div>
                      </div>

                     <div className="form-group row has-danger">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-8 input-group">
                            <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
                            <select type="text" name="title" ref="title" className="form-control" id="title" required>
                                  <option value="">Enter your Title</option>
                                  <option value="salesAssociate">Sales Associate</option>
                                  <option value="salesLead">Sales Lead</option>
                                  <option value="manager">Manager</option>
                                  <option value="coManager">Co-Manager</option>
                            </select>
                        </div>
                      </div>

                    <div className="form-group row has-danger">
                        <label className="col-sm-2 col-form-label">Phone Number</label>
                        <div className="col-sm-8 input-group">
                            <span className="input-group-addon"><i className="fa fa-phone"></i></span>
                            <input type="number" name="phoneNumber" ref="phoneNumber" className="form-control" id="phoneNumber" required />                 
                        </div>
                      </div>

                     <div className="form-group row has-danger">
                        <label className="col-sm-2 col-form-label">Employee Number</label>
                        <div className="col-sm-8 input-group">
                            <span className="input-group-addon"><i className="fa fa-user-o"></i></span>
                            <input type="number" name="employeeNumber" ref="employeeNumber" className="form-control" id="employeeNumber" placeholder="Enter your Employee Number" required />
                        </div>
                      </div>

                      <div className="form-group row has-danger">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-8 input-group">
                          <span className="input-group-addon"><i className="fa fa-key"></i></span>
                          <input type="password" name="password" ref="password" className="form-control" id="password" placeholder="Password" required />
                        </div>
                      </div>

                     <div className="form-group row">
                          <div className="col-sm-12 input-group signUpButton">
                             <button type="submit" className="col-sm-8 col-sm-offset-2 submitButton btn btn-info">Sign Up</button>
                          </div>
                    </div>
                    </form> 

              </div>
          </div>
        )
    }

};

// Export the component back for use in other files
export default SignUp;