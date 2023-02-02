import { NavDropdown } from '../header/NavDropdown';
import style from './Header.module.css';
import logo from '../../assets/images/logo.png';
import box from '../../assets/icons/box.svg';
import phone from '../../assets/icons/phone.svg';
import whatsApp from '../../assets/icons/whatsapp.svg';
import tg from '../../assets/icons/tg.svg';
import viber from '../../assets/icons/viber.svg';

const navItems = [
	{ title: 'Каталог домов', dropdown: true },
	{ title: 'Услуги', dropdown: true },
	{ title: 'О нас', dropdown: true },
	{ title: 'Контакты', dropdown: false },
	{ title: 'Блог', dropdown: true }
];

export const Header = () => {
	return (
		<>
			<div className={style.topContainer}>
				<a href="#">
					<img
						src={logo}
						alt="Alfa Repair Building"
						className={style.logo}
					/>
				</a>
				<div className={style.schedule}>
					<p className={style.scheduleText}>
						Пн-Сб: c 10:00 до 20:00
					</p>
					<p className={style.scheduleText}>Выходной: воскресенье</p>
				</div>
				<div className={style.orderContainer}>
					<div className={style.boxContainer}>
						<img src={box} alt="Box" className={style.box} />
					</div>
					<a href="#" className={style.orderText}>
						Заказать ЗD-макет дома
					</a>
				</div>
				<div className={style.cantactsContainer}>
					<div className={style.phoneContainer}>
						<img src={phone} alt="Phone" className={style.phone} />
					</div>
					<div className={style.contacts}>
						<p className={style.phoneNumber}>+7 (915) 168-55-50</p>
						<div className={style.socials}>
							<a href="https://www.whatsapp.com/" target="_blank">
								<img
									src={whatsApp}
									alt="Whats app"
									className={style.socialIcon}
								/>
							</a>
							<a
								href="https://web.telegram.org/z/"
								target="_blank"
							>
								<img
									src={tg}
									alt="Telegram"
									className={style.socialIcon}
								/>
							</a>
							<a href="https://www.viber.com/ru/" target="_blank">
								<img
									src={viber}
									alt="Viber"
									className={style.socialIcon}
								/>
							</a>
						</div>
					</div>
				</div>
				<button type="button" className={style.orderButton}>
					Заказать звонок
				</button>
			</div>
			<nav className={style.navContainer}>
				<ul className={style.navList}>
					{navItems.map((el) => (
						<NavDropdown
							key={el.title}
							text={el.title}
							dropdown={el.dropdown}
						/>
					))}
				</ul>
			</nav>
		</>
	);
};
