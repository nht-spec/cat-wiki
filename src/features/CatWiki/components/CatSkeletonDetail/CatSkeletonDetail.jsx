import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Skeleton } from '@mui/material';
CatSkeletonDetail.propTypes = {
	length: PropTypes.number,
};
CatSkeletonDetail.defaultProps = {
	length: 1,
};

function CatSkeletonDetail({ length }) {
	return (
		<div className='skeletion-control-detail'>
			{Array.from(new Array(length)).map((x, idx) => (
				<div className='skeletion-list-detail' key={idx}>
					<Skeleton className='skeletion' variant='rectangular' />
				</div>
			))}
		</div>
	);
}

export default CatSkeletonDetail;
