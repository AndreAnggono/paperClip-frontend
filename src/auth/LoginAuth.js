import React, { Component } from "react";
import ErrorMessage from "./ErrorMessage";
import { SESSIONS } from "../auth/serverData";
import axios from "axios";

export class LoginAuth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			error: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const { username, password } = this.state;
		axios
			.post(
				SESSIONS,
				{
					user: {
						username,
						password
					}
				},
				{ withCredentials: true }
			)
			.then((response) => {
				if (response.data.status === 401) {
					this.setState({
						error: response.data.error,
						username: "",
						password: ""
					});
				} else {
					if (response.data.logged_in) {
						this.props.handleSuccessfulAuth(response.data);
					}
				}
			})
			.catch((error) => {
				console.log("login error", error);
			});
	}

	render() {
		return (
			<>
				<h1>Login</h1>
				{/*<p>Test with user:<strong> ac</strong> and password:{' '}
          <strong>chicken</strong></p>*/}
				{this.state.error.length > 1 && <ErrorMessage class={"error-box"} message={this.state.error} />}
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
					<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
					<button type="submit">login</button>
				</form>
			</>
		);
	}
}

export default LoginAuth;
