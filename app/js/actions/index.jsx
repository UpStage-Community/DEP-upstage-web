export function loginPasswordChanged(value) {
    return {
        type: "LOGIN_PASSWORD_CHANGED",
        value
    }
}

export function loginEmailChanged(value) {
    return {
        type: "LOGIN_EMAIL_CHANGED",
        value
    }
}