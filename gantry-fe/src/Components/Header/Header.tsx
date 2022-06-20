import React from "react";
import './Header.scss'

export const Header: React.FC<{ children: string }> = ({ children }) => {
    return <h2 className="header">{children}</h2>;
};