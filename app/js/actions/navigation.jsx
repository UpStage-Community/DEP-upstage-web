import thunk from 'redux-thunk'
import { logoutUser } from 'actions/index'

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