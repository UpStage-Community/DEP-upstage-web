import thunk from 'redux-thunk'
import axios from 'axios'
// import promise from 'redux-promise-middleware'

export function getProductions(){
    return dispatch => {
        dispatch({
            type: "FETCH_PRODUCTIONS",
            payload: axios.get("http://localhost:3000/productions")
        })
    }
}

export function getCompanies(){
    return dispatch => {
        dispatch({
            type: "FETCH_COMPANIES",
            payload: axios.get("http://localhost:3000/companies")
        })
    }
}