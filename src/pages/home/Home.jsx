import { RiGraduationCapLine } from 'react-icons/ri';
import containerStyles from '../../styles/common/container.module.css';
import iconStyles from '../../styles/common/icons.module.css';
const Home = () => {
	return (
		<div className={containerStyles.containerXL}>
			<RiGraduationCapLine className={iconStyles.cap} />
			<h1>Welcome to Study & Test</h1>
		</div>
	);
};

export default Home;
