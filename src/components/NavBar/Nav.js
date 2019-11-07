import React, { Component } from 'react';

//styles
import '../../styles/main.scss';

//image import
import reelLogo from '../../assets/images/Desktop/reel-start-logo.png';

class Nav extends Component {

	jumpTo = (e) => {
		e.preventDefault();
		let anchor = e.currentTarget.href.split("#");
		let section = document.getElementById(anchor[1]);
		window.scroll(0,section.offsetTop);
	}

	render() {
		return (
			<div className="nav-nonboot">
				<div className="nav-image">
					<a href="#landing-scroll" className="nav-link-nonboot" onClick={this.jumpTo}>
						<img src={reelLogo} alt="" className="nav-reelImage" />
					</a>
				</div>
				<div className="navigation">
					<button className="mobile-nav">nav</button>
					<ul className="nav-items">
						<li className="nav-item">
							<a href="#about" className="nav-link-nonboot" onClick={this.jumpTo}>
								ABOUT
							</a>
						</li>
						<li className="nav-item nav--student">
							<a href="#student-projects" className="nav-link-nonboot" onClick={this.jumpTo}>
								STUDENT SHORT FILMS
							</a>
						</li>
						<li className="nav-item">
							<a href="#testimonials" className="nav-link-nonboot" onClick={this.jumpTo}>
								TESTIMONIALS
							</a>
						</li>

						<li className="nav-item">
							<a href="#founder" className="nav-link-nonboot" onClick={this.jumpTo}>
								LEADERSHIP
							</a>
						</li>
						<li className="nav-item">
							<a href="#gallery" className="nav-link-nonboot" onClick={this.jumpTo}>
								GALLERY
							</a>
						</li>
						<li className="nav-item">
							<a href="#sponsors" className="nav-link-nonboot" onClick={this.jumpTo}>
								SPONSORSHIP
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Nav;