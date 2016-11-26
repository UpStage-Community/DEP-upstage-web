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

export function sendLoginCredentials(data) {
    return dispatch => {
        dispatch({
            type: "FETCH_SESSION",
            payload: API.postSession(data)
        }).then((response) => {
            dispatch(login(response.action.payload.data))
        })
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch({
            type: "FETCH_DELETE_SESSION",
            payload: API.deleteSession()
        }).then((response) => {
            dispatch(logout())
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

function login(user) {
    LocalStorage.login(user)
    return {
        type: "USER_LOGGED_IN",
        user
    }
}

function logout() {
    LocalStorage.logout()
    browserHistory.push('/')
    return {
        type: "USER_LOGGED_OUT"
    }
}