import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LandingImage from "../assets/landing_image.svg";

import "../zoha.css";
import "../app.css";

const Landing = (props) => {
	if (props.loggedInStatus === "LOGGED_IN") props.history.push("/"); // this is for forced redirection of landing page if logged in
	return (
		<>
			<div className="landing-container">
				<Link className="landing-title" to="/landing">
					<img className="landing-logo" src={Logo} />
					paperClip
				</Link>
				<h3>clip your destiny away</h3>
				<div className="landing-profile">
					<Link className="btn btn-primary" to="/login">
						login
					</Link>
					<Link className="btn btn-primary" to="/signup">
						sign up
					</Link>
				</div>
				<img className="landing-svg" src={LandingImage} alt="Welcome to 📎paperClip!" />
			</div>
		</>
	);
};

export default Landing;
