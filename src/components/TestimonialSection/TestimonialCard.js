import React from 'react';

//styles for cards
import '../../styles/main.scss';

export const TestimonialCard = props => {
	const { image, para, name, title } = props;
	return (
		<div className="testimonial-card">
			<div className="testimonial-card-image-holder">
				<img src={image} alt="Picture of person giving testimonial" className="testimonial__image" />
			</div>
			<div className="testimonial-main-content">
				<p className="testimonial__para">{para}</p>
			</div>
			<div className="testimonial-author">
				<h6 className="testimonial-author__name">{name}</h6>
				<p className="testimonial-author__title">{title}</p>
			</div>
		</div>
	);
};
