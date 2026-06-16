import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/Mainlayout';
import Blocks from '../pages/blocks/Blocks';
import Home from '../pages/home/Home';
import Test from '../pages/test/Test';

const Router = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/blocks' element={<Blocks />} />
				<Route path='/test' element={<Test />} />
			</Route>
		</Routes>
	);
};

export default Router;
