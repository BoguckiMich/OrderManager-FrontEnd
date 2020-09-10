import React from "react";
import "./App.css";
import Order from "./Components/Order";
import User from "./Components/User";
import Navbar from "./Components/Navbar";
import requests from "./requests";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import OrderCreator from "./Components/OrderCreator";

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Navbar />
        <Switch>
          <Route path="/order">
            <Order fetchURL={requests.fetchAllOrders} />
          </Route>
          <Route path="/user">
            <User fetchURL={requests.fetchAllUsers} />
          </Route>
          <Route path="/client/create">
            <OrderCreator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route component={Error} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
