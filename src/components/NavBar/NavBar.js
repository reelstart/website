import React from 'react';

//component imports
import { Nav } from './Nav';
import DonateButton from '../buttons/DonateButton';

//styles
import '../../styles/main.scss';

export const NavBar = props => {
	return (
		<div className={props.className}>
			<Nav />
			<DonateButton />
		</div>
	);
};
