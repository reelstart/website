import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { gridImages } from '../../data/gridImages';

class AboutCarousel extends Component {
	render() {
		return (
			<div className="about-carousel">
				<Carousel interval={null}>
					{gridImages.map(({ image, id }) => {
						return (
							<Carousel.Item key={id}>
								<img src={image} alt="student images" className="about-carousel__image" />
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		);
	}
}

export default AboutCarousel;
