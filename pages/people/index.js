import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Image from 'next/image'
import { getRepos } from "../../store/actions/repos";
import { setCurrentPage } from '../../store/reducers/reposReducer'
import { createPages } from "../../utils/pagesCreator";
import styles from '../../styles/Peoples.module.scss'
import Peoples from "../../components/Peoples";
import loader from '../../images/loader.png'

const People = () => {

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
			<h1 className={styles.title}>{totalCount} Peoples for you to choose your favorite</h1>
			<div className={styles.search}>
				<input value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					onKeyPress={searchHandler}
					type="text" placeholder="find..." />
			</div>
			<div className={styles.maincontent}>
				{
					isFetching === false
						?
						<div className={styles.wrapper}>
							{repos.map((repo, index) => <Peoples repo={repo} key={index} />)}
						</div>
						:
						<div className={styles.loader}>
							<Image src={loader} width={100} height={100} alt="logo" />
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