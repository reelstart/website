import React from 'react';

const DonateButton = props => {
	return (
		<div
			className={`donate-button ${props.styleName}`}
			onClick={() => {
				window.open('https://www.crowdrise.com/reelstart#fundraisers', '_blank');
			}}
		>
			<h1 className="donate-with-us">Donate</h1>
		</div>
	);
};

export default DonateButton;
