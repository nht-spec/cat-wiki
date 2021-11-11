import React, { useEffect, useState } from 'react';
import InputField from '../../../../components/formControl/InputField/InputField';
import useCatBreed from '../../hooks/useCatBreed';
import './style.scss';
Search.propTypes = {};

function Search({ valueOfBreed }) {
	const [placeholder, setPlaceHolder] = useState('Enter your breed');
	const [isForcus, setIsForcus] = useState(false);
	const { breed } = useCatBreed();
	const handlechange = (value) => {
		value && setIsForcus(true);
		!value && setIsForcus(false);
	};

	useEffect(() => {
		valueOfBreed && valueOfBreed(breed);
	}, [breed, valueOfBreed]);

	return (
		<div className='search-control'>
			<div className='input-field-search'>
				<InputField placeholder={placeholder} handlechange={handlechange} />
				<span className='material-icons'>search</span>
			</div>

			<div className='option-name-list'>
				{isForcus &&
					breed.data?.map((list) => (
						<ul className='option-name' key={list.id}>
							<li className='name-text'>{list.name}</li>
						</ul>
					))}
			</div>
		</div>
	);
}

export default Search;
