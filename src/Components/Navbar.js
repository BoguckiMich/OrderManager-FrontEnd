import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/">Home </Link>
            <Link to="/order">Orders </Link>
            <Link to="/user">Users </Link>
        </div>
    );
};

export default Navbar;

