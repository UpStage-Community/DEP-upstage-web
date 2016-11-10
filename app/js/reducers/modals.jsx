import { combineReducers } from 'redux'

const initialLoginState = {
    open: true,
    errors: [],
    email: "",
    password: ""
}


function loginModal(state=initialLoginState, action) {
    switch (action.type) {
        case "OPEN_LOGIN_MODAL":
            return Object.assign({}, state, {open: true})
        case "CLOSE_LOGIN_MODAL":
            return Object.assign({}, state, {open: false})
        case "LOGIN_EMAIL_CHANGED":
            return Object.assign({}, state, {email: action.value})
        case "LOGIN_PASSWORD_CHANGED":
            return Object.assign({}, state, {password: action.value})
        case "FETCH_SESSION_REJECTED":
            return Object.assign({}, state, {errors: [action.payload.response.data.errors]})
        default: 
            return state
    }
}

export default combineReducers({
    loginModal
})