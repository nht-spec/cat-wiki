import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import InputField from '../../../../components/formControl/InputField/InputField';
import useCatBreed from '../../hooks/useCatBreed';
import './style.scss';
function SearchDialogMobile({ isForcus, isClose }) {
	const [open, setOpen] = React.useState(false);
	const [placeholder, setPlaceHolder] = useState('Enter your breed');
	const [isChange, setIsChange] = useState(false);
	const [valueOfInput, setValueOfInput] = useState('');
	const [newListOfSort, setNewListOfSort] = useState([]);
	const history = useHistory();
	const { breed } = useCatBreed();
	const handleClose = () => {
		setOpen(true);
	};
	const handlechange = (value) => {
		setValueOfInput(value);
		value && setIsChange(true);
		!value && setIsChange(false);
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

	const hanleClick = (id, imageId) => {
		history.push(`/cat/${id}/${imageId}`);
	};
	useEffect(() => {
		window.innerWidth <= 768 && setPlaceHolder('Search');
	}, []);

	useEffect(() => {
		isClose && isClose(open);
	}, [open, isClose]);
	return (
		<>
			<Dialog
				className='dialog-control'
				fullScreen
				open={isForcus}
				onClose={handleClose}
			>
				<Toolbar className='tool-bar-control'>
					<IconButton className='btn-close' onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</Toolbar>

				<List>
					<div className='search-control-mobile'>
						<div className='input-field-search-mobile'>
							<InputField
								handlechange={handlechange}
								placeholder={placeholder}
							/>
							<span className='material-icons'>search</span>
						</div>

						<div className='option-name-list-mobile'>
							{isChange &&
								newListOfSort.map((list) => (
									<div
										onClick={() => hanleClick(list.id, list.reference_image_id)}
										className='option-name'
										key={list.id}
									>
										<div className='name-text'>{list.name}</div>
									</div>
								))}
							{valueOfInput && newListOfSort.length === 0 && (
								<p className='name-text-notfault'>No results found!!</p>
							)}
						</div>
					</div>
				</List>
			</Dialog>
		</>
	);
}

export default SearchDialogMobile;
