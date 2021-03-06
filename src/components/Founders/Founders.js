import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import { FOUNDERS } from '../../data/founders';

class FoundersDesktop extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null,
		};
	}

	handleSelect(selectedIndex, e) {
		console.log(e.direction);
		this.setState({
			index: selectedIndex,
			direction: e.direction,
		});
	}

	render() {
		const { index, direction } = this.state;

		return (
			<div className="founder-carousel-window" ref={this.props.getRef} id="founder">
				<h2 className="founders-title">Our Leadership</h2>
				<Carousel interval={null} activeIndex={index} direction={direction} onSelect={this.handleSelect}>
					{FOUNDERS.map(founder => {
						return [
							<Carousel.Item>
								<div className="founder-carousel">
									<div className="founder-image-car">
										<img src={founder.image} alt="" className="founder-image" />
									</div>
									<div className="founder-notes">
										<div className="founder">
											<h2 className="founders-title">Our Leadership</h2>
											<h3 className="founders__name">{founder.name}</h3>
											<h4 className="founders__position">{founder.position}</h4>
											{founder.about.map((para, index) => {
												return (
													<p key={index} className="founders-about">
														{para}
													</p>
												);
											})}
											{this.props.children}
										</div>
									</div>
								</div>
							</Carousel.Item>,
						];
					})}
				</Carousel>
			</div>
		);
	}
}

export default FoundersDesktop;
