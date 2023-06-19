import './Login.scss';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<main className="login">
			<div className="login__content cover line">
				<form action="#" className="login__form line" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="login__header">Вход в систему</h1>
					<Input placeholder="Логин" style={{ marginBottom: '1.5rem', width: '100%' }} name="login" register={register} />
					<Input placeholder="Пароль" style={{ marginBottom: '1.5rem', width: '100%' }} type="password" register={register} name="password" />
					<Button text="Вход" type="submit" style={{ marginBottom: '1.5rem' }} />
					<Link to="/password_recovery" className="login__link">Забыли пароль?</Link>
					<Link to="/registration" className="login__link">Зарегистрироваться</Link>
					<a href="#"></a>
					<a href="#"></a>

				</form>
			</div>
		</main>
	)
}

export default Login;