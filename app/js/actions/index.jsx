import thunk from 'redux-thunk'

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

export function sendLoginCredentials(data) {
    return dispatch => {
        dispatch({
            type: "FETCH_SESSION",
            payload: API.postSession(data)
        }).then((response) => {
            console.log("RESPONSE!")
            console.log(response)
        })
    }
}

export function loginPasswordChanged(value) {
    return {
        type: "LOGIN_PASSWORD_CHANGED",
        value
    }
}

export function loginEmailChanged(value) {
    return {
        type: "LOGIN_EMAIL_CHANGED",
        value
    }
}