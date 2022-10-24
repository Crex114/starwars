import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import { Provider } from 'react-redux';
import { store } from '../store/index';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (

	<Provider store={store}>
		<Layout>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
			</Head>
			<main>
				<Component {...pageProps} />
			</main>
		</Layout>
	</Provider>

);

export default MyApp;
