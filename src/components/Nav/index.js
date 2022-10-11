import React from "react";
import { Link } from "react-router-dom";

// returns jsx with the navigation bar, which should be a list of links that will be inserted into the header, with css class names to be formatted
function Nav() {
    return (
        <ul className="nav nav-list">
            <li><Link className="nav nav-item" to="/aboutme">About Me</Link></li>
            <li><Link className="nav nav-item" to="/portfolio">Portfolio</Link></li>
            <li><Link className="nav nav-item" to="/contact">Contact</Link></li>
            <li><Link className="nav nav-item" to="/resume">Resume</Link></li>
        </ul>
    );
};

export default Nav;