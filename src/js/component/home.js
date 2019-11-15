import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}
