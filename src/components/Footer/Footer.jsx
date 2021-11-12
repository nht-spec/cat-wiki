import React from 'react';
import './style.scss';
Footer.propTypes = {};

function Footer(props) {
	return (
		<div className='fixed'>
			<div className='list-content'>
				<div className='logo'>
					<h2 className='text-logo'>CatWiki</h2>
					<div className='image-logo'>
						<img className='image' src='./catLogoWhile.png' alt='' />
					</div>
				</div>

				<div className='text-content'>
					<p className='text-one'>©</p>
					<p className='text-two'>
						created by HoangThinh - devChallenge.io 2021
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
