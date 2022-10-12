import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const style = { fontSize: "75px" }
    return (
        <footer className="footer">
            <div className="footer-container">
                    <a className="footer-link" href="https://github.com/tperschon">
                        <FontAwesomeIcon icon={faGithub} style={style}/>
                    </a>
                    <a className="footer-link" href="https://www.linkedin.com/in/timothy-perschon-969250237/">
                        <FontAwesomeIcon icon={faLinkedin} style={style}/>
                    </a>
                    <a className="footer-link" href="https://stackoverflow.com/users/18758369/tperschon">
                        <FontAwesomeIcon icon={faStackOverflow} style={style}/>
                    </a>
            </div>
        </footer>
    );
};

export default Footer;