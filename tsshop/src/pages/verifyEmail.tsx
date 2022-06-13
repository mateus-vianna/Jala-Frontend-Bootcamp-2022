import React, { useEffect } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useUser } from '../auth/tokenParser';
import { UserToken } from '../auth/userToken';
import { IVerificationCode } from '../interfaces/IVerificationCode';
import userService from '../services/userService';



const VerifyEmail = () => {
    const param = useParams();
    console.log('%c%s', 'color: #9c66cc', JSON.stringify(param));
    const user = useUser();
    const [, setToken] = UserToken();
    const initialize = async () => {
        const response = await userService.emailVerification(param as unknown as IVerificationCode);
        setToken(response)
    }

    useEffect(() => {
        initialize();
    }, [])

    useEffect(() => {
        console.log('%c%s', 'color: #ff0000', user);
    })

    return (<>
        <h3>Your e-mail has been verified</h3>
    </>)

}



export default VerifyEmail;