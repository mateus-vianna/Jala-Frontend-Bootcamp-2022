import { useState, useEffect } from 'react';
import { UserToken } from './userToken';

export const useUser = () => {
    const [token] = UserToken();

    const getPayloadFromToken = (token: string) => {
        const encodedPayload = token.split('.')[1];
        return JSON.parse(atob(encodedPayload));
    }

    const [user, setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);

    return user;
}