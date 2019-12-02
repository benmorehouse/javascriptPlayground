import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
	return(
		<div>
			<h3>
				This is an example of the third react page
			</h3>
			<Link to="/users"> Show all of my users </Link>

		</div>
	);
}

export default MainPage;
