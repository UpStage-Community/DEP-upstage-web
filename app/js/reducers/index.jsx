import { combineReducers } from 'redux'

import header from 'reducers/header'
import productions from 'reducers/productions'
export default combineReducers({
    header,
    productions
})