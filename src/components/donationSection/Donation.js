import React, { Component } from 'react';

//component import (need button for donation)
import { DownButton } from '../buttons/DownButton';

//image import
import donationCurve from '../../assets/images/Desktop/donation-curve.png';

const Donation = props => {
	return (
		<div className="donation-section">
			<div className="donation-left-title">
				<p className="support__heading">
					<span className="support__heading--new-line">Support</span>
					<span className="support__heading--new-line">Reel Start</span>
				</p>
			</div>
			<div className="donation-center-image">
				<img src={donationCurve} alt="A red curved line linking saying to donation button" />
			</div>
			<div className="donation-right-button">
				<p>donation button component here</p>
			</div>
			<DownButton click={props.click} color={'down__button--blue'} />
		</div>
	);
};

export default Donation;
