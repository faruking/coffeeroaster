import React,{ useRef } from "react";
import logo from '../assets/shared/desktop/logo.svg';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import closeButton from '../assets/shared/mobile/icon-close.svg';
import { NavLink } from "react-router-dom";

export default function  Header(){
    const close = useRef(null);
    const hamburgerRef = useRef(null);
    const menuRef = useRef(null);
    const openMenu = () => {
        close.current.style.display = 'block';
        hamburgerRef.current.style.display = 'none';
        menuRef.current.style.display = '';
        document.body.style.overflow = 'hidden';
    }
    const closeMenu = () => {
        close.current.style.display = 'none';
        hamburgerRef.current.style.display = 'block';
        menuRef.current.style.display = 'none';
        document.body.style.overflow = '';

    }
    return(
        <>
          <header className="App-header">
        <>
            <figure>
                <img src={logo} alt='logo'></img>
            </figure>
        </>
        <>
            <figure ref={hamburgerRef}  onClick={openMenu}>
                <img src={hamburger} alt='menu button'></img>
            </figure>
            <figure  style={{display:'none'}} ref={close} onClick={closeMenu}>
                <img src={closeButton} alt='menu button'></img>
            </figure>
        </>
        
    </header>
    <nav className="menu" ref={menuRef} style={{display:'none'}}>
        <NavLink to={'/'} style={{marginTop:'15%'}}>Home</NavLink>
        <NavLink to={'/about-us'}>About Us</NavLink>
        <NavLink to={'/subscribe'}>Create Your Plan</NavLink>
    </nav>
        </>
      
    )
}