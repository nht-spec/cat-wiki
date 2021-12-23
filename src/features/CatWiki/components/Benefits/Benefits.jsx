import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import benefit_one from './images/benefit_one.png';
import benefit_two from './images/benefit_two.png';
import benefit_three from './images/benefit_three.png';

function Benefits(props) {
	return (
		<div className='benefits-control'>
			<div className='benefit-info'>
				<div className='cross-bar'></div>
				<h2 className='text-title'>Why should you have a cat?</h2>
				<p className='text-desc'>
					Having a cat around you can actually trigger the release of
					calming chemicals in your body which lower your stress and
					anxiety leves
				</p>
				<Link className='link-to-benefit' to='/benefit'>
					Benefits
					<span className='material-icons-round'>
						arrow_right_alt
					</span>
				</Link>
			</div>

			<div className='benefit-image-list'>
				<div className='image-cat-one'>
					<img className='img' src={benefit_one} alt='' />
					<div className='image-cat-three'>
						<img className='img' src={benefit_three} alt='' />
					</div>
				</div>
				<div className='image-cat-two'>
					<img className='img' src={benefit_two} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Benefits;
