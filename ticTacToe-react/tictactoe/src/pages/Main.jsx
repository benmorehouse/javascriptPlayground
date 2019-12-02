import React from 'react';
//images
import angularLogo from './images/angular.jpg';
import reactLogo from './images/reactjs.png';
import vueLogo from './images/vuejs.png';
import nodeLogo from './images/nodejs.jpg';
import stencilLogo from './images/stencil.png';
//images

//Bar used for all pages
import Bar from "./Bar";
//Bar used for all pages

const paragraph_array = ["We are specifically going to delve into the following five frameworks:", " \tWelcome to my final presentation for ITP 104 - Intro to Web Publishing at the University of Southern California. In the class, we were able to learn the fundamentals of web development from the ground up. Initially starting with displaying simple text using HTML (Hypertext Markup Language), we soon were implementing Web Development frameworks like Bootstrap and Lightbox. \n \t A possible next step to Web Development is learning the many frameworks that are used in the field. For many of you, you have probably heard of these names at some point:" ];

class Paragraph extends React.Component{
	render(){
		return(
			<div class="paragraph">
				{this.props.value}
			</div>
		);
	}
}

class JSBullet extends React.Component{
	render(){
		return(
			<div class="JSBullet">
				<img src={this.props.source} alt=""/>
			</div>
		);
	}
}

class PageContent extends React.Component{
	render(){
		return(
			<div>
				<Paragraph value={paragraph_array[1]}/>
				<Paragraph value={paragraph_array[0]}/>
				<div class="contentBody">	
					<JSBullet name="React" source={reactLogo} />
					<JSBullet name="Vue" source={vueLogo}/>
					<JSBullet name="Stencil" source={stencilLogo} />
					<JSBullet name="Angular" source={angularLogo} />
					<JSBullet name="Node" source={nodeLogo}/>
				</div>	
			</div>
		);
	}
}

class MainPage extends React.Component{
	render(){
		return(
			<div>
				<div class="UpperBar">
					<div class="Title">
						Welcome to React!
					</div>
				</div>
				
				<Bar />
				<PageContent />
			</div>
		);
	}
}

export default MainPage;
