import React from 'react';
import {
  Redirect,
} from "react-router-dom";

const jsFrameworks = ["Main","Introduction: React","Example: React"]; // these are the descriptions of the links
const pageLinks = ["/Main","/IntroReact","/ReactExample"];// these are the links to the different pages we want.

class Barbutton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			redirect: false,
		};
	}

	handleOnClick = () => {
		this.setState({redirect: true});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect push to={this.props.url} />;
		}
		return <button class="Barbutton" onClick={this.handleOnClick} type="button">{this.props.description} </button>;
	}
}

class Bar extends React.Component{
	render(){
		return(
			<div class="bar">
				<div class="barbuttonWrapper">
					<Barbutton description={jsFrameworks[0]} url={pageLinks[0]}/>
					<Barbutton description={jsFrameworks[1]} url={pageLinks[1]}/>
					<Barbutton description={jsFrameworks[2]} url={pageLinks[2]}/>
				</div>
			</div>
		);
	}
}

export default Bar;
