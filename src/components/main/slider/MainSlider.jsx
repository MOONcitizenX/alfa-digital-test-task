import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './Slide';
import arrow from '../../../assets/icons/arrow.svg';
import style from './MainSlider.module.css';
import 'swiper/css';
import { useRef } from 'react';

export const slides = [
	{
		title: 'Топас-С 4',
		limit: 'До 4 человек',
		oldPrice: '86 700 ₽',
		newPrice: '78 030 ₽',
		cleaning: '0,8 м3/сут',
		dump: '175 л'
	},
	{
		title: 'Топас-С 4 Пр',
		limit: 'До 4 человек',
		oldPrice: '98 300 ₽',
		newPrice: '88 470 ₽',
		cleaning: '0,8 м3/сут',
		dump: '175 л'
	},
	{
		title: 'Топас-С 5',
		limit: 'До 5 человек',
		oldPrice: '99 500 ₽',
		newPrice: '89 550 ₽',
		cleaning: '1 м3/сут',
		dump: '220 л'
	}
];

export const MainSlider = () => {
	const swiperRef = useRef();

	return (
		<div className={style.swiperContainer}>
			<h2 className={style.sliderTitle}>Вам также могут понравиться</h2>
			<Swiper
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				navigation={true}
				className="mySwiper"
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={slide.title} style={{ maxWidth: 507 }}>
						<Slide slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
			<button
				type="button"
				className={style.sliderBtnLeft}
				onClick={() => swiperRef.current.slidePrev()}
			>
				<img src={arrow} alt="Arrow" className={style.arrowLeft} />
			</button>
			<button
				type="button"
				className={style.sliderBtnRight}
				onClick={() => swiperRef.current.slideNext()}
			>
				<img src={arrow} alt="Arrow" className={style.arrowRight} />
			</button>
		</div>
	);
};
