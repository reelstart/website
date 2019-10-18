import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { TESTIMONIALS } from '../../data/testimonials';
import { TestimonialCard } from '../TestimonialSection/TestimonialCard';

const TestimonialCarousel = () => {
	return (
		<div className="testimonial-section-mobile" id="testimonials">
			<Carousel interval={null}>
				{TESTIMONIALS.map(testimonial => {
					return (
						<Carousel.Item key={testimonial.id} bsPrefix="testimonial__item">
							<TestimonialCard
								image={testimonial.img}
								para={testimonial.description}
								name={testimonial.name}
								title={testimonial.title}
							/>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</div>
	);
};

export default TestimonialCarousel;
