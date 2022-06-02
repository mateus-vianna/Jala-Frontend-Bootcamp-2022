import { Button } from "@mui/material";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import IUser from "../interfaces/IUser";

const Signup = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '', confirmPass: '' } as IUser)
    const navigate = useNavigate();

    const handleSignup = (): void => {
        if (!(user.confirmPass === user.password)) {
            alert(`Passwords doesn't match`);
            return;
        }
        navigate('/home');
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