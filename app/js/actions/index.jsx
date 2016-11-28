import * as API from 'api/index'

export function getProductions(){
    return dispatch => {
        dispatch({
            type: "FETCH_PRODUCTIONS",
            payload: API.getProductions()
        })
    }
}

export function getCompanies(){
    return dispatch => {
        dispatch({
            type: "FETCH_COMPANIES",
            payload: API.getCompanies()
        })
    }
}