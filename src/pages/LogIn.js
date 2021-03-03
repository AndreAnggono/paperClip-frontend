import React, { Component } from "react";
import { LOGOUT } from "../auth/serverData";
import axios from "axios";
import LoginAuth from "../auth/LoginAuth";

export class Login extends Component {
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
			.then(this.props.handleLogout())
			.catch((error) => {
				console.log("logout error", error);
			});
		this.props.history.push("/login");
	}

	render() {
		if (this.props.loggedInStatus === "LOGGED_IN") this.props.history.push("/");
		return (
			<div className="login-signup-container">
				<LoginAuth handleSuccessfulAuth={this.handleSuccessfulAuth} />
				{/* <a className='btn btn-primary' onClick={() => this.handleLogoutClick()}>
          logout
        </a> */}
			</div>
		);
	}
}

export default Login;
