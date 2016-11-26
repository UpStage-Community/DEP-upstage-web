const initialState = null

export default function currentUser(state=initialState, action) {
    switch(action.type) {
        case "RELOAD_USER":
        case "USER_LOGGED_IN":
            return Object.assign({}, action.user)
        case "USER_LOGGED_OUT":
            return initialState
        default:
            return state
    }
}