import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import portrait from '../../images/portrait400x400.png'

function Header() {
    return (
        <header className="header">
            <div className="heading-container">
                <h1 className="heading">
                    <Link className="heading-link" to="/">
                        Tim Perschon
                    </Link>
                </h1>
            </div>
            <img src={portrait} alt="portrait of author" />
            <div className="nav-container">
                <nav>
                    {Nav()}
                </nav>
            </div>
        </header>
    );
};

export default Header;