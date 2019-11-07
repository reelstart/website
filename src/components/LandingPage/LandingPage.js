import React, { Component } from 'react';

//component import
import { NavBar } from '../NavBar/NavBar';
import { DownButton } from '../buttons/DownButton';

//styles
import '../../styles/main.scss';

//image import
import reelLogo from '../../assets/images/Desktop/splash-logo.png';
import background from '../../assets/images/Desktop/RS_Desktop_Main.png';

class LandingPage extends Component {
	render() {
		return (
			<div id="landing-scroll" className="landingPage-section">
				<NavBar className="navBar" />
				<div className="landingPage-splash">
					<div className="landingPage-splash-background">
						<img src={background} alt="image of student and educators" className="splash__background" />
					</div>
					<div className="landingPage-splash-text">
						{/* 
						<div className="splash-text__image">
							<img src={reelLogo} alt="Reel Start logo" className="splash-image-sizes" />
						</div> 
						*/}
						<div className="splast-text__text-content">
							<h1 className="splash__text">
								<i className="reelstart red"><span>Reel Start</span></i> gives students their first shot to change the world through film.
							</h1>
						</div>
					</div>
					<DownButton click={this.props.click} color={'down__button--red'} />
				</div>
			</div>
		);
	}
}

export default LandingPage;
