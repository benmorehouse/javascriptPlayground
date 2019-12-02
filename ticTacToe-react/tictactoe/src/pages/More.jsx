import React from 'react';
//images
import angularLogo from './images/angular.jpg';
import vueLogo from './images/vuejs.png';
import nodeLogo from './images/nodejs.jpg';
import stencilLogo from './images/stencil.png';
//images

import Bar from "./components/Bar";
import BottomBar from "./components/BottomBar";
import Paragraph from "./components/Paragraph";
import JSBullet from "./components/JSBullet";
import BlackLine from "./components/BlackLine";

const paragraph_array = ["There are a few other tools, libraries and frameworks that are definitely worth noting.","VueJS is another very popular framework in the Web Development world. It comes with very similar capabilities and purposes that are fulfilled by ReactJS. One major thing separates the two... React is more of a library, whereas Vue is a framework! The difference: when you are using React, you are calling functions and variables from this library to use in your code. A framework on the other hand is more calling you to fill in code that it asks for. For instance, the React constructor that was made... WE made it. Not the case in Vue. Large scale projects: how do we change small things and test?","Stencil is a bit different from both of these. It acts more as a nice tool to use with something like Vue, React or Angular. For instance, it is able to mass produce components that you call it to create and then create those folders for you the correct way. This lowers the chance of bugs and other issues that can arise with having to manage all of these files. My interpretation of it is that it is your own way of making a library much like what you used with React!","Angular is very similar to ReactJS and VueJS. The major difffences are smaller to notice especially when still first learning about this new way to develop Web Apps in the industry.","Finally, Node JS is one of the most used Javascript Frameworks. It is used less for web development however, as it is known to constantly be changing and not providing backwards compatibility. It however does offer really great tools for building survers, and is praised for being able to do so."];


class PageContent extends React.Component{
	render(){
		return(
			<div>
				<Paragraph value={paragraph_array[0]}/>
				<div class="contentBody">	
					<Paragraph value="" />
					<BlackLine />
					<JSBullet name="Vue" source={vueLogo}/>
					<Paragraph value={paragraph_array[1]} />
					<BlackLine />
					<JSBullet name="Stencil" source={stencilLogo} />
					<Paragraph value={paragraph_array[2]} />
					<BlackLine />
					<Paragraph value={paragraph_array[3]} />
					<JSBullet name="Angular" source={angularLogo} />
					<BlackLine />
					<Paragraph value={paragraph_array[4]} />
					<JSBullet name="Node" source={nodeLogo}/>
					<BlackLine />
					<Paragraph value={paragraph_array[5]} />
				</div>	
			</div>
		);
	}
}

class More extends React.Component{
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
				<BottomBar />
			</div>
		);
	}
}

export default More;
