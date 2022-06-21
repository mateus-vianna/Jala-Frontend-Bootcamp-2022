import React, { useEffect } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useUser } from '../auth/tokenParser';
import { UserToken } from '../auth/userToken';
import { IVerificationCode } from '../interfaces/IVerificationCode';
import userService from '../services/userService';



const VerifyEmail = () => {
    const param = useParams();
    const user = useUser();
    const [, setToken] = UserToken();
    const initialize = async () => {
        const response = await userService.emailVerification(param as unknown as IVerificationCode);
        setToken(response.token);
    }

    useEffect(() => {
        initialize();
    }, [])

    useEffect(() => {
        console.log('%c%s', 'color: #ff0000', JSON.stringify(user));
    })

    return (<>
        {user.isVerifed ?
            <h3>Your e-mail has been verified</h3> : <h3>You haven't been verified yet</h3>}
    </>)

}



export default VerifyEmail;