import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import AddCourse from './components/AddCourse/AddCourse';
import EditCourse from './components/EditCourse/EditCourse';
import UploadCourse from './components/UploadCourse/UploadCourse';
import Login from './components/Login/Login';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import Registration from './components/Registration/Registration';
import './App.scss';

function App() {

	return (
		<Routes>
			<Route path="/" element={< Layout />} >
				<Route index element={< Home />} />
				<Route path="add_course" element={< AddCourse />} />
				<Route path="upload_course" element={< UploadCourse />} />
				<Route path="edit_course" element={< EditCourse />} />
				<Route path="login" element={< Login />} />
				<Route path="password_recovery" element={< PasswordRecovery />} />
				<Route path="registration" element={< Registration />} />
			</Route>


		</Routes>
	)
}

export default App;
