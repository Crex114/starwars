import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import useDebounce from '../../utils/use-debounce.js';
import Head from "next/head";
import Image from 'next/image'
import { getPeoples } from "../../store/actions/peoples";
import { setCurrentPage } from '../../store/reducers/peoplesReducer'
import { createPages } from "../../utils/pagesCreator";
import styles from '../../styles/Peoples.module.scss'
import Peoples from "../../components/Peoples";
import loader from '../../images/loader.png'
import ModalPeoples from '../../components/ModalPeoples.js';

const People = () => {

	const dispatch = useDispatch()
	const peoples = useSelector(state => state.peoples.items)
	const isFetching = useSelector(state => state.peoples.isFetching)
	const currentPage = useSelector(state => state.peoples.currentPage)
	const totalCount = useSelector(state => state.peoples.totalCount)
	const perPage = useSelector(state => state.peoples.perPage)
	const [searchValue, setSearchValue] = useState("")
	const pagesCount = Math.ceil(totalCount / perPage)
	const pages = []
	const debouncedSearch = useDebounce(searchValue, 500)
	const [modalActive, setModalActive] = useState(false)
	const [item, setItem] = useState('')
	createPages(pages, pagesCount, currentPage)

	useEffect(() => {
		dispatch(getPeoples(searchValue, currentPage, perPage))
	}, [currentPage])

	useEffect(() => {
		searchHandler(debouncedSearch)
	}, [debouncedSearch])

	function searchHandler() {
		dispatch(setCurrentPage(1))
		dispatch(getPeoples(searchValue, currentPage, perPage))
	}

	const modal = (data) => {
		setModalActive(true)
		setItem(data)
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
					type="text" placeholder="find..." />
			</div>
			<div className={styles.maincontent}>
				{
					isFetching === false
						?
						<div className={styles.wrapper}>
							{peoples.map((data, index) =>
								<div className={styles.card}
									key={index}
									onClick={() => modal(data)}>
									<Peoples item={data} />
								</div>
							)}
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
					onClick={() => dispatch(setCurrentPage(page))}></span>)}
			</div>

			<ModalPeoples active={modalActive} setActive={setModalActive} item={item} />
		</>
	);
};

export default People;