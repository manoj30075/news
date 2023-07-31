import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-left"></a>
                <a href="/" className="navbar-center">News Aggregator</a>
                <div className="navbar-right"></div>
            </div>
        </nav>
    );
}

export default Navbar;
