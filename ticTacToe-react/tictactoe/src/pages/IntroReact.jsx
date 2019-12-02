import React from 'react';
import Bar from "./Bar";
import airbnbLogo from './images/airbnb.jpg';
import cheggLogo from './images/chegg.png';
import dropboxLogo from './images/dropbox.jpg';
import lyftLogo from './images/lyft.png';
import pinterestLogo from './images/pinterest.jpg';

const paragraphs = ["React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. It lets you compose complex UIs from small and isolated pieces of code called “components.","React is used by several companies to develop both the user experience for their website, as well as build things like testing applications for their engineers to work with. Here are a few that have recognized that it is part of their Tech Stack:"];

class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">	
					<Paragraph value={paragraphs[0]} />
					<Paragraph value={paragraphs[1]} />
					<ImageBullet source={airbnbLogo} />
					<ImageBullet source={cheggLogo} />
					<ImageBullet source={dropboxLogo} />
					<ImageBullet source={lyftLogo} />
					<ImageBullet source={pinterestLogo} />
				</div>	
			</div>
		);
	}
}

class Paragraph extends React.Component{
	render(){
		return(
			<div class="paragraph">
				{this.props.value}
			</div>
		);
	}
}

class ImageBullet extends React.Component{
	render(){
		return(
			<div class="JSBullet">
				<img src={this.props.source} alt=""/>
			</div>
		);
	}
}

class IntroReact extends React.Component{
	render(){
		return(
			<div>
				<div class="UpperBar">
					<div class="Title">
						What is React JS?
					</div>
				</div>
				
				<Bar />
				<PageContent />
			</div>
		);
	}
}

export default IntroReact;
