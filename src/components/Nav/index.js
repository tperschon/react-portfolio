import React from "react";

// returns jsx with the navigation bar, which should be a list of links that will be inserted into the header, with css class names to be formatted
function Nav({ currentPage, handlePageChange }) {
    return (
        <ul 
        // conditionally render each li for the nav so that the active page is render differently
        className="nav-list">
            <li><a
                    className={currentPage === 'Aboutme' ? "nav-item active" : "nav-item"}
                    href="/"
                    onClick={()=>handlePageChange('Aboutme')}
                >About Me</a>
            </li>
            <li><a
                    className={currentPage === 'Portfolio' ? "nav-item active" : "nav-item"}
                    href="/"
                    onClick={()=>handlePageChange('Portfolio')}
                >Portfolio</a>
            </li>
            <li>
                <a
                    className={currentPage === 'Contact' ? "nav-item active" : "nav-item"}
                    href="/"
                    onClick={()=>handlePageChange('Contact')}
                >Contact</a>
            </li>
            <li>
                <a
                    className={currentPage === 'Resume' ? "nav-item active" : "nav-item"}
                    href="/"
                    onClick={()=>handlePageChange('Resume')}
                >Resume</a>
            </li>
        </ul>
    );
};

export default Nav;