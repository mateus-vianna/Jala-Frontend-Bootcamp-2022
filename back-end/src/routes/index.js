import { emailRoute } from './emailRoute';
import { logInRoute } from './logInRoute';
import { signUpRoute } from './signUpRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import {VerifyEmailCode} from './verifyEmailRoute';

export const routes = [
    logInRoute,
    signUpRoute,
    testRoute,
    updateUserInfoRoute,
    emailRoute,
    VerifyEmailCode
];
