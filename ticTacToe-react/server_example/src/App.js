import React, {Component} from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch, 
	Redirect,
} from "react-router-dom";
import MainPage from "./pages/index";
import PageNotFound from "./pages/404";
import Users from "./pages/users";

class App extends Component{
	//Note that we have the redirect, which if no exact paths are found we go to this one
	render(){
		return <Router>
				<Switch>
					<Route exact path="/" component={MainPage} />	
					<Route exact path="/404" component={PageNotFound} />	
					<Route exact path="/users" component={Users} />	
					<Redirect to="/" />
				</Switch>
			</Router>
	}
}

export default App;
