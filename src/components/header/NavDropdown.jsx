import style from './NavDropdown.module.css';
import triangle from '../../assets/icons/triangle.svg';

export const NavDropdown = ({ text, dropdown = null }) => {
	return (
		<li className={style.listItem}>
			{text}
			{dropdown && <img src={triangle} alt="triangle" />}
		</li>
	);
};
