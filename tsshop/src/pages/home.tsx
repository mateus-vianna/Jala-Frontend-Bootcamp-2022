import React from "react";
import { useUser } from "../auth/tokenParser";


const Home: React.FC = () => {
    const user = useUser();
    console.log('%c%s', 'color: #e60000', user.isVerified);
    //TODO - check if user has verified email if not error message

    return (<div>
        <h1>Home</h1>
        <div>
            {!user.isVerified ? <h2>You need to verify your email</h2> : <></>}
        </div>
    </div>);

}

export default Home;