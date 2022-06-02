import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserToken } from "../auth/userToken";
import PrivateRoute, { ProtectedRouteProps } from "../components/PrivateRoute";
import About from "../pages/about";
import CreateProduct from "../pages/createProduct";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notfound";
import Products from "../pages/products";
import Signup from "../pages/signup";
import Stock from "../pages/stock";
import User from "../pages/user";

const Main: React.FC = () => {
    const [token,] = UserToken();

    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: !!token,
        authenticationPath: '/login',
    };

    return (
        <>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<Products />}></PrivateRoute>} />
                    <Route path='/stock' element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<Stock />}></PrivateRoute>} />
                    <Route path='/user' element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<User />}></PrivateRoute>} />
                    <Route path="/create" element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<CreateProduct />}></PrivateRoute>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='*' element={<NotFound />} />

                    {/* <Route path="*" element={​<Navigate to="."/>}​ /> */}

                </Routes>
            </Box>
        </>
    )
}

export default Main;