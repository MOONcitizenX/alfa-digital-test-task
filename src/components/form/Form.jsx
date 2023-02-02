import { useState } from 'react';
import style from './Form.module.css';

export const Form = ({ btnText, question = null, wide = null }) => {
	const [name, setName] = useState('');
	const [tel, setTel] = useState('');

	const handleNameChange = ({ target }) => {
		setName(target.value);
	};

	const handleTelChange = ({ target }) => {
		setTel(target.value);
	};

	const handleSubmit = () => {};

	return (
		<form onSubmit={handleSubmit} className={style.form}>
			<input
				type="text"
				value={name}
				onChange={handleNameChange}
				placeholder="Ваше имя"
				required
				className={style.input}
				title="Это обязательное поле. Введите Ваше имя."
			/>
			<input
				type="tel"
				value={tel}
				onChange={handleTelChange}
				placeholder="Номер телефона"
				required
				className={style.input}
				title="Это обязательное поле. Введите Ваш номер телефона."
			/>
			{question && (
				<textarea
					placeholder="Ваш вопрос (необязательно)"
					className={style.textArea}
					maxLength={250}
				></textarea>
			)}
			<button
				type="submit"
				className={`${style.btn} ${wide ? style.wideBtn : ''}`}
			>
				{btnText}
			</button>
		</form>
	);
};
