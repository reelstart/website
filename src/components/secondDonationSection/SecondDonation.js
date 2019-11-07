import React from 'react';

//component import
import DonateButton from '../buttons/DonateButton';

const SecondDonation = () => {
	return (
		<div className="second-donation-section">
			<div className="second-donation-para">
				<p className="second-donation__para">
					<i className="reelstart blue"><span>Reel Start</span></i> funds its program and operations with support and donations from those who believe in our goal.
				</p>
			</div>
			<DonateButton styleName={'second-donation-button'} />
		</div>
	);
};

export default SecondDonation;
