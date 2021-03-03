import React from "react";
import Logo from "../assets/logo.svg";
import LoginController from "./LoginController";
import DarkLightMode from "./DarkLightMode";

const NavBar = (props) => {
	let showPage;
	if (window.location.pathname === "/landing" && props.login === "NOT_LOGGED_IN") {
		showPage = null;
	} else {
		showPage = (
			<>
				<div>
					<a className="header-title" href="/">
						<img className="header-logo" src={Logo} />
						paperClip
					</a>
				</div>
				<div className="header-profile">
					<LoginController login={props.login} user={props.user} handleLogout={props.handleLogout} />
				</div>
			</>
		);
	}

	return (
		<nav>
			<div className="header-cta">
				<DarkLightMode />
			</div>
			{showPage}
		</nav>
	);
};

export default NavBar;
