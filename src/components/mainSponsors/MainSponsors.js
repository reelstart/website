import React from 'react';

//componenet import
import LogoContainer from '../logoContainer/LogoContainer';
import WeLogo from '../../assets/logos/WE-logo_transparent-white.png';

//grid images import
import { MAINLOGOS } from '../../data/mainSponsorLogos';

const MainSponsors = () => {
	return (
		<div className="main-sponsors-section" id="sponsors">
			<h2 className="main-sponsors__title">
				<i className="reelstart white"><span>Reel Start</span></i> is made possible by the support of our wonderful volunteers, partners, and sponsors.
			</h2>
			<div className="we-sponsor">
				<img className='we-logo' src={WeLogo} alt="We logo"/>
			</div>
			<div className="sponsors-grid">
				{MAINLOGOS.map(logo => {
					const { id, image, name } = logo;
					return <LogoContainer addClass={name} image={image} key={id} />;
				})}
			</div>
		</div>
	);
};

export default MainSponsors;
