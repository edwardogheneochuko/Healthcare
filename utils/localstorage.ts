export const setTokenToLocalStorage = (token: string) => {
    localStorage.setItem('token', token);
}

export const getTokenFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
}

export const deleteTokenFromLocalStorage = () => {
    localStorage.removeItem('token');
}
