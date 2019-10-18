import React from 'react';

//logo imports
import reelLogo from '../../assets/logos/reelStartWhite.png';
import youtube from '../../assets/logos/youtube.svg';
import twitter from '../../assets/logos/twitter.svg';
import insta from '../../assets/logos/insta.svg';

const Footer = () => {
	return (
		<div className="footer-section">
			<div className="footer-centered">
				<div className="footer-left-nav-section">
					<div className="footer-left-nav-image">
						<img src={reelLogo} alt="Reel Start Logo" />
					</div>
					<div className="footer-left-navigation">
						<ul className="footer-left__nav-items">
							<li className="nav__item">
								<a href="#testimonials" className="nav__link">
									Testimonials
								</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link">
									About
								</a>
							</li>
							<li className="nav__item">
								<a href="#student-projects" className="nav__link">
									Student Short films
								</a>
							</li>
							<li className="nav__item">
								<a href="#founder" className="nav__link">
									Leadership
								</a>
							</li>
							<li className="nav__item">
								<a href="#sponsors" className="nav__link">
									sponsors
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-right-contact-section">
					<div className="footer-right-contact">
						<h1 className="right-contact__contact-us">Contact Us</h1>
						<a href="mailto:info@reelstart.com" className="footer-right__email">
							info@reelstart.com
						</a>
						{/* <a className="contact__number" href="tel:5555555555">
							555-555-5555
						</a> */}
					</div>
					<div className="footer-right-follow">
						<p className="footer-right__title">Follow Us</p>
						<div className="footer-social-media">
							<div className="social-icon-container">
								<a
									href="https://www.youtube.com/channel/UCShlrM7MtbYHXHLrohcPiOA"
									className="social__icon"
									target="_blank"
								>
									<img src={youtube} alt="youtube icon" className="youtube-icon" />
								</a>
							</div>
							<div className="social-icon-container">
								<a
									href="https://www.instagram.com/reelstartorg/?hl=en"
									target="_blank"
									className="social__icon"
								>
									<img src={insta} alt="instagram logo" className="insta-icon" />
								</a>
							</div>
							<div className="social-icon-container">
								<a href="https://twitter.com/reelstartorg" target="_blank" className="social__icon">
									<img src={twitter} alt="twitter logo" className="twitter-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
