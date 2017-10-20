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
// import Logout from './components/Logout';
import EmployeeList from './components/EmployeeList';
import Schedule from './components/Schedule';
import BulletinBoard from './components/BulletinBoard';

const Routes = () => (

    <Router history={browserHistory}>

        <Route exact path="/" match component={Main} history={browserHistory}>
                <Route path="/signup" component={SignUp} history={browserHistory}/>
                <Route path="/signin" component={SignIn} history={browserHistory}/>
                <Route path= "/EmployeeList"  component={EmployeeList} history={browserHistory}/>
                <Route path= "/Schedule"  component={Schedule} history={browserHistory}/>
                <Route path= "/BulletinBoard"  component={BulletinBoard} history={browserHistory}/>

        </Route>


    </Router>

);


export default Routes;