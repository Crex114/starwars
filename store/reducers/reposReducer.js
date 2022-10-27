const SET_REPOS = "SET_REPOS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
    items: [],
    isFetching: true,
    currentPage:1, // текущая страница
    perPage:10, // отображать количество страниц по умолчанию
    totalCount:0 // все полученные данные от репозитория. у меня 82
}


export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_REPOS:
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

export const setRepos = (repos) => ({type:SET_REPOS, payload:repos})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page})