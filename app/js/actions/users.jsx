import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'

import * as API from 'api/index'
import * as LocalStorage from 'helpers/index'

export function registerUser(data) {
    return dispatch => {
        dispatch({
            type: "FETCH_CREATE_USER",
            payload: API.createUser(data)
        }).then((response) => {
            dispatch(login(response.action.payload.data))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function userRegFirstNameChanged(value) {
    return {
        type: "USER_REG_FIRST_NAME_CHANGED",
        value
    }
}

export function userRegLastNameChanged(value) {
    return {
        type: "USER_REG_LAST_NAME_CHANGED",
        value
    }
}

export function userRegEmailChanged(value) {
    return {
        type: "USER_REG_EMAIL_CHANGED",
        value
    }
}

export function userRegPasswordChanged(value) {
    return {
        type: "USER_REG_PASSWORD_CHANGED",
        value
    }
}

export function userRegPasswordConfirmationChanged(value) {
    return {
        type: "USER_REG_PASSWORD_CONFIRMATION_CHANGED",
        value
    }
}

export function userRegUrlChanged(value) {
    return {
        type: "USER_REG_URL_CHANGED",
        value
    }
}

export function userRegBioChanged(value) {
    return {
        type: "USER_REG_BIO_CHANGED",
        value
    }
}

export function sendLoginCredentials(data) {
    return dispatch => {
        dispatch({
            type: "FETCH_SESSION",
            payload: API.postSession(data)
        }).then((response) => {
            dispatch(login(response.action.payload.data))
        }).catch((error) => {
            console.log(error)
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
        }).catch((error) => {
            dispatch(logout())
        })
    }
}

export function getCurrentUser() {
    return dispatch => {
        dispatch({
            type: "FETCH_CURRENT_USER",
            payload: API.getCurrentSession()
        }).then((response) => {
            dispatch(reloadUser(response.action.payload.data))
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

function reloadUser(user) {
    return {
        type: "RELOAD_USER",
        user
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