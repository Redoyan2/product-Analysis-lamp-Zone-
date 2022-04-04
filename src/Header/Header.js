import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           <Link to="/" className='header-link'>HOME</Link>
           <Link to="/reviews" className='header-link' >REVIEWS</Link>
           <Link to="/dashboard" className='header-link' >DASHBOARD</Link>
           <Link to="/blogs" className='header-link' >BLOGS</Link>
           <Link to="/about" className='header-link'>ABOUT</Link>
        </div>
    );
};

export default Header;