import style from './Button.module.css';

export const Button = ({ text, padding, width }) => {
	return (
		<button
			type="button"
			className={style.button}
			style={{ padding: `${padding} 0`, maxWidth: width }}
		>
			{text}
		</button>
	);
};
