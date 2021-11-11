import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './style.scss';
InputField.propTypes = {
	handleChange: PropTypes.func,
	placeholder: PropTypes.string,
};

function InputField({ placeholder, handlechange, handleclick }) {
	const [isClick, setIsClick] = useState(false);
	const handleChange = (value) => {
		const name = value.target.value;
		handlechange && handlechange(name);
	};

	useEffect(() => {
		handleclick && handleclick(isClick);
	}, [isClick, handleclick]);

	return (
		<div>
			<input
				onClick={() => setIsClick(!isClick)}
				className='input-field'
				onChange={handleChange}
				type='text'
				placeholder={placeholder}
			/>
		</div>
	);
}

export default InputField;
