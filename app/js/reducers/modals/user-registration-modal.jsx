const initialState = {
    open: false,
    errors: [],
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
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
            return Object.assign({}, state, {first_name: action.value})
        case "USER_REG_LAST_NAME_CHANGED":
            return Object.assign({}, state, {last_name: action.value})
        case "USER_REG_EMAIL_CHANGED":
            return Object.assign({}, state, {email: action.value})
        case "USER_REG_PASSWORD_CHANGED":
            return Object.assign({}, state, {password: action.value})
        case "USER_REG_PASSWORD_CONFIRMATION_CHANGED":
            return Object.assign({}, state, {password_confirmation: action.value})
        case "USER_REG_URL_CHANGED":
            return Object.assign({}, state, {url: action.value})
        case "USER_REG_BIO_CHANGED":
            return Object.assign({}, state, {bio: action.value})
        default:
            return state
    }
}