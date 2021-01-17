import React from 'react';
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Logo from '../../assets/images/logos100.png';

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
                        <a href="/" className="logo"><img src={Logo} /></a>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/stream" className="nav-link">Stream</Link>
                            </li>
                            <li className="nav-item">
                                <a href="/work" className="nav-link">Works</a>
                            </li>
                            <li className="nav-item">
                                <a href="/podcast" className="nav-link">Podcast</a>
                            </li>
                            <li className="nav-item">
                                <a href="/equipment" className="nav-link">Equipment</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://teespring.com/lolirot-collection-2020?pid=333&cid=6633" target="_blank" className="nav-link">Store</a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;