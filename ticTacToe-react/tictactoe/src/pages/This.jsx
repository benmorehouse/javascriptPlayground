import React from 'react';
import Bar from "./components/Bar";
import BottomBar from "./components/BottomBar";
import Paragraph from "./components/Paragraph";

const paragraphs = ["This project was also built in ReactJS! I used the web development framework as well as a React Router API to facilitate the Javascript Routing.","You can look at all of this below."];

class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">	
					<Paragraph value={paragraphs[0]} />
					<Paragraph value={paragraphs[1]} />
					<a href="https://www.github.com/benmorehouse/">Github Repo</a>
					<Paragraph value="" />
					<Paragraph value="" />
					<paragraph value="" />
					<paragraph value="" />
					<Paragraph value="" />
					<Paragraph value="" />
					<Paragraph value="" />
					<Paragraph value="" />
					<Paragraph value="" />
					<Paragraph value="" />
					<Paragraph value="" />
					<Paragraph value="" />

				</div>	
			</div>
		);
	}
}


class ThisWebsite extends React.Component{
	render(){
		return(
			<div>
				<div class="UpperBar">
					<div class="Title">
						React built this!	
					</div>
				</div>
				
				<Bar />
				<PageContent />
				<BottomBar />
			</div>
		);
	}
}

export default ThisWebsite;
