import Head from "next/head";
import Link from 'next/link'
import styles from "../styles/404.module.scss";
import Image from "next/image";
import img from '../images/starofdeath.png'

const Error = () => {

	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Error</title>
			</Head>
			<div className={styles.content}>404</div>
			<div className={styles.image} >
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
