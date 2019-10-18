import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//component imports
import DonateButton from '../buttons/DonateButton';

class MobileNav extends Component {
	state = {
		isClicked: true,
	};

	onMenuToggle = () => {
		this.setState(prevState => ({ isClicked: !prevState.isClicked }));
	};

	render() {
		return (
			<div className="mobile-nav-section">
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
								<Link onClick={this.onMenuToggle} to="/" className="nav-link">
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={this.onMenuToggle} to="/testimonial" className="nav-link">
									TESTIMONIALS
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={this.onMenuToggle} to="/about" className="nav-link">
									ABOUT
								</Link>
							</li>
							<li className="nav-item nav--student">
								<Link onClick={this.onMenuToggle} to="/studentshorts" className="nav-link">
									STUDENT SHORT FILMS
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={this.onMenuToggle} to="/leadership" className="nav-link">
									LEADERSHIP
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={this.onMenuToggle} to="/gallery" className="nav-link">
									GALLERY
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={this.onMenuToggle} to="/sponsors" className="nav-link">
									SPONSORSHIP
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default MobileNav;
