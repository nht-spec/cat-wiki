import React from 'react';
import './style.scss';

function DetailBreed({ valueInfo }) {
	const arr = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<div className='detail-breed-info'>
			<>
				<h2 className='text-name'>{valueInfo.name}</h2>
				<p className='text-desc'>{valueInfo.description}</p>
				<h3 className='text'>
					Temperament: <p className='temper-option'>{valueInfo.temperament}</p>
				</h3>
				<h3 className='text'>
					Origin: <p className='temper-option'>{valueInfo.origin}</p>
				</h3>
				<h3 className='text'>
					Life Span: <p className='temper-option'>{valueInfo.life_span}</p>
				</h3>
			</>

			<div className='cross-bar-control'>
				<div className='title-name-bar-list'>
					<p className='name-bar'>Adaptability:</p>
					<p className='name-bar'>Affection level:</p>
					<p className='name-bar'>Child Friendly:</p>
					<p className='name-bar'>Grooming:</p>
					<p className='name-bar'>Intelligence:</p>
					<p className='name-bar'>Health issues:</p>
					<p className='name-bar'>Social needs:</p>
					<p className='name-bar'>Stranger friendly:</p>
				</div>

				<div className='crossbar-list'>
					{arr.map((_value, idx) => (
						<div key={idx} className='crossbar'>
							<div>
								{_value <= valueInfo.adaptability ? (
									<div className='bar checked'></div>
								) : (
									<div className='bar '></div>
								)}
							</div>

							<div>
								{_value <= valueInfo.affection_level ? (
									<div className='bar checked'></div>
								) : (
									<div className='bar '></div>
								)}
							</div>

							<div>
								{_value <= valueInfo.child_friendly ? (
									<div className='bar checked'></div>
								) : (
									<div className='bar '></div>
								)}
							</div>

							<div>
								{_value <= valueInfo.grooming ? (
									<div className='bar checked'></div>
								) : (
									<div className='bar '></div>
								)}
							</div>

							<div>
								{_value <= valueInfo.intelligence ? (
									<div className='bar checked'></div>
								) : (
									<div className='bar '></div>
								)}
							</div>

							<div>
								{_value <= valueInfo.health_issues ? (
									<div className='bar checked'></div>
								) : (
									<div className='bar '></div>
								)}
							</div>

							<div>
								{_value <= valueInfo.social_needs ? (
									<div className='bar checked'></div>
								) : (
									<div className='bar '></div>
								)}
							</div>

							<div>
								{_value <= valueInfo.stranger_friendly ? (
									<div className='bar checked'></div>
								) : (
									<div className='bar '></div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default DetailBreed;
