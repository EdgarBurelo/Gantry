import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "../Home/Home.page";
import { Companies } from '../Companies/Companies.page'

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/companies' element={<Companies />} />
        </Routes>
    );
};
