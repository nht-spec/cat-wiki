import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
CatSkeletonDiscover.propTypes = {
	length: PropTypes.number,
};

CatSkeletonDiscover.defaultProps = {
	length: 4,
};

function CatSkeletonDiscover({ length }) {
	return (
		<div className='skeletion-control'>
			{Array.from(new Array(length)).map((x, idx) => (
				<div className='steletion-list' key={idx}>
					<Skeleton
						className='skeletion-one'
						variant='rectangular'
						width='100%'
						height={220}
					/>

					<Skeleton width='60%' className='skeletion-two' />
				</div>
			))}
		</div>
	);
}

export default CatSkeletonDiscover;
