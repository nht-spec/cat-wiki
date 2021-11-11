import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
InputField.propTypes = {
	handleChange: PropTypes.func,
	placeholder: PropTypes.string,
};

function InputField({ placeholder, handlechange }) {
	const handleChange = (value) => {
		const name = value.target.value;
		handlechange && handlechange(name);
	};

	return (
		<div>
			<input
				className='input-field'
				onChange={handleChange}
				type='text'
				placeholder={placeholder}
			/>
		</div>
	);
}

export default InputField;
