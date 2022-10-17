import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from 'next/link'
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss";
import Image from "next/image";

import img from '../images/starofdeath.png'

const Error = () => {
	const router = useRouter();

	// useEffect(() => {
	//   setTimeout(() => {
	//     router.push('/');
	//   }, 3000);
	// }, [router]);
	useEffect(() => {
		const q = document.querySelector('header')
		q.style.display = 'none'		
	})

	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Error</title>
			</Head>
			<div className={styles.content}>404
				{/* <Heading text="404"/> */}
				{/* <Heading tag="h2" text="Something is going wrong..." /> */}
				

			</div><div className={styles.image} >
					<Image src={img} width={690}
						height={623} alt='404' />
				</div>
			<Link href={'/'}>
				<button className={styles.return}>
					Return
				</button>
			</Link>

		</div>
	)
};

export default Error;
