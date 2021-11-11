import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function LogoHeader() {
	return (
		<Link className='logo-header-control' to='/home'>
			<h2 className='logo-title'>CatWiki</h2>
			<div className='logo-image'>
				<img className='image' src='./catLogo.png' alt='' />
			</div>
		</Link>
	);
}

export default LogoHeader;
