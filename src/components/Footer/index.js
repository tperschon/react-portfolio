import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="heading-container">
                <h1 className="heading">
                    <Link className="heading-link" to="/">
                        Tim Perschon
                    </Link>
                </h1>
            </div>
        </footer>
    );
};

export default Footer;