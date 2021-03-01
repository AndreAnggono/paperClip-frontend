import React, { Component } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import { USERS } from "../auth/serverData";

export class ProfileUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			message: "",
			success: false,
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
			.put(
				`${USERS}/${this.props.user.id}`,
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
				if (response.status === 204) {
					window.location.reload();
					// console.log("Success");
					this.setState({ message: "Success", success: true });
					this.props.onClick(false);
				}
			})
			.catch((error) => {
				console.log("registration error", error);
			});
	}

	render() {
		return (
			<>
				<h1>It's time for a change.</h1>
				{this.state.message.length > 0 && <ErrorMessage class={"error-box green"} message={this.state.message} />}
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
					<button type="submit">submit</button>
				</form>
				<a className="btn btn-primary" href="/profile">
					Go Back{" "}
				</a>
			</>
		);
	}
}

export default ProfileUpdate;
