import React from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  IndexLink,
  Link
} from 'react-router';

//layouts

import Main from "./components/Main";


//pages
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Logout from './components/Logout';
import EmployeeList from './components/EmployeeList';
import Schedule from './components/Schedule';
import BulletinBoard from './components/BulletinBoard';

const Routes = () => (

    <Router history={browserHistory}>

        <Route exact path="/" match component={Main}>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/logout" component={Logout}/>
                <Route path= "/EmployeeList"  component={EmployeeList}/>
                <Route path= "/Schedule"  component={Schedule}/>
                <Route path= "/BulletinBoard"  component={BulletinBoard}/>

        </Route>


    </Router>

)


export default Routes;