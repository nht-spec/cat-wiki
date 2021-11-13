import { Skeleton } from '@mui/material';
import React from 'react';
import './style.scss';

CatSkeletonInfoDetail.defaultProps = {
	length: 1,
};

function CatSkeletonInfoDetail({ length }) {
	return (
		<div className='skeletion-control-info'>
			{Array.from(new Array(length)).map((x, idx) => (
				<div className='steletion-list-info' key={idx}>
					<Skeleton width='40%' className='skeletion' />
					<Skeleton width='100%' className='skeletion' />
					<Skeleton width='100%' className='skeletion' />
					<Skeleton width='60%' className='skeletion' />
					<Skeleton width='60%' className='skeletion' />
				</div>
			))}
		</div>
	);
}

export default CatSkeletonInfoDetail;
