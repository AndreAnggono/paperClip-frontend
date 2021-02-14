import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/registrations";

export class Registration extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			registrationErrors: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const { username, email, password, password_confirmation } = this.state;

		axios
			.post(
				SERVER_URL,
				{
					user: {
						username,
						email,
						password,
						password_confirmation,
					},
				},
				{ withCredentials: true }
			)
			.then((response) => {
				if (response.data.status === "created") {
					this.props.handleSuccessfulAuth(response.data);
				}
			})
			.catch((error) => {
				console.log("registration error", error);
			});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
					<input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
					<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
					<input
						type="password"
						name="password_confirmation"
						placeholder="Password confirmation"
						value={this.state.password_confirmation}
						onChange={this.handleChange}
						required
					/>
					<button type="submit">Register</button>
				</form>
			</div>
		);
	}
}

export default Registration;
