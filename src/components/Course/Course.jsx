import React from 'react';
import './Course.scss';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const Course = ({ header, description, authors, time }) => {


	return (
		<li className="course line">
			<div className="course__left line">
				<h2 className="course__header">
					<a href="#">{header}</a>
				</h2>
				<p className="course__description">{description}</p>
				<Link to="/edit_course">
					<Button style={{ marginRight: '1.5rem' }} text="Редактировать" />
				</Link>
				<Button text="Удалить курс" />
			</div>
			<div className="course__right line">
				<ul className="course__list">
					<p className="course__name">Список авторов:</p>
					<li className="course__author course__element">{authors[0]}</li>
					<li className="course__author course__element">{authors[1]}...</li>
				</ul>
				<div className="course__time">
					<p className="course__name">Длительность:</p>
					<p className="course__number course__element">{time}</p>
				</div>
			</div>
		</li>
	)
}

export default Course;