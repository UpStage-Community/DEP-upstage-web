import { combineReducers } from 'redux'

import navigation from 'reducers/navigation'
import productions from 'reducers/productions'
export default combineReducers({
    navigation,
    productions
})