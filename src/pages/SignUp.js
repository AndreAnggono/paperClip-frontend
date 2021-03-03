import React, { Component } from "react";
import axios from "axios";
import { LOGOUT } from "../auth/serverData";
import Registration from "../auth/Registration";

export class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);

		// this is to handle redirection after a successful login
		this.props.history.push("/"); //history is a prop from react router
	}

	handleLogoutClick() {
		axios
			.delete(LOGOUT, { withCredentials: true })
			.then((response) => {
				this.props.handleLogout();
			})
			.catch((error) => {
				console.log("logout error", error);
			});
	}

	render() {
		if (this.props.loggedInStatus === "LOGGED_IN") this.props.history.push("/");
		return (
			<div className="login-signup-container">
				<Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
			</div>
		);
	}
}

export default SignUp;
