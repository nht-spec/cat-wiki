import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import InputField from '../../../../components/formControl/InputField/InputField';
import useCatBreed from '../../hooks/useCatBreed';
import './style.scss';
Search.propTypes = {};

function Search({ valueOfBreed }) {
	const [placeholder, setPlaceHolder] = useState('Enter your breed');
	const [isForcus, setIsForcus] = useState(false);
	const [valueOfInput, setValueOfInput] = useState('');
	const [newListOfSort, setNewListOfSort] = useState([]);
	const history = useHistory();
	const { breed } = useCatBreed();

	const handlechange = (value) => {
		setValueOfInput(value);
		value && setIsForcus(true);
		!value && setIsForcus(false);
	};

	const hanleClick = (id, imageId) => {
		history.push(`/cat/${id}/${imageId}`);
	};

	useEffect(() => {
		let sortValue = [];
		breed.data &&
			breed.data.forEach((value) => {
				const valueinputLow = valueOfInput.toLowerCase();
				const nameLow = value.name.trim().toLowerCase();

				if (nameLow.indexOf(valueinputLow) > -1) {
					sortValue.push(value);
				}
			});
		setNewListOfSort(sortValue);
	}, [valueOfInput, breed]);

	useEffect(() => {
		window.innerWidth <= 768 && setPlaceHolder('Search');
	}, []);

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
					newListOfSort.map((list) => (
						<ul
							onClick={() => hanleClick(list.id, list.reference_image_id)}
							className='option-name'
							key={list.id}
						>
							<li className='name-text'>{list.name}</li>
						</ul>
					))}
				{valueOfInput && newListOfSort.length === 0 && (
					<p className='name-text-notfault'>No results found!!</p>
				)}
			</div>
		</div>
	);
}

export default Search;
