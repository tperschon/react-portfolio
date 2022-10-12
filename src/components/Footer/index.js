import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackExchange } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                    <a href="https://github.com/tperschon">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="footer-link" href="https://www.linkedin.com/in/timothy-perschon-969250237/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="footer-link" href="https://stackoverflow.com/users/18758369/tperschon">
                        <FontAwesomeIcon icon={faStackExchange} />
                    </a>
            </div>
        </footer>
    );
};

export default Footer;