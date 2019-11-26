import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const jsFrameworks = ["React","Node","Angular","Vue","Stencil"];

class Barbutton extends React.Component{
	render(){
		return(
			<button class="Barbutton">
				{this.props.value}
			</button>
		)
	}
}

class Bar extends React.Component{
	render(){
		return(
			<div class="bar">
				<div class="barbuttonWrapper">
					<Barbutton value={jsFrameworks[0]}/>
					<Barbutton value={jsFrameworks[1]}/>
					<Barbutton value={jsFrameworks[2]}/>
					<Barbutton value={jsFrameworks[3]}/>
					<Barbutton value={jsFrameworks[4]}/>
				</div>
			</div>
		)
	}
}

class Paragraph extends React.Component{
	render(){
		return(
			<div class="paragraphText">
				{this.text}
			</div>
		)
	}
}

class Image extends React.Component{
	render(){
		return(
			<div class="mainPageImage">
				<img src={this.source} alt={this.description} />
			</div>
		)
}

class MainPageContent extends React.Component{
	render(){
		return(
			<div class="PageContent">
				<Paragraph text=paragraph_one />			
				<Paragraph text=paragraph_two />			
			</div>
		)
	}
}

class Reactpage extends React.Component{
	render(){
		return(
			<div>
				<Bar />
				<MainPageContent />
				<Bar />
			</div>
		)
	}
}

ReactDOM.render(
	<Reactpage />,  
	document.getElementById('root')
);
