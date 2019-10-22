import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

//component import
import { TestimonialCard } from '../TestimonialSection/TestimonialCard';

import { TESTIMONIALS } from '../../data/testimonials';

class MobileTestimonial extends Component {
	state = {
		left: null,
	};

	//reference to scroll window for each testimonial card
	onScrollRef = React.createRef();

	componentDidMount() {
		this.onPageScroll();
	}

	componentWillUnmount() {
		//remove event listener
		this.onPageScroll();
	}

	onPageScroll = () => {
		this.onScrollRef.current.addEventListener('scroll', e => {
			console.log(e.target.scrollLeft);
			// e.target.scrollLeft = window.innerWidth; allows it to scroll automatically to this number
		});
	};

	onFirstTouch = e => {
		console.log(e.targetTouches[0].clientX);
	};

	render() {
		const test = TESTIMONIALS.filter(testi => {
			return testi.id === this.state.card;
		});
		return (
			<div id="mobile-test" ref={this.onScrollRef} className="mobile-testimonial-section">
				<div className="mobile-testimonial-container">
					{TESTIMONIALS.map(testimonial => {
						return (
							<TestimonialCard
								key={testimonial.id}
								image={testimonial.img}
								para={testimonial.description}
								name={testimonial.name}
								title={testimonial.title}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default MobileTestimonial;
