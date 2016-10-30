const initialState = {
    index: []
}

export default function companies(state=initialState, action) {
    switch(action.type) {
        case "FETCH_COMPANIES_PENDING":
            return state
        case "FETCH_COMPANIES_REJECTED":
            console.log(action)
            return state
        case "FETCH_COMPANIES_FULFILLED":
            return Object.assign({}, state, {index: action.payload.data})
        default:
            return state
    }
}