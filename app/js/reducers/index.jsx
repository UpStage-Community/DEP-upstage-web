import { combineReducers } from 'redux'

import navigation from 'reducers/navigation'
import productions from 'reducers/productions'
import companies from 'reducers/companies'

export default combineReducers({
    navigation,
    productions,
    companies
})