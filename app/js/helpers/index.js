export function login(user) {
    localStorage.setItem('user_token', user.auth_token)
}

export function logout() {
    localStorage.setItem('user_token', '')
}