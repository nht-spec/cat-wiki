import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './style.scss';
InputField.propTypes = {
	handleChange: PropTypes.func,
	placeholder: PropTypes.string,
};

function InputField({ placeholder, handlechange, handleclick, IsForcus }) {
	const [isClick, setIsClick] = useState(false);
	const [isForcus, setIsForcus] = useState(false);
	const handleChange = (value) => {
		const name = value.target.value;
		handlechange && handlechange(name);
	};

	useEffect(() => {
		handleclick && handleclick(isClick);
	}, [isClick, handleclick]);

	useEffect(() => {
		IsForcus && IsForcus(isForcus);
	}, [IsForcus, isForcus]);

	return (
		<input
			onFocus={() => setIsForcus(true)}
			onClick={() => setIsClick(!isClick)}
			className='input-field'
			onChange={handleChange}
			type='text'
			placeholder={placeholder}
		/>
	);
}

export default InputField;
