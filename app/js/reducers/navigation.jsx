const initialState = {
    currentLocation: "Productions",
    hamburgerOpen: false
}

export default function navigation(state=initialState, action) {
    switch (action.type) {
        case "NAVIGATE_TO_PRODUCTIONS":
            return Object.assign({}, state, {currentLocation: "Productions"})
        case "NAVIGATE_TO_COMPANIES":
            return Object.assign({}, state, {currentLocation: "Companies"})
        case "HAMBURGER_OPENED":
            return Object.assign({}, state, {hamburgerOpen: true})
        case "HAMBURGER_CLOSED":
            return Object.assign({}, state, {hamburgerOpen: false})
        default: 
            return state
    }
}