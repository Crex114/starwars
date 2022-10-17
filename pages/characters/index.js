import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Heading from "../../components/Heading";
import AboutCharacter from "../../components/AboutCharacter";
import styles from '../../styles/Characters.module.scss'

export const getStaticProps = async () => {
	const response = await fetch('https://swapi.dev/api/people/');
	const data = await response.json();
	console.log(data.results.length)

	// if (!data) {
	//   return {
	//     notFound: true,
	//   }
	// }

	return {
		props: { characters: data.results },
	}
};

const Characters = ({ characters }) => {

	const [info, setInfo] = useState(false)



	return (
		<>
			<Head>
				<title>Characters</title>
			</Head>
			<Heading tag='h1' size={characters.length} text="Peoples for you to choose your favorite" />
			<div className={styles.wrapper} >
				{
					characters.map(({ name, height, mass, gender, birth_year }) => (
						<div className={styles.card} key={name} onClick={() => setInfo(true)}>
							<div>{name}</div>
							<div>{height}</div>
							<div>{mass}</div>
							{
								(gender !== 'n/a') ? <div>{gender}</div> : null
							}
							{
								(birth_year !== 'unknown') ? <div>{birth_year}</div> : null
							}
							
						</div>
					))
				}
			</div>

			<AboutCharacter show={info} onHide={() => setInfo(false)} />



			{/* <ul>
        {characters && characters.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/characters/${id}`}>{title}</Link>
            <div>name: {name}</div>
          </li>
        ))}
      </ul> */}
		</>
	);
};

export default Characters;
