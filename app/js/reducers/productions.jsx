const initialState = {
    index: []
}

export default function productions(state=initialState, action) {
    switch (action.type) {
        case "FETCH_PRODUCTIONS_PENDING":
            console.log("pending productions")
            console.log(action)
            return state
        case "FETCH_PRODUCTIONS_REJECTED":
            console.log("productions rejected")
            console.log(action)
            return state
        case "FETCH_PRODUCTIONS_FULFILLED":
            console.log("productions gotten")
            return Object.assign({}, state, {index: action.payload.data})
        default: 
            return state
    }
}