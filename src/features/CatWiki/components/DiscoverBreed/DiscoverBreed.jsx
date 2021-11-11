import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function DiscoverBreed({ valueOfBreed }) {
	return (
		<div className='discover-control'>
			<h2 className='discover-title'>Most Searched Breeds</h2>
			<div className='crossbar'></div>

			<div className='link-cat-list-control'>
				<h2>66+ Breeds For you to discover</h2>

				<Link className='link-to-cat-list' to='/catList'>
					see more
					<span class='material-icons-round'>arrow_right_alt</span>
				</Link>
			</div>
			<div>
				{valueOfBreed.data?.map(
					(list, idx) =>
						idx < 4 && (
							<ul key={idx}>
								<img src={list.image.url} alt='' />
							</ul>
						)
				)}
			</div>
		</div>
	);
}

export default DiscoverBreed;
