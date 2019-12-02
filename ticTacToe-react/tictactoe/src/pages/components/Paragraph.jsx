import React from 'react';

class Paragraph extends React.Component{
	render(){
		return(
			<div class="paragraph">
				{this.props.value}
			</div>
		);
	}
}

export default Paragraph;
