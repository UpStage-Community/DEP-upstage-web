import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'

import * as API from 'api/index'
import * as LocalStorage from 'helpers/index'
// import * as Navigation from 'actions/navigation'

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