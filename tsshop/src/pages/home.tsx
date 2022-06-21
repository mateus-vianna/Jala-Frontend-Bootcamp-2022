import React, { useEffect, useState } from "react";
import { useUser } from "../auth/tokenParser";
import IProduct from "../interfaces/IProduct";


const Home: React.FC = () => {
    const user = useUser();
    const [stock, setStock] = useState<IProduct[]>();

    let fetchStock = async () => {
        try {
            let response = await fetch("http://localhost:5289/api/Stock");
            response = await response.json();
            setStock(response as unknown as IProduct[]);
        } catch (error) { }
    };

    useEffect(() => {
        fetchStock();
    })

    return (<div>
        <h1>Home</h1>
        <h2>Mais</h2>
        <h2>Um</h2>
        <h2>Mais</h2>
        <h2>Dois</h2>
        <h2>Mais</h2>
        <h2>Tres</h2>
        {stock?.map((iten: any) => {
            return <p>{iten}</p>
        })}
        <span>Outro</span>
        <span>Outro</span>

        <div>
            {!user.isVerified ? <h2>You need to verify your email</h2> : <></>}
        </div>
    </div>);

}

export default Home;