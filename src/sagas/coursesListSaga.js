import { call, put, takeEvery } from 'redux-saga/effects';
import { getCoursesSuccess, getCourses, GET_COURSES } from '../store/FullCoursesListSlice/FullCoursesListSlice';

function* getCoursesListWorker() {
	const response = yield call(() => fetch('http://api.courseslibrary'));
	const courses = yield response.json();
	yield put(getCoursesSuccess(courses));
}

function* getCoursesListWatcher() {
	yield takeEvery(GET_COURSES, getCoursesListWorker);
}

export default getCoursesListWatcher;



