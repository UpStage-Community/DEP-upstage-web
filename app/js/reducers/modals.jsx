import { combineReducers } from 'redux'

const initialLoginState = {
    open: true,
    errors: []
}


function loginModal(state=initialLoginState, action) {
    switch (action.type) {
        case "OPEN_LOGIN_MODAL":
            return Object.assign({}, state, {open: true})
        case "CLOSE_LOGIN_MODAL":
            return Object.assign({}, state, {open: false})
        default: 
            return state
    }
}

export default combineReducers({
    loginModal
})