// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main";
import Routes from "./Routes";

const app =  document.getElementById("app");

ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.

	<Routes />,
	app
  
);
