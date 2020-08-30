import React from 'react';
import './App.css';
import Order from "./Components/Order"
import User from "./Components/User"
import Navbar from "./Components/Navbar"
import requests from "./requests";
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Home";


function App() {
    return (
        <main className="app">
            <Navbar/>
            <Switch>
                <Route path="/order">
                    <Order fetchURL={requests.fetchAllOrders}/>
                </Route>
                <Route path="/user">
                    <User fetchURL={requests.fetchAllUsers}/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
                <Route component={Error}/>
            </Switch>
        </main>
    );
}

export default App;
