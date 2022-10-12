import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="heading-container">
                <h1 className="heading">
                    <Link className="heading-link" to="/">
                        Tim Perschon
                    </Link>
                </h1>
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </footer>
    );
};

export default Footer;