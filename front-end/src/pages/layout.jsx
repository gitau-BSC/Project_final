import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/create">Create</Link></li>
               <li><Link to="/read">Read</Link></li>
               <li><Link to="/update">Update</Link></li>
            </ul>
        </nav>
    );
}
