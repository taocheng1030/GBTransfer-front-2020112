export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login() {
    console.log('redux login1')
    return {
        type: LOGIN
    };
}
export function logout() {
    delete localStorage.currentUser
    delete localStorage.email
    delete localStorage.password
    return {
        type: LOGOUT
    };
}
