import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from 'reducers/index'

const logger = createLogger()
const middleware = applyMiddleware(
    promise(),
    thunk,
    logger //MUST BE LAST
)

export default createStore(
    reducer,
    middleware
)

// sample with redux-thunk and axios
//import thunk from 'redux-thunk'
//import axios from 'axios'
// store.dispatch((dispatch) => {
//     dispatch({type: "FETCHING"})
//     axios.get("http://something.com")
//         .then((response) => {
//             dispatch({type: "RESPONSE", payload: response.data})
//         })
//         .catch((err) => {
//             dispatch({type: "ERROR", payload: err})
//         })
// })

// sample with promises and axios
// import promise from 'redux-promise-middleware'
// store.dispatch({
//     type: "FETCH_USERS",
//     payload: axios.get("some_url.com")
// })
// => "FETCH_USERS_PENDING"
// => "FETCH_USERS_REJECTED"
// => "FETCH_USERS_FULFILLED"