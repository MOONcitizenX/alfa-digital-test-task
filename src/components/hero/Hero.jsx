import { HeroSlider } from '../common/HeroSlider';
import { Form } from '../form/Form';
import style from './Hero.module.css';

const infoData = [
	{
		title: 'Количество пользователей:',
		value: '4 человека'
	},
	{
		title: 'Производительность:',
		value: '0.8 м3/сут'
	},
	{
		title: 'Объем залпового сброса:',
		value: '175 л.'
	},
	{
		title: 'Глубина подводящей трубы:',
		value: '40-80 см'
	},
	{
		title: 'Потребляемая электроэнергия:',
		value: '1500 Вт/сут.'
	}
];

export const Hero = () => {
	return (
		<>
			<h2 className={style.mainTitle}>Топас-С 4</h2>
			<div className={style.heroContainer}>
				<div className={style.topContainer}>
					<HeroSlider />
					<div className={style.info}>
						<ul className={style.infoList}>
							{infoData.map((data) => (
								<li key={data.title} className={style.infoItem}>
									<p>{data.title}</p>
									<span>{data.value}</span>
								</li>
							))}
						</ul>
						<button type="button" className={style.infoPriceBtn}>
							Цена:<span>78 030 ₽</span>
						</button>
					</div>
				</div>
				<div className={style.botContainer}>
					<div className={style.formContainer}>
						<h3 className={style.blockTitle}>Обсудим детали?</h3>
						<Form btnText="Хочу обсудить детали" wide={true} />
					</div>
					<div className={style.descr}>
						<h3 className={style.blockTitle}>Описание модели</h3>
						<p className={style.descrText}>
							Индивидуальная система биологической очистки Топас-С
							4, как и другие УОСВ из данного модельного ряда,
							очищают стоки до 98% без вреда для экологии. Все
							модификации септика ТОПАС-С 4 очищают до 0.8 м3
							сточных вод в сутки и имеют максимальный залповый
							сброс в районе 175 литров. Уже отработанную воду
							можно накапливать в отдельном резервуаре и в
							дальнейшем использовать для хозяйственных нужд или
							производить сброс очищенной воды в ливневую канаву
							(для моделей Пр со встороенным насосом).
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
