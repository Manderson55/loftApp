import React from "react";
import ReactDOM from "react-dom";

class SignIn extends React.Component {

    //function for submitting the form
    handleSubmit(event){
      event.preventDefault();
      console.log("Submitted");
      this.setState({employee: {
          employeeNumber: this.refs.employeeNumber.value,
          password: this.refs.password.value
      }}, function(){
          console.log(this.state);

          //pass the date as a property to the main component here
          this.props.findEmployee(this.state.employee);
      });
    }

    // Here we render the component
    render() {

      return (

          <div className = "container">

              <div className="signinForm">
                  <h3>Sign In!</h3>
                  <form className= "inputForms" onSubmit = {this.handleSubmit.bind(this)}>
     
                      <div>
                          <label>Employee Number</label>
                          <br />
                          <input type="text" ref="userName" />
                      </div>

                      <div>
                            <label>Password</label>
                            <br />
                            <input type="text" ref="password" />
                        </div>

                        <input className="submitButton" type="submit" value="Sign In!"/>
                    </form> 
               </div>
          </div>
          )
      }
};

// Export the component back for use in other files
export default SignIn;
