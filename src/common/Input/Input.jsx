import React from 'react';
import './Input.scss';

const Input = React.forwardRef(({ placeholder, style, value, onChange, type = 'text', name, register }, ref) => {

	if (register) {
		return (
			<input type={type} className="input" placeholder={placeholder} style={style} value={value} onChange={onChange} ref={ref} {...register(name)} />
		)
	} else {
		return (
			<input type={type} className="input" placeholder={placeholder} style={style} value={value} onChange={onChange} ref={ref} />
		)
	}


})

export default Input; 