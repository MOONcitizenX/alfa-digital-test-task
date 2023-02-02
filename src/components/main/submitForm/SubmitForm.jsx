import { Form } from '../../form/Form';
import style from './SubmitForm.module.css';

export const SubmitForm = () => {
	return (
		<div className={style.formWrapper}>
			<div className={style.formContainer}>
				<h3 className={style.blockTitle}>Не нашли то, что искали?</h3>
				<p className={style.blockSubTitle}>
					Заполните форму и мы перезвоним вам в течение 30 минут!
				</p>
				<Form btnText="Отправить" question={true} />
			</div>
		</div>
	);
};
