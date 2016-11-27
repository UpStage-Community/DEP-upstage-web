import { combineReducers } from 'redux'
import loginModal from 'reducers/modals/login-modal'
import userRegistrationModal from 'reducers/modals/user-registration-modal'

export default combineReducers({
    loginModal,
    userRegistrationModal
})