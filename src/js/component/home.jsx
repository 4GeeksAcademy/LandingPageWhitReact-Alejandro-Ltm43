import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar />
			<div className="container">
			 <Jumbotron/>
			 <div className="row">
			 <Card/>
			 <Card/>
			 <Card/>
			 <Card/>
			 </div>
			 </div>
			   <Footer/>
		</div>
	);
};

export default Home;
