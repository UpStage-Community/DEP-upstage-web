const initialState = {
    currentLocation: "Productions",
    loginModalOpen: false
}

export default function navigation(state=initialState, action) {
    switch (action.type) {
        case "NAVIGATE_TO_PRODUCTIONS":
            return Object.assign({}, state, {currentLocation: "Productions"})
        case "NAVIGATE_TO_COMPANIES":
            return Object.assign({}, state, {currentLocation: "Companies"})
        case "OPEN_LOGIN_MODAL":
            return Object.assign({}, state, {loginModalOpen: true})
        case "CLOSE_LOGIN_MODAL":
            return Object.assign({}, state, {loginModalOpen: false})
        default: 
            return state
    }
}