import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


interface IPage {
    page: string;
    link: JSX.Element
}

const Header = () => {
    const navigate = useNavigate();

    const handlerLogout = () => {
        localStorage.removeItem('token');
        navigate('/products')
    }

    const pages: IPage[] = [
        { page: "Home", link: <Link to=""><span className='primary'>Home</span></Link> },
        { page: "Products", link: <Link to="products"><span className='primary'>Products</span></Link> },
        { page: "CreateProduct", link: <Link to="create"><span className='primary'>Create Product</span></Link> },
        { page: "Stock", link: <Link to="stock"><span className='primary'>Stock</span></Link> },
        { page: "User", link: <Link to="user"><span className='primary'>User</span></Link> },
        { page: "About", link: <Link to="about"><span className='primary'>About</span></Link> },
    ];


    return (
        <div className="header">
            <div className="header-item"></div>
            {pages?.map((page: IPage): any => {
                return (<div className="header-item" key={page.page}>
                    {page.link}
                </div>);
            })}
            <div className="header-item pointer" onClick={() => handlerLogout()}>
                <span className='primary'>Logout</span>
            </div>
        </div>
    )
}

export default Header;