import React from 'react';

const SideScroll = props => {
	return (
		<button onClick={props.click} className={`side-scroll__btn ${props.styleName}`} style={props.style}>
			&#9002;
		</button>
	);
};

export default SideScroll;
