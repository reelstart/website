import React, { Component } from 'react';

//component imports
import DonateButton from '../buttons/DonateButton';

class LongScrollMobileNav extends Component {
	state = {
		isClicked: true,
	};

	onMenuToggle = () => {
		this.setState(prevState => ({ isClicked: !prevState.isClicked }));
	};

	render() {
		return (
			<div className="mobile-nav-section">
				{/* <div className="mobile-nav-spacing-container" /> */}
				<div className="mobile-nav-section-navigation">
					<DonateButton />
					<div onClick={this.onMenuToggle} className={`nav-button ${!this.state.isClicked && 'grey'}`}>
						{this.state.isClicked ? (
							<p className="nav-hyp">&#9776;</p>
						) : (
							<p className="nav-hyp">&#10005;</p>
						)}
					</div>
				</div>
				<div className={`nav ${!this.state.isClicked && 'display'}`}>
					<div className="navigation">
						<ul className="nav-items">
							<li className="nav-item">
								<a href="#landing-scroll" onClick={this.onMenuToggle} className="nav-link">
									HOME
								</a>
							</li>
							<li className="nav-item">
								<a onClick={this.onMenuToggle} href="#about" className="nav-link">
									ABOUT
								</a>
							</li>
							<li className="nav-item nav--student">
								<a onClick={this.onMenuToggle} href="#student-projects" className="nav-link">
									STUDENT SHORT FILMS
								</a>
							</li>
							<li className="nav-item">
								<a href="#testimonials" onClick={this.onMenuToggle} className="nav-link">
									TESTIMONIALS
								</a>
							</li>
							<li className="nav-item">
								<a onClick={this.onMenuToggle} href="#founder" className="nav-link">
									LEADERSHIP
								</a>
							</li>
							<li className="nav-item">
								<a onClick={this.onMenuToggle} href="#gallery" className="nav-link">
									GALLERY
								</a>
							</li>
							<li className="nav-item">
								<a onClick={this.onMenuToggle} href="#sponsors" className="nav-link">
									SPONSORSHIP
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default LongScrollMobileNav;
