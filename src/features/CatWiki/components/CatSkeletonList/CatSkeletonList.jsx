import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
CatSkeletonList.propTypes = {
	length: PropTypes.number,
};

CatSkeletonList.defaultProps = {
	length: 4,
};

function CatSkeletonList({ length }) {
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

export default CatSkeletonList;
