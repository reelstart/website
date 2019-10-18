import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class VideoModal extends Component {
	render() {
		const { videolink } = this.props;
		return (
			<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton />
				<Modal.Body>
					<div className="embed-responsive embed-responsive-video embed-responsive-16by9">
						<iframe
							className="embed-responsive-item"
							src={`${videolink}`}
							// frameBorder="0"
							allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture;"
							allowFullScreen
						/>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default VideoModal;
