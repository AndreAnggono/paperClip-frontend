import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { LOGOUT, LOGGED_IN } from "../auth/serverData";
import Platform from "../Home/Platform";
import axios from "axios";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedInStatus: props.loggedInStatus,
			user: {},
		};
	}

	isLoggedIn() {
		if (this.state.loggedInStatus === "NOT_LOGGED_IN") {
			this.props.history.push("/login");
		}
	}

	componentDidMount() {
		this.isLoggedIn();
	}

	handleLogoutClick = () => {
		axios
			.delete(LOGOUT, { withCredentials: true })
			.then(this.props.handleLogout)
			.catch((error) => {
				console.log("logout error", error);
			});
	};

	render() {
		this.isLoggedIn();
		return (
			<>
				<div className="platform-container">
					<Platform history={this.props.history} login={this.props.login} user={this.props.user} handleLogout={this.props.handleLogout} />
				</div>
			</>
		);
	}
}
export default Home;
