import Head from "next/head";
import Link from "next/link";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";

const coverText = [
  { id: 1, title: 'Find all your favorite character', tag: 'h1' },
  { id: 2, title: 'You can find out all the information about your favorite characters', tag: 'h2' }
]

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <div className={styles.coverText}>
      {coverText.map(({ id, title, tag }) => (
        <Heading key={id} text={title} tag={tag}/>
      ))}
      <Link href={'/'}>
				<button className={styles.seemore}>
					See More...
				</button>
			</Link>
    </div>
    
  </div>
);

export default Home;
