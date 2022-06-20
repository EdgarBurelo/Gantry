import React from 'react';
import './App.scss';
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo-client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import {NavBar} from "./NabBar/NavBar";

const App: React.FC = () => {
    return (
        <div className="App">
            <ApolloProvider client={client}>
                <Router>
                    <NavBar />
                    <div className='content-outer'>
                        <AppRoutes />
                    </div>
                </Router>
            </ApolloProvider>
        </div>
    )
}

export default App
