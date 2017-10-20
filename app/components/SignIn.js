import React from "react";

class SignIn extends React.Component {

    // Here we render the component
    render() {

      return (

          <div className = "container">

              <div className="signinForm">
                  <h3>Sign In!</h3>
                  <form className= "inputForms" action="/signin" method="POST">

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
                          <div className="col-sm-12 input-group signInButton">
                             <button type="submit" className="col-sm-8 col-sm-offset-2 submitButton btn btn-warning">Sign In</button>
                          </div>
                    </div>
                    </form> 
               </div>
          </div>
          )
      }
};

// Export the component back for use in other files
export default SignIn;