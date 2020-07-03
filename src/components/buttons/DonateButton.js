import React, { Component } from 'react';

class DonateButton extends Component {
	state = {
		donateLink: "https://charity.gofundme.com/o/en/donate-widget/17379"
	};

	handleShow = (e) => {
		e.preventDefault();
		let width = 500;
		let height = 960;
		var left = (window.screen.width - width) / 2;
		var top = (window.screen.height - height) / 2;

		window.open(this.state.donateLink, "reelstartdonate", "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top);
	};

	render() {
		return (
			<div className="donation-button">
				<a onClick={this.handleShow} href={this.state.donateLink} target="_blank"><button className="donate-button">Donate</button></a>
			</div>
		);
	}
}

export default DonateButton;
