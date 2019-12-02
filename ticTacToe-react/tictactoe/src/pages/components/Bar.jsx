import React from 'react';
import Barbutton from './BarButton';

const jsFrameworks = ["Main","About React","Example: Tic Tac Toe","Example: Website","More"]; // these are the descriptions of the links
const pageLinks = ["/Main","/IntroReact","/ReactExample","/This","/More"];// these are the links to the different pages we want.

class Bar extends React.Component{
	render(){
		return(
			<div class="bar">
				<div class="barbuttonWrapper">
					<Barbutton description={jsFrameworks[0]} url={pageLinks[0]}/>
					<Barbutton description={jsFrameworks[1]} url={pageLinks[1]}/>
					<Barbutton description={jsFrameworks[2]} url={pageLinks[2]}/>
					<Barbutton description={jsFrameworks[3]} url={pageLinks[3]}/>
					<Barbutton description={jsFrameworks[4]} url={pageLinks[4]}/>
				</div>
			</div>
		);
	}
}

export default Bar;
