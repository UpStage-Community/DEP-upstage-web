const initialState = {
    index: []
}

export default function productions(state=initialState, action) {
    switch (action.type) {
        case "FETCH_PRODUCTIONS_PENDING":
            return state
        case "FETCH_PRODUCTIONS_REJECTED":
            console.log(action)
            return state
        case "FETCH_PRODUCTIONS_FULFILLED":
            return Object.assign({}, state, {index: action.payload.data})
        default: 
            return state
    }
}