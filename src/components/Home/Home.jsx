import React, { useState } from 'react';
import './Home.scss';
import Course from '../Course/Course';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../store/FullCoursesListSlice/FullCoursesListSlice';

const Home = () => {

	const [courseName, changeCourseName] = useState('');
	const courses = useSelector(state => state.fullCoursesList.coursesList);
	const dispatch = useDispatch();

	const setCourseName = (event) => {
		changeCourseName(event.target.value);
	}

	function func() {
		dispatch(fetchCourses());
	}

	return (
		<main className="main">
			<div className="main__content cover line">
				<h1 className="main__header">Список курсов</h1>
				<form action="#" className="search line">
					<Input style={{ marginRight: '1rem', width: '35rem' }} placeholder="Название курса" value={courseName} onChange={setCourseName} />
					<Button text="Искать" style={{ marginRight: '2rem' }} />
					<Button text="Получить курсы" onClick={() => dispatch(fetchCourses())} style={{ marginRight: '2rem' }} />
				</form>

				<Link to="/add_course">
					<Button style={{ marginRight: '1.5rem' }} text="Добавить курс" />
				</Link>
				<Link to="/upload_course">
					<Button text="Загрузить" />
				</Link>

				<ul className="result">
					{courses.map((elem) => {
						const header = elem.header.toLowerCase();
						if (header.includes(courseName.toLowerCase())) {
							return (
								<Course key={elem.header} header={elem.header} description={elem.description} authors={elem.authors} time={elem.time} />
							)
						}

						if (!courseName) {
							return (
								<Course key={elem.header} header={elem.header} description={elem.description} authors={elem.authors} time={elem.time} />
							)
						}
					})}

				</ul>
			</div>
		</main>
	)
}

export default Home;

