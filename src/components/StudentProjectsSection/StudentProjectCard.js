import React, { Component } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import { Button } from 'react-bootstrap';

class StudentProjectCard extends Component {
	state = {
		modalShow: false,
	};

	handleShow = () => {
		this.setState({ modalShow: true });
	};

	modalClose = () => {
		this.setState({ modalShow: false });
	};
	render() {
		const { image, title, location, description, link, videoLink } = this.props.project;

		return (
			<div className="student-project-card">
				<VideoModal
					videolink={videoLink}
					show={this.state.modalShow}
					onHide={this.modalClose}
				/>
				<div className="project-card-image">
					<img src={image} alt="Movie Poster" className="project__poster" />
					<Button onClick={this.handleShow} className="playButton">
						<p className="play__button">&#9656;</p>
					</Button>
				</div>
				<div className="project-card-info">
					<h4 className="project-card__title">{title}</h4>
					<p className="project-card__location">{location}</p>
					<p className="project-card__description">{description}</p>
					<div className="project-card__view-more">
						<a href={link} target="_blank" className="view-more__click">
							View Full Cast
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default StudentProjectCard;
