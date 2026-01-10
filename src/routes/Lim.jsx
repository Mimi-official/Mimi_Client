import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Intro from '../pages/Intro';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


const LimRoutes = [
    { path: "/", element: <Intro /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> }
];

export default LimRoutes;




