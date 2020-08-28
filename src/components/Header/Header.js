import React from 'react';
import './Header.css';
import logo from '../../images/logo2.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='top-bar'>
                <img src={logo} alt=""/>
                <nav>
                    <a href="/login">Login</a>
                    <button>Sign up</button>
                </nav>
            </div>
            <div className="banner">
                <div>
                    <h1>Delicious food waiting for your belly</h1>
                    <input type="text" placeholder="Search for food"/>
                    <button>Search</button>
                </div>
            </div>
            <div className="mid-bar">
                <nav>
                    <a href="/breakfast">Breakfast</a>
                    <a href="/lunch">Lunch</a>
                    <a href="/dinner">Dinner</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;