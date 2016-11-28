const initialState = {
    open: false,
    errors: {},
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    url: "",
    bio: ""
}

export default function userRegistrationModal(state=initialState, action) {
    switch(action.type) {
        case "OPEN_USER_REGISTRATION_MODAL":
            return Object.assign({}, initialState, {open: true})
        case "CLOSE_USER_REGISTRATION_MODAL":
            return Object.assign({}, state, {open: false})
        case "USER_REG_FIRST_NAME_CHANGED":
            return Object.assign({}, state, {firstName: action.value})
        case "USER_REG_LAST_NAME_CHANGED":
            return Object.assign({}, state, {lastName: action.value})
        case "USER_REG_EMAIL_CHANGED":
            return Object.assign({}, state, {email: action.value})
        case "USER_REG_PASSWORD_CHANGED":
            return Object.assign({}, state, {password: action.value})
        case "USER_REG_PASSWORD_CONFIRMATION_CHANGED":
            return Object.assign({}, state, {passwordConfirmation: action.value})
        case "USER_REG_URL_CHANGED":
            return Object.assign({}, state, {url: action.value})
        case "USER_REG_BIO_CHANGED":
            return Object.assign({}, state, {bio: action.value})
        case "FETCH_CREATE_USER_REJECTED":
            return Object.assign({}, state, {errors: action.payload.response.data.errors})
        case "FETCH_CREATE_USER_FULFILLED":
            return Object.assign({}, initialState)
        default:
            return state
    }
}