import React from 'react';
import { useScroll } from '../../features/CatWiki/hooks/useScroll';
import './style.scss';
Footer.propTypes = {};

function Footer() {
	const { scrollDirection } = useScroll();
	const styles = {
		active: {
			transition: 'transform ease-in-out 0.8s',
		},
		hidden: {
			transition: 'transform ease-in-out 0.8s',
			transform: 'translateY(100%)',
		},
	};

	return (
		<div className='fixed'>
			<div
				className='list-content'
				style={
					(scrollDirection === undefined && styles.active) ||
					scrollDirection === 'down'
						? styles.active
						: styles.hidden
				}
			>
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
