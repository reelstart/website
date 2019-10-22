import React from 'react';

//styles
import '../../styles/main.scss';
import downArrow from '../../assets/images/Desktop/RS_ArrowDown_.png';

export const DownButton = props => {
	return (
		<div className={`down__button ${props.color}`} onClick={props.click}>
			{/* <img src={downArrow} alt="" className="down-button__arrow" /> */}
			<i className="fa fa-caret-down"></i>
		</div>
	);
};
