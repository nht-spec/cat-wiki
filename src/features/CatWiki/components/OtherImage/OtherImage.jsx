import React from 'react';
import './style.scss';
OtherImage.propTypes = {};

function OtherImage({ listImage }) {
	return (
		<div className='other-image-control'>
			<h2 className='text-title'>Other photos</h2>
			<div className='image-cat-list'>
				{listImage.data?.map((img, idx) => (
					<div className='image-cat' key={idx}>
						<img className='image' src={img.url} alt='' />
					</div>
				))}
			</div>
		</div>
	);
}

export default OtherImage;
