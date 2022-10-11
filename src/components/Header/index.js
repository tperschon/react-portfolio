import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function Header() {
    return (
        <header className="flex-header">
            <div className="heading-container">
                <h1 className="main-heading">
                    <Link className="heading-link" to="/">
                        Tim Perschon
                    </Link>
                </h1>
            </div>
            <div className="nav-container">
                <nav>
                    {Nav()}
                </nav>
            </div>
        </header>
    );
};

export default Header;