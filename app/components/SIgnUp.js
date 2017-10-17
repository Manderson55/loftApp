import React from "react";
import ReactDOM from "react-dom";

class SignUp extends React.Component {

    constructor(){
      super();
      this.state = {newEmployee: {
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


    //function for submitting the form
    handleSubmit(event){
      event.preventDefault();
      console.log("Submitted");
      this.setState({newEmployee: {
          firstName: this.refs.firstName.value,
          lastName: this.refs.lastName.value,
          userName: this.refs.userName.value,
          title: this.refs.title.value,
          password: this.refs.password.value
      }}, function(){
          console.log(this.state);

          //pass the date as a property to the main component here
          this.props.addEmployee(this.state.newEmployee);
      });
    }

    // Here we render the component
    render() {
      return (
          <div className = "container">
  
               <div>
                  <h3>Sign Up!</h3>
                  <form className="inputForms" onSubmit = {this.handleSubmit.bind(this)}>
                      <div>
                          <label>First Name</label>
                          <br />
                          <input type="text" ref="firstName" />
                      </div>
                      <div>
                          <label>Last Name</label>
                          <br />
                          <input type="text" ref="lastName" />
                      </div>
                      <div>
                          <label>User Name</label>
                          <br />
                          <input type="text" ref="userName" />
                      </div>
                      <div>
                          <label>Title</label>
                          <br />
                          <input type="text" ref="title" />
                              
                      </div>
                      <div>
                          <label>Password</label>
                          <br />
                          <input type="text" ref="password" />
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
