import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//component imports
import LandingPage from '../../components/LandingPage/LandingPage';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import About from '../../components/AboutSection/About';
import StudentProjects from '../../components/StudentProjectsSection/StudentProjects';
import Founders from '../FoundersSection/Founders';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import More from '../../components/more@/More';
import MainSponsors from '../../components/mainSponsors/MainSponsors';
import SecondaryLogos from '../../components/secondaryLogos/SecondaryLogos';
import SecondDonation from '../../components/secondDonationSection/SecondDonation';
import Footer from '../../components/Footer/Footer';

//testing carousels
import FoundersMobile from '../../components/FoundersMobile/FoundersMobile';
import TestimonialCarousel from '../../components/TestimonialSection/TestimonialCarousel';
import FoundersDesktop from '../../components/FoundersDesktop/FoundersDesktop';

//mobile component imports
import MobileNav from '../../components/MobileNav/MobileNav';
import MobileTestimonial from '../../components/MobileTestimonial/MobileTestimonial';

//mobile long scroll components
import LongScrollMobileNav from '../../components/MobileNav/LongScrollMobileNav';

//styles
import '../../styles/main.scss';

class App extends Component {
	state = {
		width: window.innerWidth,
		inProp: false,
	};

	//reference to sections for scroll
	aboutRef = React.createRef();
	testimonialRef = React.createRef();
	FoundersRef = React.createRef();

	componentDidMount() {
		window.addEventListener('resize', this.onPageResize);
		window.addEventListener('scroll', () => {
			this.setStateHandler();
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onPageResize);
	}

	onPageResize = () => {
		this.setState({ width: window.innerWidth });
	};

	setStateHandler = () => {
		if (window.scrollY > 400) {
			this.setState({ inProp: true });
		} else if (window.scrollY < 400) {
			this.setState({ inProp: false });
		}
	};

	onClickScroll = ref => {
		const scrollAmount = 20;

		const difference = ref.current.getBoundingClientRect().top % scrollAmount;

		if (ref.current.getBoundingClientRect().top >= scrollAmount) {
			window.scrollBy({
				top: scrollAmount,
			});

			requestAnimationFrame(() => this.onClickScroll(ref));
		} else {
			window.scrollBy({
				top: difference + 0.5,
			});
		}
	};

	render() {
		const large = (
			<div>
				<LandingPage click={() => this.onClickScroll(this.aboutRef)} />
				<About getRef={this.aboutRef} />
				<StudentProjects
					getRef={this.StudentProjectsRef}
					click={() => this.onClickScroll(this.testimonialRef)}
				/>
				<TestimonialSection getRef={this.testimonialRef} />
				<FoundersDesktop getRef={this.FoundersRef} />
				<ImageGrid />
				<More />
				<MainSponsors />
				<SecondaryLogos />
				<SecondDonation />
				<Footer />
			</div>
		);

		const longScroll = (
			<div className="longScroll">
				<LongScrollMobileNav />
				<LandingPage />
				<About />
				<StudentProjects />
				{/* <MobileTestimonial /> */}
				<TestimonialCarousel />
				<FoundersMobile />
				<ImageGrid />
				<More />
				<MainSponsors />
				<SecondaryLogos />
			</div>
		);

		return (
			<div className="main-div-container">
				{this.state.width >= 900
					? large //small
					: longScroll}
			</div>
		);
	}
}

export default App;

//if we want a medium size
// this.state.width >= 760 ? this.large :
