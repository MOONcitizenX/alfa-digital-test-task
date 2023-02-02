import style from './Slide.module.css';
import topas from '../../../assets/images/topas.png';

export const Slide = ({ slide }) => {
	return (
		<div className={style.slideContainer}>
			<div className={style.topContainer}>
				<img src={topas} alt={slide.title} />
				<div className={style.descr}>
					<h3 className={style.descrTitle}>{slide.title}</h3>
					<p className={style.descrLimit}>{slide.limit}</p>
					<p className={style.descrOldPrice}>{slide.oldPrice}</p>
					<p className={style.descrNewPrice}>{slide.newPrice}</p>
					<p className={style.descrCleaning}>
						Очистка: <span>{slide.cleaning}</span>
					</p>
					<p className={style.descrCleaning}>
						Залповый сброс: <span>{slide.dump}</span>
					</p>
				</div>
			</div>
			<div className={style.botContainer}>
				<button type="button" className={style.whiteBtn}>
					Подробнее
				</button>
				<button type="button" className={style.greenBtn}>
					Заказать
				</button>
			</div>
		</div>
	);
};
