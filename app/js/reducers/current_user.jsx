const initialState = null

export default function currentUser(state=initialState, action) {
    switch(action.type) {
        case "USER_LOGGED_IN":
            return Object.assign({}, action.user)
        case "USER_LOGGED_OUT":
            return Object.assign({}, initialState)
        default:
            return state
    }
}