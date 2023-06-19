import './Author.scss';
import Button from '../../common/Button/Button';

const Author = ({ name, dispatch, index }) => {


	return (
		<li className="add__authorsItem line">
			<span className="add__authorName">{name}</span>
			<Button text="Добавить" style={{ paddingRight: '3rem', paddingLeft: '4rem', margin: '0 1.5rem' }} onClick={() => dispatch({ type: 'addCourseAuthor', payload: name })} />
			<Button text="Удалить" style={{ paddingRight: '3rem', paddingLeft: '4rem', margin: '0 1.5rem' }} onClick={() => dispatch({ type: "authorsReduce", payload: index })} />
		</li>
	)
}

export default Author;