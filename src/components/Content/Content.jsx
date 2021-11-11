import React, { useState } from 'react';
import Search from '../../features/CatWiki/components/Search/Search';
import './style.scss';
import './backgroudcat.png';
import DiscoverBreed from '../../features/CatWiki/components/DiscoverBreed/DiscoverBreed';
Content.propTypes = {};

function Content(props) {
	const [valueOfBreed, setValueOfBreed] = useState([]);

	return (
		<div className='content-control'>
			<div className='content-list'>
				<div className='text-content'>
					<div className='logo-content'>
						<h2 className='logo-title-text'>CatWiki</h2>
						<div className='logo-image'>
							<img className='image' src='./catLogoWhile.png' alt='' />
						</div>
					</div>

					<p className='text-content-dec'>
						Get to know more about your cat breed
					</p>
					<Search valueOfBreed={setValueOfBreed} />
				</div>
				<div className='backgroud-image' />
			</div>
			<DiscoverBreed valueOfBreed={valueOfBreed} />
		</div>
	);
}

export default Content;
