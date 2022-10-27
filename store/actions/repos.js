import axios from 'axios'
import { setIsFetching, setRepos } from "../reducers/reposReducer";

export const getRepos = (searchQuery = "", currentPage, perPage) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://swapi.dev/api/people/?search=${searchQuery}&page=${currentPage}&per_page=${perPage}`)
        dispatch(setRepos(response.data))
    }
}