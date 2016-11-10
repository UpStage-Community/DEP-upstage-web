import { combineReducers } from 'redux'

import navigation from 'reducers/navigation'
import productions from 'reducers/productions'
import companies from 'reducers/companies'
import modals from 'reducers/modals'

export default combineReducers({
    navigation,
    productions,
    companies,
    modals
})