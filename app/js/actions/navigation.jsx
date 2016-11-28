import thunk from 'redux-thunk'
import { logoutUser } from 'actions/users'

export function navigateToProductions() {
    return {
        type: 'NAVIGATE_TO_PRODUCTIONS'
    }
}

export function navigateToCompanies() {
    return {
        type: 'NAVIGATE_TO_COMPANIES'
    }
}

export function navigateToUserRegistration() {
    return {
        type: 'NAVIGATE_TO_USER_REGISTRATION'
    }
}

export function closeLoginModal() {
    return {
        type: 'CLOSE_LOGIN_MODAL'
    }
}

export function openLoginModal() {
    return {
        type: 'OPEN_LOGIN_MODAL'
    }
}

export function openUserRegistrationModal() {
    return {
        type: 'OPEN_USER_REGISTRATION_MODAL'
    }
}

export function closeUserRegistrationModal() {
    return {
        type: 'CLOSE_USER_REGISTRATION_MODAL'
    }
}

export function switchToUserRegistrationModal() {
    return dispatch => {
        dispatch(closeLoginModal())
        dispatch(openUserRegistrationModal())
    }
}

export function swtichToLoginModal() {
    return dispatch => {
        dispatch(closeUserRegistrationModal())
        dispatch(openLoginModal())
    }
}

export function openHamburger() {
    return {
        type: 'HAMBURGER_OPENED'
    }
}

export function closeHamburger() {
    return {
        type: 'HAMBURGER_CLOSED'
    }
}

export function selectedLoginFromHamburger() {
    return dispatch => {
        dispatch(closeHamburger())
        dispatch(openLoginModal())
    }
}

export function selectedLogoutFromHamburger() {
    return dispatch => {
        dispatch(closeHamburger())
        dispatch(logoutUser())
    }
}

export function selectedSignUpFromHamburger() {
    return dispatch=> {
        dispatch(closeHamburger())
        dispatch(openUserRegistrationModal())
    }
}