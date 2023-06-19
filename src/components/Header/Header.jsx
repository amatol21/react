import React from 'react';
import './Header.scss';

const Header = () => {

	return (
		<header className="header">
			<div className="header__content cover line">
				<a className="header__logo">
					<img src="/img/header/logo.png" alt="logo" className="header__img" srcSet="/img/header/logo.svg" />
				</a>
				<nav className="header__nav line">
					<a href="#" className="header__name">Сергей</a>
					<a href="#" className="header__control">Выход</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;