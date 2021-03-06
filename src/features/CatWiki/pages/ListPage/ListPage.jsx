import React from 'react';
import { useHistory } from 'react-router';
import CatSkeletonList from '../../components/CatSkeletonList/CatSkeletonList';
import useCatList from '../../hooks/useCatList';
import './style.scss';

function ListPage() {
	const { list, loading } = useCatList({ limit: 10 });

	const history = useHistory();
	const hanleClick = (id, imageId) => {
		history.push(`/cat/${id}/${imageId}`);
	};
	return (
		<div className='detail-page-control'>
			<h2 className='title-text-detail'>Top 10 most searched breeds</h2>

			<div className='box-detail-info'>
				{loading && <CatSkeletonList />}
				{!loading &&
					list.data?.map((list, idx) => (
						<div className='list-info-cat' key={idx}>
							<div className='cat-image'>
								<img className='image' src={list.image.url} alt='' />
							</div>

							<div
								onClick={() => hanleClick(list.id, list.image.id)}
								className='info-text-cat'
							>
								<div className='name-cat-text-index'>
									{`${idx + 1}.`}
									<p className='name-cat'>{list.name}</p>
								</div>
								<p className='text-desc'>{list.description}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default ListPage;
