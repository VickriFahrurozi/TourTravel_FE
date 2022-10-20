/** @format */
import { Navbar, NavbarUser } from '../../components/navbar';
import Banner from './banner';
import Whyus from './whyus';
import Highlight from './highlight';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';

const LandingPage = (data) => {
	const datalogin = useSelector((state) => state.auth);
	return (
		<>
			{(datalogin.isLogin == true) & (datalogin.data.role == 'user') ? (
				<NavbarUser />
			) : (
				<Navbar />
			)}
			<div className='container-fluid'>
				<Banner />
				<Highlight data={data} />
				<Whyus />
				<Footer />
			</div>
		</>
	);
};

export default LandingPage;
