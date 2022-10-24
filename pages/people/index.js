import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import Heading from "../../components/Heading";
import AboutCharacter from "../../components/AboutCharacter";
import classNames from 'classnames';
//import CharactersWrapper from "../../components/CharactersWrapper";
import styles from '../../styles/Characters.module.scss'

export const getServerSideProps = async () => {
	const response = await fetch('https://swapi.dev/api/people/');
	const data = await response.json();

	return {
		props: {
			peoples: data.results
		}
	}
};

const People = ({ peoples }) => {

	const cardboxTages = (gender) => {
		switch (gender) {
			case 'male':
				return <div className={classNames(styles.tags, styles.male)}>{gender}</div>
			case 'female':
				return <div className={classNames(styles.tags, styles.female)}>{gender}</div>
			case 'hermaphrodite':
				return <div className={classNames(styles.tags, styles.hermaphrodite)}>{gender}</div>
			default:
				null
		}
	}

	return (
		<>
			<Head>
				<title>Peoples</title>
			</Head>
			<Heading tag='h1' size={peoples.length} text="Peoples for you to choose your favorite" />
			<div className={styles.wrapper} >
				{peoples.map((i) => (
					<Link href={`/people/${i.url.split('people/')[1]}`} key={i.name}>
						<div className={styles.card}>
							<div>{i.name}</div>
							<div>{i.height}</div>
							<div>{i.mass}</div>
							<div className={styles.cardboxTages}>
								{cardboxTages(i.gender)}
								{(i.birth_year !== 'unknown') ? <div className={classNames(styles.tags, styles.birth)}>{i.birth_year}</div> : null}
							</div>
						</div>
					</Link>

				))}
				{/* <AboutCharacter show={info} onHide={() => setInfo(false)} data={char} /> */}
			</div>

		</>
	);
};

export default People;
