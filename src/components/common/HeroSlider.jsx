import { useState } from 'react';
import style from './HeroSlider.module.css';

import img1 from '../../assets/images/slider/img1.jpg';
import img2 from '../../assets/images/slider/img2.jpg';
import img3 from '../../assets/images/slider/img3.jpg';
import img4 from '../../assets/images/slider/img4.jpg';
import zoom from '../../assets/icons/zoom.svg';

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

export const HeroSlider = () => {
	const [activeSlide, setActiveSlide] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={style.sliderContainer}>
			<div className={style.thumbContainer}>
				{[...images].map((image, index) => (
					<img
						key={index}
						src={image}
						alt="Топас-С 4"
						className={`${style.thumbItem} ${
							activeSlide === index ? style.active : ''
						}`}
						onClick={() => setActiveSlide(index)}
					/>
				))}
			</div>
			<div className={style.imgContainer}>
				<img src={images[activeSlide]} alt="Топас-С 4" />
				<button
					type="button"
					className={style.imgZoom}
					onClick={() => setIsModalOpen(true)}
				>
					<img src={zoom} alt="Zoom in" />
				</button>
			</div>
			{isModalOpen && (
				<>
					<div
						className={style.modalWrapper}
						onClick={() => setIsModalOpen(false)}
					>
						<img
							src={images[activeSlide]}
							alt="Топас-С 4"
							className={style.modalImg}
							onClick={(e) => e.stopPropagation()}
						/>
						<button
							type="button"
							className={style.cross}
							onClick={() => setIsModalOpen(false)}
						>
							<span className={style.line1}></span>
							<span className={style.line2}></span>
						</button>
					</div>
				</>
			)}
		</div>
	);
};
