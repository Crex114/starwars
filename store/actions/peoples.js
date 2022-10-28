import axios from 'axios'
import { setIsFetching, setPeoples } from "../reducers/peoplesReducer";

export const getPeoples = (searchQuery = "", currentPage, perPage) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://swapi.dev/api/people/?search=${searchQuery}&page=${currentPage}&per_page=${perPage}`)
        dispatch(setPeoples(response.data))
    }
}