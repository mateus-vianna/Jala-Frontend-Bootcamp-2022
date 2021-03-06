import { Button } from "@mui/material";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import IUser from "../interfaces/IUser";
import { UserToken } from '../auth/userToken';
import userService from "../services/userService";

const Signup = () => {
    const [user, setUser] = useState({ name: '', email: '', gender: '', age: '', password: '', confirmPass: '' } as IUser)
    const navigate = useNavigate();
    const [, setToken] = UserToken();

    const handleSignup = async (): Promise<void> => {
        if (!(user.confirmPass === user.password)) {
            alert(`Passwords doesn't match`);
            return;
        }
        try {
            const response: any = await userService.signup(user);
            setToken(response.token);
            navigate('/please-very');

        } catch (error) {
            console.log('%c%s', 'color: #364cd9', error);
            alert('User was not created');
        }
    }

    const handleValidation = (): boolean => {
        return !user.name && !user.email && !user.password && !user.confirmPass;
    }

    return (
        <div style={{ marginLeft: 40, marginTop: 10, width: '30%' }}>
            <h1>Sign Up</h1>
            <input
                value={user.name}
                placeholder="your name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <br />
            <input
                value={user.email}
                placeholder="your@email.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <br />
            <input
                value={user.gender}
                placeholder="masculine/feminine/other"
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
            <br />
            <input
                value={user.age}
                placeholder="your age"
                onChange={(e) => setUser({ ...user, age: e.target.value })}
            />
            <br />
            <input
                value={user.password}
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <br />
            <input
                value={user.confirmPass}
                placeholder="confirm password"
                onChange={(e) => setUser({ ...user, confirmPass: e.target.value })}
            />
            <hr />
            <Button
                color='info'
                variant='contained'
                size="large"
                disabled={handleValidation()} onClick={(() => { handleSignup() })}
            >
                CREATE ACCOUNT
            </Button>
            <hr />
            <Button
                sx={{ bgcolor: 'green', marginTop: 3 }}
                variant='contained'
                size="large"
                onClick={() => navigate('/')}
            >
                HAVE AN ACCOUNT? LOGIN
            </Button>

        </div >
    )

}


export default Signup;