import React from "react";

const ProfileInfo = (props) => {
	const time = new Date();
	const joined = new Date(props.user.created_at).toLocaleDateString();
	const timeJoined = ((new Date().getTime() - new Date(props.user.created_at).getTime()) / (1000 * 3600 * 24)).toFixed(2);

	return (
		<>
			<h1>hey {props.user.username}</h1>
			<h2>{props.user.email}</h2>
			<h2>
				You've been a member since {joined}
				<br></br> and you've been clippin' for {timeJoined} days.
			</h2>
			<br></br>
			<button
				onClick={() => {
					props.onClick(true);
				}}
				className="btn btn-primary"
			>
				Edit Profile
			</button>
		</>
	);
};

export default ProfileInfo;
