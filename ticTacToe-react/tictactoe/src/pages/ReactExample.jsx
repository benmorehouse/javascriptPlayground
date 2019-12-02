import React from 'react';
import Bar from "./components/Bar";
import BottomBar from "./components/BottomBar";
import Paragraph from "./components/Paragraph";
import JSBullet from "./components/JSBullet";
import Game from "./components/ticTacToe";
//images
import npmExample from './images/npmExample.png';
import createReactApp from './images/createReactApp.png';
import Tic1 from './images/t3-1.png';
import Tic2 from './images/t3-2.png';
import Tic3 from './images/t3-3.png';
import Tic4 from './images/t3-4.png';
//images
const paragraphs = ["How about a game of Tic Tac Toe!","Not possible using HTML and CSS alone.","We need language tools like Conditional statements, Arrays, & Loops!","Thus a perfect time to implement some javascript. We will use React JS, which allows us the language capabilities of Javascript, but also the real-time interactability with the DOM.","To get started on working with something like React, you will need a text editor, as well as a decent knowledge of the Command Line! You will then need to install Node JS, and also ensure that you are able to run NPM on your computer.","Then after using NPM to create a React App, you will have access to many powerful CLI Tools that can help you manage this Website/Web Application that you have created. This is what the folder layout will look like:","Let's look at the code... it will be hard to follow at first!"];

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
					<JSBullet source={npmExample} />
					<Paragraph value={paragraphs[5]} />
					<JSBullet source={createReactApp} />
					<Paragraph value="" />
					<Paragraph value={paragraphs[6]} />
					<Paragraph value="" />
					<JSBullet source={Tic1} />
					<Paragraph value="" />
					<JSBullet source={Tic4} />
					<Paragraph value="" />
					<JSBullet source={Tic2} />
					<Paragraph value="" />
					<JSBullet source={Tic3} />
					<Paragraph value="" />
				</div>	
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
				<BottomBar />
			</div>
		);
	}
}

export default IntroReact;
