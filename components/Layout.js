import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {

	const router = useRouter()

	return (
		<>
			{router.pathname !== '/404' && <Header />}
			{children}
		</>
	)

};

export default Layout;
