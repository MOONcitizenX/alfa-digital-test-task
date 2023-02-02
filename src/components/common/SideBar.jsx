import style from './SideBar.module.css';
import calc from '../../assets/icons/calc.svg';
import binocular from '../../assets/icons/binocular.svg';
import cirkul from '../../assets/icons/cirkul.svg';
import builder from '../../assets/icons/builder.svg';

const icons = [calc, binocular, cirkul, builder];

export const SideBar = () => {
	return (
		<div className={style.sideBar}>
			{icons.map((icon, ind) => (
				<button type="button" className={style.sideBarItem} key={ind}>
					<img src={icon} alt={icon} className={style.sideBarIcon} />
				</button>
			))}
		</div>
	);
};
