import React, { Component } from 'react';

class EachFounder extends Component {
	render() {
		const { name, position, about } = this.props.founder;

		return (
			<div className="founder">
				<h1 className="founders__name">{name}</h1>
				<h3 className="founders__position">{position}</h3>
				{about.map((para, index) => {
					return (
						<p key={index} className="founders-about">
							{para}
						</p>
					);
				})}
				{this.props.children}
			</div>
		);
	}
}

export default EachFounder;
