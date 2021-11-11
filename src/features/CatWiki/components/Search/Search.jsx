import React, { useState } from 'react';
import InputField from '../../../../components/formControl/InputField/InputField';
import useCatBreed from '../../hooks/useCatBreed';
import './style.scss';
Search.propTypes = {};

function Search(props) {
	const [placeholder, setPlaceHolder] = useState('Enter your breed');
	const [isForcus, setIsForcus] = useState(false);
	const { breed } = useCatBreed();
	const handlechange = (value) => {
		value && setIsForcus(true);
		!value && setIsForcus(false);
	};

	console.log(breed);
	return (
		<div className='search-control'>
			<div className='input-field-search'>
				<InputField placeholder={placeholder} handlechange={handlechange} />
				<span className='material-icons'>search</span>
			</div>

			<div className='option-name-list'>
				{isForcus &&
					breed.data?.map((list) => (
						<ul key={list.id}>
							<li>{list.name}</li>
						</ul>
					))}
			</div>
		</div>
	);
}

export default Search;
