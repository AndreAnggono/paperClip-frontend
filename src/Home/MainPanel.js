import React, { Component } from "react";
import Chat from "./Chat";

class MainPanel extends Component {
	render() {
		return (
			<div className="main-panel-container">
				<Chat history={this.props.history} user={this.props.user} handleLogout={this.props.handleLogout} fetchClips={this.props.fetchClips} />
			</div>
		);
	}
}

export default MainPanel;
