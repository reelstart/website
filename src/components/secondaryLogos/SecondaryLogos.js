import React from 'react';

//import component
import LogoContainer from '../logoContainer/LogoContainer';

//image import
import { SECONDARYLOGOS } from '../../data/secondaryLogos';

const SecondaryLogos = () => {
	return (
		<div className="secondary-logo-section">
			<div className="secondary-logo-grid">
				{SECONDARYLOGOS.map(logo => {
					const { id, image, name } = logo;
					return <LogoContainer key={id} image={image} addClass={name} />;
				})}
			</div>
		</div>
	);
};

export default SecondaryLogos;
