import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

//images
import { gridImages } from '../../data/gridImages';

class ImageModal extends Component {
	state = {
		index: 0,
		direction: null,
	};

	handleSelect = (selectedIndex, e) => {
		this.setState({
			index: selectedIndex,
			direction: e.direction,
		});
	};

	componentDidMount() {
		this.setState( {
			index: this.props.imageid
		})
	};

	render() {
		const { index, direction } = this.state;

		return (
			<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered dialogClassName='image-modal'>
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">student pictures</Modal.Title>
				</Modal.Header>
				<Modal.Body bsPrefix="modal-body">
					<div className="embed-responsive embed-responsive-4by3 embed-responsive-images embed-responsive-16by9-images">
						<Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
							{gridImages.map( ( image ) => {
								return (
									<Carousel.Item key={image.id}>
								<img className="d-block mw-100 grid-image-carousel" src={image.image} alt="First slide" />
							</Carousel.Item>
								)
							})}
						</Carousel>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default ImageModal;
