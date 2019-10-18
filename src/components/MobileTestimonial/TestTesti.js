import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

//testimonial files
import { TESTIMONIALS } from '../../data/testimonials';

class TestTesti extends Component {
	render() {
		console.log(TESTIMONIALS);
		return (
			<Carousel interval={null} activeIndex={index} direction={direction} onSelect={this.handleSelect}>
				<Carousel.Item>
					<div>hi</div>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default TestTesti;
