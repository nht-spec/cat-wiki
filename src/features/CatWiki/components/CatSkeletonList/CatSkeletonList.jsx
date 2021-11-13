import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';
import './style.scss';
CatSkeletonList.propTypes = {
	length: PropTypes.number,
};
CatSkeletonList.defaultProps = {
	length: 10,
};
function CatSkeletonList({ length }) {
	return (
		<div>
			{Array.from(new Array(length)).map((x, idx) => (
				<div className='skeletion-list' key={idx}>
					<Skeleton className='skeletion-one' variant='rectangular' />
					<div className='list-info'>
						<Skeleton width='40%' className='skeletion-two' />
						<Skeleton width='100%' className='skeletion-three' />
						<Skeleton width='100%' className='skeletion-three' />
						<Skeleton width='80%' className='skeletion-three' />
					</div>
				</div>
			))}
		</div>
	);
}

export default CatSkeletonList;
