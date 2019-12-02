import React from 'react';
import Bar from "./Bar";
import Game from "./ticTacToe";
import npmExample from './images/npmExample.png';

const paragraphs = ["How about a game of Tic Tac Toe!","Not possible using HTML and CSS alone.","We need language tools like Conditional statements, Arrays, & Loops!","Thus a perfect time to implement some javascript. We will use React JS, which allows us the language capabilities of Javascript, but also the real-time interactability with the DOM.","To get started on working with something like React, you will need a text editor, as well as a decent knowledge of the Command Line! You will then need to install Node JS, and also ensure that you are able to run NPM on your computer."];

class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">	
					<Paragraph value={paragraphs[0]} />
					<Paragraph value="" />
					<Game />
					<Paragraph value="" />
					<Paragraph value={paragraphs[1]} />
					<Paragraph value={paragraphs[2]} />
					<Paragraph value={paragraphs[3]} />
					<Paragraph value={paragraphs[4]} />
					<ImageBullet source={npmExample} />
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
						An Example of React JS...
					</div>
				</div>
				<Bar />
				<PageContent />
			</div>
		);
	}
}

export default IntroReact;
