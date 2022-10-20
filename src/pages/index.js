/** @format */
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage/LandingPage';
export default function Home(data) {
	return (
		<>
			<LandingPage data={data} />
		</>
	);
}

export async function getServerSideProps() {
	// const dataauth = useSelector((indexreducer) => indexreducer.auth);
	const res = await fetch(
		`http://localhost:7777/api/v1/package?limit=4&page=1&order_by=package_price&sort=ASC`
	);
	const data = await res.json();
	return { props: { data } };
}
