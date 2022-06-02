
export const UserToken = ():any => {
    const token =  localStorage.getItem('token');

    const setLocalToken = (newToken: string): void => {
        localStorage.setItem('token', newToken);
    }

    return [token, setLocalToken];
}

