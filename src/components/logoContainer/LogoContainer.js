import React from 'react';

const LogoContainer = props => {
	return (
		<div className={`logo-container ${props.addClass}`}>
			<img src={props.image} alt="company logo" className="logo" />
		</div>
	);
};

export default LogoContainer;
