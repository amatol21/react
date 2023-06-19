import './CourseAuthor.scss';
import Button from '../../common/Button/Button';

const CourseAuthor = ({ name, dispatch }) => {

	return (
		<li className="add__courseAuthorsItem line">
			<span className="add__courseAuthorName">{name}</span>
			<Button text="Удалить" style={{ paddingRight: '3rem', paddingLeft: '3rem', margin: '0 1.5rem' }} onClick={() => dispatch({ type: 'courseAuthorReduce', payload: name })} />
		</li>
	)
}

export default CourseAuthor;