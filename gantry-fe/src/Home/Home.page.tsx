import React from 'react';
import { Page } from '../Components/Page/Page'
import {NavLink} from "react-router-dom";

export const Home: React.FC = () => {
    return (
        <Page>
            This is Gantry, a simple React application that shows a list of construction companies. Click on <NavLink to='/companies'>Companies</NavLink> here or in the header to view a list of companies.
        </Page>
    );
};
