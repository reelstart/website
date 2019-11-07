import React, { Component } from 'react';

//component import
import AboutCarousel from './AboutCarousel';

//style import
import '../../styles/main.scss';

class About extends Component {
	render() {
		return (
			<div ref={this.props.getRef} className="about-section" id="about">
				<div className="about-information">
					<h2 className="about__reelstart-heading">
						A little bit about <i className="reelstart red"><span>Reel Start</span></i>
					</h2>
					<p className="about__para">
						Reel Start gives deserving students in underrepresented communities the opportunity to learn
						that film can drive powerful social change.
					</p>
					<p className="about__para">
						Founded by writer/director/producer Evan Goldberg (Superbad, This is the End, Disaster Artist)
						and educator Adrienne Slover, Reel Start runs in classrooms in Los Angeles and Toronto where
						select groups of students are taken through the filmmaking process by dedicated teachers and
						industry professionals.
					</p>
					<p className="about__para">
						Through workshops, set visits and guest speakers the students learn the many elements that go
						into creating a film, while fostering valuable skills like media literacy. They then work to
						develop their own short film, addressing a social issue important to their community.
					</p>
					<p className="about__para">
						Once the script is finalized and actors, crew and locations are secured, their movie is filmed
						in just one day. An all-volunteer team of industry professionals help them realize their vision
						and bring their idea to life.
					</p>
				</div>
				<AboutCarousel />
			</div>
		);
	}
}

export default About;
