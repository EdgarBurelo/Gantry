import React from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.scss";

export const NavBar: React.FC = () => {
    return (
        <nav>
            <div>Logo</div>
            <div className="links">
                <p>
                    <NavLink className={({ isActive}) => isActive ? 'selected' : ''} to='/'>Home</NavLink>
                </p>
                <p>
                    <NavLink className={({ isActive}) => isActive ? 'selected' : ''} to='/companies'>Companies</NavLink>
                </p>
            </div>
        </nav>
    );
};