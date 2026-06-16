import { IoHomeOutline } from 'react-icons/io5';
import { SlNote } from 'react-icons/sl';
import { TbBlocks } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import style from './menu.module.css';

const Menu = () => {
	return (
		<nav>
			<ul className={style.menu}>
				<Link to='/' className={style['menu-link']}>
					<li className={style['menu-item']}>
						<IoHomeOutline />
						Home
					</li>
				</Link>
				<Link to='/blocks' className={style['menu-link']}>
					<li className={style['menu-item']}>
						<TbBlocks />
						Blocks
					</li>
				</Link>
				<Link to='/test' className={style['menu-link']}>
					<li className={style['menu-item']}>
						<SlNote />
						Tests
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Menu;
