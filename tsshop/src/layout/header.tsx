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
        { page: "Home", link: <Link to="">Home</Link> },
        { page: "Products", link: <Link to="products">Products</Link> },
        { page: "CreateProduct", link: <Link to="create">Create Product</Link> },
        { page: "Stock", link: <Link to="stock">Stock</Link> },
        { page: "User", link: <Link to="user">User</Link> },
        { page: "About", link: <Link to="about">About</Link> },
    ];


    return (<>
        <AppBar position="static">
            <Toolbar variant="dense" sx={{ bgcolor: "lightcyan" }} >
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.page}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            {page.link}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex", marginLeft: 0 } }}>
                    <Button onClick={() => handlerLogout()}> Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    </>)
}

export default Header;