import React from "react";
import ReactDOM from "react-dom";

import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  IndexLink,
  Link
} from 'react-router';

import Routes from "./../Routes";

//pages
import SignUp from './SignUp';
import SignIn from './SignIn';

import EmployeeList from './EmployeeList';
import Schedule from './Schedule';
import BulletinBoard from './BulletinBoard';


class Main extends React.Component {
 

	render(){
		return (
			<div className="container">

				<div className= "navigation">
					<ul className="header">
			          	   <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
			               <li><Link to="/signin" activeClassName="active">Sign In</Link></li>
			               <li><Link to="/signup" activeClassName="active">Sign Up</Link></li>
			               <li><a href="/logout">Logout</a></li>
			               <li><Link to="/employeelist" activeClassName="active">Employees</Link></li>
			               <li><Link to="/schedule" activeClassName="active">Schedule</Link></li>
			               <li><Link to="/bulletinboard" activeClassName="active">Bulletin Board</Link></li>
			        </ul>
			    </div>

			    <div className="jumbotron">
			    	<h1>LOFT App</h1>
				</div>

			    <div className="row center-text">
			    	<h1>Welcome to your LOFT App</h1>
			    	<hr />
			    	<h3>This application will allow you to view your weekly schedule and connect with your fellow associates by sending them notes in the bulletin board or by accessing their information in the Employees Section and sending them private requests. You need to sign up to be able to view the information contained on this app.</h3>
			    	<br />
				    <h3>Let's stay connected!</h3>
				</div>

				<hr/> 


				<div className="content">

					{this.props.children}


				</div>

				<div className="bottom">
					<div className="row">
                  		<div className="panel-heading copyright">Copyright MZA 2017</div>
 		
                	</div>  
				</div>

			</div>

		)
	}


};
export default Main;