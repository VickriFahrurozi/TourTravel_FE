/** @format */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';
import '../components/navbar.css';
import '../pages/Auth/auth.css';
import '../pages/LandingPage/landingpage.css';
import '../pages/UserPackage/Package.css';
import '../pages/Order/Order.css';
import './History/History.css';
import { store, persistor } from '../redux/store';
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);

	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Head>
						<link rel='preconnect' href='https://fonts.googleapis.com' />
						<link
							rel='preconnect'
							href='https://fonts.gstatic.com'
							crossOrigin
						/>
						<link
							href='https://fonts.googleapis.com/css2?family=Rubik&display=swap'
							rel='stylesheet'
						/>
						<script
							src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
							integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
							crossorigin='anonymous'
						></script>
						<script
							src='https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js'
							integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
							crossorigin='anonymous'
						></script>
						<script
							src='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js'
							integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
							crossorigin='anonymous'
						></script>
					</Head>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	);
}

export default MyApp;
