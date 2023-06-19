import React from 'react';
import './Button.scss';

const Button = ({ text, style, onClick, type = "button" }) => {

	return (
		<button type={type} className="button" style={style} onClick={onClick} >{text}</button>
	)
}

export default Button; 