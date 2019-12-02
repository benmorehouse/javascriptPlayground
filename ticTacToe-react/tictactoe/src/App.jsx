import React, {Component} from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch, 
	Redirect,
} from "react-router-dom";
import MainPage from "./pages/Main";
import IntroReact from "./pages/IntroReact";
import ReactExample from "./pages/ReactExample";
import ThisWebsite from "./pages/This";
import More from "./pages/More";

class App extends Component{
	//Note that we have the redirect, which if no exact paths are found we go to this one
	render(){
		return <Router>
				<Switch>
					<Route exact path="/" component={MainPage} />	
					<Route exact path="/IntroReact" component={IntroReact} />	
					<Route exact path="/ReactExample" component={ReactExample} />	
					<Route exact path="/This" component={ThisWebsite} />	
					<Route exact path="/More" component={More} />	
					<Redirect to="/" />
				</Switch>
			</Router>
	}
}

export default App;
