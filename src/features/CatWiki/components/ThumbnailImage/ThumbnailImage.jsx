import React from 'react';
import './style.scss';
ThumbnailImage.propTypes = {};

function ThumbnailImage({ imageCat }) {
	return (
		<div className='thumnailb-cat-control'>
			<img className='image-cat' src={imageCat} alt='' />
		</div>
	);
}

export default ThumbnailImage;
