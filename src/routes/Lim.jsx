import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';



const LimRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> }
];

export default LimRoutes;




