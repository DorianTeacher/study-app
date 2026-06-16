import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Menu from '../components/menu/Menu';

const MainLayout = () => {
	return (
		<>
			<Header>
				<Menu />
			</Header>

			<main>
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
