import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';
import './style.scss';
CatSkeletonOtherImg.propTypes = {
	length: PropTypes.number,
};
CatSkeletonOtherImg.defaultProps = {
	length: 8,
};
function CatSkeletonOtherImg({ length }) {
	return (
		<div className='skeletion-control-other-img'>
			{Array.from(new Array(length)).map((x, idx) => (
				<div className='skeletion-list-other-img' key={idx}>
					<Skeleton className='skeletion' variant='rectangular' />
				</div>
			))}
		</div>
	);
}

export default CatSkeletonOtherImg;
