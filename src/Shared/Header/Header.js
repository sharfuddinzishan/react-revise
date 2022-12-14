import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Header</h2>
            <nav className='nav'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/products">Products</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/orders">Orders</Link>
                </li>
            </nav>
        </div>
    );
};

export default Header;