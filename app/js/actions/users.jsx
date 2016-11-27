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