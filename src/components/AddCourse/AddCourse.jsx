import './AddCourse.scss';
import React, { useReducer, useRef, useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Author from '../Author/Author';
import CourseAuthor from '../CourseAuthor/CourseAuthor';

const AddCourse = () => {

	const initialState = {
		courseName: '',
		courseDescription: '',
		courseDuration: '',
		authors: [],
		courseAuthors: []
	}

	function reducer(state, { type, payload }) {
		switch (type) {
			case 'courseName':
				return { ...state, courseName: payload }
				break;
			case 'courseDescription':
				return { ...state, courseDescription: payload }
				break;
			case 'authors':
				return { ...state, authors: [...state.authors, payload] }
				break;
			case 'authorsReduce':
				let authors = [...state.authors];
				authors.splice(payload, 1);
				return { ...state, authors: [...authors] }
				break;
			case 'addCourseAuthor':
				let authors2 = [...state.authors];
				authors2.splice(authors2.indexOf(payload), 1);
				return { ...state, authors: [...authors2], courseAuthors: [...state.courseAuthors, payload] }
				break;
			case 'courseAuthorReduce':
				let courseAuthors = [...state.courseAuthors];
				courseAuthors.splice(courseAuthors.indexOf(payload), 1);
				return { ...state, authors: [...state.authors, payload], courseAuthors: [...courseAuthors] }
				break;
			case 'courseDuration':
				return { ...state, courseDuration: payload }
				break;
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);
	const nameRef = React.createRef();
	const descriptionRef = useRef();
	const authorNameRef = React.createRef();
	const hoursRef = React.createRef();
	const minutesRef = React.createRef();
	const durationRef = React.createRef();
	const [timeError, setErrorTime] = useState(false);
	const [authorNameError, setIsAuthor] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
	const [courseNameError, setCourseNameError] = useState(false);
	const [courseError, setCourseError] = useState(false);

	const durationCalc = () => {
		let hours = +hoursRef.current.value;
		let minutes = +minutesRef.current.value;
		if (hours && minutes) {
			setErrorTime(false);
			if (minutes < 10) {
				minutes = `0${minutes}`;
			} else if (minutes >= 60) {
				let minutes2 = minutes % 60;
				minutes -= minutes2;
				hours += (minutes / 60);
				if (minutes2 < 10) {
					minutes = `0${minutes2}`;
				} else {
					minutes = `${minutes2}`;
				}
			}

			if (hours < 10) {
				hours = `0${hours}`;
			}

			dispatch({ type: 'courseDuration', payload: `${hours} ч. ${minutes} м.` })
		} else {
			setErrorTime(true);
		}
	}

	const addAuthor = () => {

	}

	let func = () => {
		console.log(state);
	}

	return (
		<main className="add">
			<form className="add__content cover line">
				<Button text="Добавить курс" style={{ fontSize: '2.4rem', marginRight: '2rem' }} onClick={func} />
				{courseError && <p className="add__error2">Проверьте введённые данные</p>}
				<div className="add__container">
					<Input placeholder="Название курса" style={{ marginRight: '1.5rem', width: '40rem', marginTop: '2rem' }} ref={nameRef} />
					<Button text="Ввести название" onClick={() => dispatch({ type: 'courseName', payload: nameRef.current.value })} />
					{courseNameError && <p className="add__error">Проверьте введённое название курса</p>}
				</div>
				<textarea rows="10" className="add__description" placeholder="Описание курса" ref={descriptionRef}></textarea>
				{descriptionError && <p className="add__error">Проверьте введённое описание курса</p>}
				<Button text="Ввести описание" onClick={() => dispatch({ type: 'courseDescription', payload: descriptionRef.current.value })} style={{ marginTop: '2rem' }} />

				<div className="add__service line">
					<div className="add__serviceLeft">
						<div className="add__inputAuthorName">
							<Input placeholder="Имя автора" style={{ width: '100%', marginRight: 'auto' }} ref={authorNameRef} />
							{authorNameError && <p className="add__error">Проверьте введённое имя</p>}
							<Button text="Добавить автора" onClick={() => dispatch({ type: 'authors', payload: authorNameRef.current.value })} style={{ marginTop: '2rem' }} />
						</div>
						<div className="add__courseTime">
							<Input placeholder="Количество часов" style={{ width: '100%', marginBottom: '2rem' }} ref={hoursRef} />
							<Input placeholder="Количество минут" style={{ width: '100%' }} ref={minutesRef} />
							{timeError && <p className="add__error">Проверьте введённое время</p>}

							<Button text="Ввести время" style={{ marginBottom: '2rem', marginTop: '2rem' }} onClick={durationCalc} />

						</div>
					</div>
					<div className="add__serviceRight">
						<ul className="add__authors">
							<h2 className="add__surnamesHeader">Список авторов</h2>
							{state.authors.map((elem, index) => <Author key={`${elem}+${index}`} name={elem} index={index} dispatch={dispatch} />)}

						</ul>
						<ul className="add__courseAuthors">
							<h2 className="add__surnamesHeader">Список авторов курса</h2>
							{state.courseAuthors.map((elem, index) => <CourseAuthor key={`${elem}+${index}`} name={elem} index={index} dispatch={dispatch} />)}

						</ul>
					</div>
				</div>
			</form>

		</main >
	)
};

export default AddCourse;