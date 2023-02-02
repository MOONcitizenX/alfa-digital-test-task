import logo from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logo-white.png';

import vk from '../../assets/icons/vk.svg';
import insta from '../../assets/icons/insta.svg';
import fb from '../../assets/icons/fb.svg';
import yt from '../../assets/icons/yt.svg';

import style from './Footer.module.css';

const footerNavigation = [
	{ text: 'Главная', route: '#' },
	{ text: 'Каталог', route: '#' },
	{ text: 'Услуги', route: '#' },
	{ text: 'Расчет стоимости', route: '#' },
	{ text: 'Консультация архитектора', route: '#' }
];
const footerContacts = [
	{ text: 'Экскурсия на объект', route: '#' },
	{ text: '3D-макет дома', route: '#' },
	{ text: 'О нас', route: '#' },
	{ text: 'Блог', route: '#' },
	{ text: 'Контакты', route: '#' }
];

const socials = [
	{
		img: vk,
		link: 'https://vk.com/'
	},
	{
		img: insta,
		link: 'https://www.instagram.com/'
	},
	{
		img: fb,
		link: 'https://ru-ru.facebook.com/'
	},
	{
		img: yt,
		link: 'https://youtube.com/'
	}
];

export const Footer = () => {
	return (
		<nav className={style.footerContainer}>
			<div className={style.logoContainer}>
				<a href="#">
					<img
						src={logo}
						alt="Alfa Repair Building"
						className={style.logo}
					/>
				</a>
				<button type="button" className={style.orderButton}>
					Заказать звонок
				</button>
			</div>
			<ul className={style.navigation}>
				{footerNavigation.map((item) => (
					<li key={item.text}>
						<a href={item.route} className={style.footerLink}>
							<span>{item.text}</span>
						</a>
					</li>
				))}
			</ul>
			<ul className={style.contacts}>
				{footerContacts.map((item) => (
					<li key={item.text}>
						<a href={item.route} className={style.footerLink}>
							<span>{item.text}</span>
						</a>
					</li>
				))}
			</ul>
			<div className={style.socials}>
				<p className={style.socialsText}>
					Делимся крутыми проектами в соц.сетях. Подписывайтесь!
				</p>
				<ul className={style.socialLinks}>
					{socials.map((social) => (
						<li className={style.socialLink}>
							<a href={social.link}>
								<img src={social.img} />
							</a>
						</li>
					))}
				</ul>
				<p className={style.socialsText}>
					Разработка и продвижение сайта:
				</p>
				<a href="#">
					<img
						src={logoWhite}
						alt="Alfa Digital"
						className={style.logoWhite}
					/>
				</a>
			</div>
		</nav>
	);
};
