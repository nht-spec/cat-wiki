import React from 'react';
import { Link } from 'react-router-dom';
import CatSkeletonDiscover from '../CatSkeletonDiscover/CatSkeletonDiscover';
import './style.scss';

function DiscoverBreed({ valueOfBreed, loading }) {
	return (
		<div className='discover-control'>
			<h2 className='discover-title'>Most Searched Breeds</h2>
			<div className='crossbar'></div>

			<div className='link-cat-list-control'>
				<h2>66+ Breeds For you to discover</h2>

				<Link className='link-to-cat-list' to='/catList'>
					see more
					<span className='material-icons-round'>arrow_right_alt</span>
				</Link>
			</div>

			{loading && (
				<div className='breed-list-control-loading'>
					<CatSkeletonDiscover />
				</div>
			)}

			{!loading && (
				<div className='breed-list-control'>
					{/* <div className='rectangle'></div> */}
					<>
						{valueOfBreed.data?.map(
							(list, idx) =>
								idx < 4 && (
									<div className='breed-list' key={idx}>
										<div className='breed-image'>
											<img className='image' src={list.image.url} alt='' />
										</div>

										<p className='breed-name'>{list.name}</p>
									</div>
								)
						)}
					</>
				</div>
			)}
		</div>
	);
}

export default DiscoverBreed;
