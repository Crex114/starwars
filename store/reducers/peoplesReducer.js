const SET_PEOPLES = "SET_PEOPLES"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
    items: [],
    isFetching: true,
    currentPage:1,
    perPage:10,
    totalCount:0
}


export default function peoplesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PEOPLES:
            return {
                ...state,
                items: action.payload.results,
                totalCount: action.payload.count,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export const setPeoples = (peoples) => ({type:SET_PEOPLES, payload:peoples})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page})