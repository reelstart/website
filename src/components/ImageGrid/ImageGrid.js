import React, { Component } from 'react';

//image import
import { gridImages } from '../../data/gridImages';

//image modal
import ImageModal from '../ImageModal/ImageModal';

class ImageGrid extends Component {
	state = {
		modalShow: false,
		imageId: undefined,
	};

	handleShow = id => {
		this.setState({ modalShow: true, imageId: id });
	};

	modalClose = () => {
		this.setState({ modalShow: false });
	};

	render() {
		return (
			<div id="gallery" className="ImageGridSection">
				{this.state.modalShow && <ImageModal
					onHide={this.modalClose}
					show={this.state.modalShow}
					images={gridImages}
					imageid={this.state.imageId}
				/>}
				{gridImages.map(image => {
					return (
						<img
							src={image.image}
							alt="image on set"
							className="grid-image"
							onClick={() => this.handleShow(image.id)}
							key={image.id}
						/>
					);
				})}
			</div>
		);
	}
}

export default ImageGrid;
