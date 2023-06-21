import { createSlice, createAction } from '@reduxjs/toolkit';
/*
export const fetchCourses = createAsyncThunk(
	'fullCoursesList/fetchCourses',
	async function () {
		const response = await fetch('http://api.courseslibrary');
		const data = await response.json();
		return data;
	}
) */

export const fullCoursesListSlice = createSlice({
	name: 'fullCoursesList',
	initialState: {
		isLoading: false,
		coursesList: [
			{
				header: "Курс по javascript",
				description: "Далеко-далеко за словесными горами в стране гласных и 			согласных живут рыбные тексты. Буквоград, алфавит грамматики! Залетают они моей подпоясал безорфографичный над пунктуация собрал наш реторический, рекламных если единственное о но обеспечивает предупредила путь необходимыми...",
				authors: ['Сергей Иванов', 'Иван Сергеев'],
				time: "44 ч. 37 мин."
			},
			{
				header: "Python за 3 мес.",
				description: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Свой рот использовало, алфавит, свою возвращайся своих грустный коварных составитель живет грамматики переписывается...",
				authors: ['Анна Осадчая', 'Денис Петров'],
				time: "57 ч. 21 мин."
			},
			{
				header: "Курс по C++",
				description: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых семантика сих силуэт толку буквоград продолжил если наш...",
				authors: ['Иван Дронов', 'Денис Вышкин'],
				time: "49 ч. 11 мин."
			}
		],

		value: 1
	},
	reducers: {
		getCoursesSuccess: (state, action) => {
			state.coursesList = [...action.payload];
		}

	}
	/*extraReducers: {
		[fetchCourses.fulfilled]: (state, action) => {
			state.coursesList = [...action.payload];
		}
	}*/
});

export const GET_COURSES = 'courses/getCourses';
export const getCourses = createAction(GET_COURSES);

export const { getCoursesSuccess, getCoursesFetch } = fullCoursesListSlice.actions;

export default fullCoursesListSlice.reducer;