import Logo from '../logo/Logo';
import style from './header.module.css';

const Header = ({ children }) => {
	return (
		<header className={style.header}>
			<div className={style['header-content']}>
				<div>
					<Logo />
				</div>
				{children}
			</div>
		</header>
	);
};

export default Header;
