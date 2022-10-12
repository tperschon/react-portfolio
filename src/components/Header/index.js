import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import portrait from '../../assets/images/portrait400x400.png';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import About from '../Aboutme';

function Header() {
    // get/set currentPage from state with function to set it
    const [currentPage, setCurrentPage] = useState('Aboutme');
    // switch case to render different content with default being the about
    const renderPage = () => {
        switch (currentPage) {
            case 'Contact': {
                return <Contact />
            }
            case 'Portfolio': {
                return <Portfolio />
            }
            case 'Resume': {
                return <Resume />
            }
            default: {
                return <About />
            }
        }
    };
    // function to handle paging for nav links, just sets the state of the currentPage to a string based on input string
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
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
                        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                    </nav>
                </div>
            </header>
            {renderPage()}
        </div>
    );
};

export default Header;