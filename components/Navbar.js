import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const navigation = [
	{ id: 1, title: 'Home', path: '/' },
	{ id: 2, title: 'Characters', path: '/characters' },
];

const Navbar = () => {
	const { pathname } = useRouter();

	return (
		<nav className={styles.nav}>
			<Image src="/logo.png" width={150} height={90} alt="logo" />
			<div className={styles.links}>
				{navigation.map(({ id, title, path }) => (
					<Link key={id} href={path}>
						<a className={pathname === path ? styles.active : null}>{title}</a>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
