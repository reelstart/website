import React, { Component } from 'react';
import { buildUrl } from 'react-instafeed'
 

//image import
import { gridImages } from '../../data/gridImages';

//image modal
import ImageModal from '../ImageModal/ImageModal';

//user: reelstartorg
// const options = {
//   accessToken: '8401691317.1677ed0.fdeb014dfc6b40a1af229168edf5b1fa',
//   clientId: '1051502a682b424385b1d0ee17180955',
//   get: 'user', // popular, user
//   locationId: null,
//   resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
//   sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
//   tagName: null,
//   userId: '8401691317',
// };

//user: pattwala -- for testing
const options = {
  accessToken: '41365.d90570a.6896b731b4c2478dbe8cd64cbefccb4d',
  clientId: '1051502a682b424385b1d0ee17180955',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: '41365',
};

//console.log(options);

const instagramUrl = buildUrl(options);

let instaData;


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

	componentDidMount() {
	    fetch(instagramUrl)
			.then(res => res.json())
			.then((result) => {
				this.setState({
					isLoaded: true,
					instaData: result.data.slice(0,8)
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
	        }
			);
  	}

	render() {
		const { error, isLoaded, instaData } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div id="gallery" className="ImageGridSection">
					{/*this.state.modalShow && <ImageModal
					 	onHide={this.modalClose}
					 	show={this.state.modalShow}
					 	images={gridImages}
					 	imageid={this.state.imageId}
					 />*/}
					{instaData.map(image => {
						return (
							<div className="grid-item" key={image.id}>
								<img
									src={image.images.standard_resolution.url}
									// alt={image.caption.text}
									className="grid-image"
									//onClick={() => this.handleShow(image.id)}
								/>
							</div>
						);
					})}
				</div>
			);
		}
	}
}

export default ImageGrid;
