import React from 'react';

//styles
import '../../styles/main.scss';

//image import
import reelLogo from '../../assets/images/Desktop/reel-start-logo.png';

export const Nav = () => {
	return (
		<div className="nav-nonboot">
			<div className="nav-image">
				<img src={reelLogo} alt="" className="nav-reelImage" />
			</div>
			<div className="navigation">
				<button className="mobile-nav">nav</button>
				<ul className="nav-items">
					<li className="nav-item">
						<a href="#about" className="nav-link-nonboot">
							ABOUT
						</a>
					</li>
					<li className="nav-item nav--student">
						<a href="#student-projects" className="nav-link-nonboot">
							STUDENT SHORT FILMS
						</a>
					</li>
					<li className="nav-item">
						<a href="#testimonials" className="nav-link-nonboot">
							TESTIMONIALS
						</a>
					</li>

					<li className="nav-item">
						<a href="#founder" className="nav-link-nonboot">
							LEADERSHIP
						</a>
					</li>
					<li className="nav-item">
						<a href="#gallery" className="nav-link-nonboot">
							GALLERY
						</a>
					</li>
					<li className="nav-item">
						<a href="#sponsors" className="nav-link-nonboot">
							SPONSORSHIP
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
