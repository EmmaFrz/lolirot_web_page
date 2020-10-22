import React from 'react';
import PropTypes from "prop-types";

import Logo from '../assets/images/logos100.png';

const Header = () => {
    return(
        <div>
            <header>
                <div className="container">
                    <nav className="nav">
                        <div className="menu-toggle">
                            <i className="fas fa-bars"></i>
                            <i className="fas fa-times"></i>
                        </div>
                        <a href="#" className="logo"><img src={Logo} /></a>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Stream</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Works</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Shedule</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Equipment</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Store</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;