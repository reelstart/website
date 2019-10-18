import React, { Component } from 'react';

//component imports
import { TestimonialCard } from './TestimonialCard';

//data import for props
import { TESTIMONIALS } from '../../data/testimonials';

const TestimonialSection = props => {
	return (
		<div ref={props.getRef} className="testimonial-section" id="testimonials">
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
	);
};

export default TestimonialSection;
