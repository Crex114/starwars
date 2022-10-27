import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { getRepos } from "../../store/actions/repos";
import { setCurrentPage } from '../../store/reducers/reposReducer'
import { createPages } from "../../utils/pagesCreator";
import Heading from "../../components/Heading";
import styles from '../../styles/Peoples.module.scss'
import Peoples from "../../components/Peoples";

const People = ({ count }) => {

	const dispatch = useDispatch()
	const repos = useSelector(state => state.repos.items)
	const isFetching = useSelector(state => state.repos.isFetching)
	const currentPage = useSelector(state => state.repos.currentPage)
	const totalCount = useSelector(state => state.repos.totalCount)
	const perPage = useSelector(state => state.repos.perPage)
	const [searchValue, setSearchValue] = useState("")
	const pagesCount = Math.ceil(totalCount / perPage)
	const pages = []
	createPages(pages, pagesCount, currentPage)

	useEffect(() => {
		dispatch(getRepos(searchValue, currentPage, perPage))
	}, [currentPage])

	function searchHandler() {
		dispatch(setCurrentPage(1))
		dispatch(getRepos(searchValue, currentPage, perPage))
	}

	return (
		<>
			<Head>
				<title>Peoples</title>
			</Head>
			<Heading tag='h1' size={count} text="Peoples for you to choose your favorite" />
			<div className={styles.search}>
				<input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Input people name" />
				<button onClick={() => searchHandler()}>Search</button>
			</div>
			<div className={styles.wrapper}>
				{
					isFetching === false
						?
						repos.map((repo, index) => <Peoples repo={repo} key={index} />)
						:
						<div className="fetching">

						</div>
				}
			</div>

			<div className={styles.pages}>
				{pages.map((page, index) => <span
					key={index}
					className={currentPage == page ? styles.curpage : styles.page}
					onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
			</div>
		</>
	);
};

export default People;