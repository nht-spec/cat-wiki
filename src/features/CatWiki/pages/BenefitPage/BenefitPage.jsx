import React from 'react';
import './style.scss';
BenefitPage.propTypes = {};

const benefitList = [
	{
		id: 0,
		value:
			'Has been checked that have a cat reduce the stress and are big companion for those who feel sad or depressed.',
	},
	{
		id: 1,
		value:
			'Normally, the cat owners have the blood pressure lower than others without cats.',
	},
	{
		id: 2,
		value:
			'Your immune system will be stronger and it will allow you to recover faster of sickness.',
	},
	{
		id: 3,
		value: 'For general, the kids that are growing with cats get sick less.',
	},
	{
		id: 4,
		value: 'They have less cares compare from others pets.',
	},
	{
		id: 5,
		value:
			'They help you to recover faster from an emotional trauma like the pass away of a loved.',
	},
];

function BenefitPage(props) {
	return (
		<div className='benefit-page-control'>
			<h1 className='title-name'>Benefits</h1>
			<div className='image-cat'>
				<img
					className='image'
					src='https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefits.ac9fe90b.jpg&w=1920&q=75'
					alt=''
				/>
			</div>
			<p className='title-desc'>
				The research show that people with animals usually are more healthy and
				happy of they do not have, also we know the wonderful that is come back
				to home of a busy day and hear the satisfaction purr of a lovely cat. Is
				for that, we do not have any doubts that the cats are good pets.
			</p>
			{benefitList.map((list) => (
				<div className='option-list' key={list.id}>
					<span class='material-icons'>pets</span>
					<p className='text'>{list.value}</p>
				</div>
			))}
		</div>
	);
}

export default BenefitPage;
