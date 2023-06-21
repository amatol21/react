import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import fullCoursesListReducer from './FullCoursesListSlice/FullCoursesListSlice.js';
import getCoursesListWatcher from '../sagas/coursesListSaga';

const saga = createSagaMiddleware();


export const store = configureStore({
	reducer: {
		fullCoursesList: fullCoursesListReducer
	},
	middleware: [saga]
})

saga.run(getCoursesListWatcher);