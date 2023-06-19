import { configureStore } from '@reduxjs/toolkit';
import fullCoursesListReducer from './fullCoursesListSlice/fullCoursesListSlice.js';

export const store = configureStore({
	reducer: {
		fullCoursesList: fullCoursesListReducer
	}
})