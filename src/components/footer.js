import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteLogo from '../assets/shared/desktop/logo_white.svg'
export default function Footer() {
    return (
        <footer>
               <figure>
                <img src={whiteLogo} alt='company logo'></img>
            </figure>
            <nav className='navigation'>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/about-us'>about us</NavLink>
                <NavLink to='/createyourplan'>create your plan</NavLink>
            </nav>
            <nav className='nav-flex'>
                <ul>
                    <li onClick={function () { window.location.href = 'https://www.facebook.com' }} className="icon-facebook"></li>
                    <li onClick={function () { window.location.href = 'https://www.twitter.com/faruking2' }} className="icon-twitter"></li>
                    <li onClick={function () { window.location.href = 'https://www.instagram.com' }} className="icon-instagram"></li>
                </ul>
            </nav>
        </footer>
    )
}