import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Layout = () => {

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout;