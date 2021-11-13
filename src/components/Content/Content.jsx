import React, { useState } from 'react';
import Benefits from '../../features/CatWiki/components/Benefits/Benefits';
import DiscoverBreed from '../../features/CatWiki/components/DiscoverBreed/DiscoverBreed';
import Search from '../../features/CatWiki/components/Search/Search';
import './backgroudcat.png';
import './style.scss';
Content.propTypes = {};

function Content() {
	const [valueOfBreed, setValueOfBreed] = useState([]);
	const [loading, setLoading] = useState(false);

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
					<Search Loading={setLoading} valueOfBreed={setValueOfBreed} />
				</div>
				<div className='backgroud-image' />
			</div>

			<DiscoverBreed loading={loading} valueOfBreed={valueOfBreed} />
			<Benefits />
		</div>
	);
}

export default Content;
