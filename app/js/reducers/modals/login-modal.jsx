const initialState = {
    open: false,
    errors: [],
    email: "",
    password: ""
}


export default function loginModal(state=initialState, action) {
    switch (action.type) {
        case "USER_LOGGED_OUT":
            return initialState
        case "OPEN_LOGIN_MODAL":
            return Object.assign({}, initialState, {open: true})
        case "CLOSE_LOGIN_MODAL":
            return Object.assign({}, state, {open: false})
        case "LOGIN_EMAIL_CHANGED":
            return Object.assign({}, state, {email: action.value})
        case "LOGIN_PASSWORD_CHANGED":
            return Object.assign({}, state, {password: action.value})
        case "FETCH_SESSION_REJECTED":
            return Object.assign({}, state, {errors: [action.payload.response.data.errors]})
        case "FETCH_SESSION_FULFILLED":
            return Object.assign({}, initialState)
        default: 
            return state
    }
}