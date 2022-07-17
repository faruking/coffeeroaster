import React from "react";
import logo from '../assets/shared/desktop/logo.svg';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';

export default function  Header(){
    return(
        <header className="App-header">
        <>
            <figure>
                <img src={logo} alt='logo'></img>
            </figure>
        </>
        <>
            <figure>
                <img src={hamburger} alt='menu button'></img>
            </figure>
        </>
    </header>
    )
}