import React from 'react';
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import './socialMidia.css'

function SocialMidia(){
    return (
        <ul className="containerFooter">
            <li> <img className="img" src = {facebook} alt="Facebook"/></li>
            <li><img className="img" src = {instagram} alt="Instagram"/></li>
            <li><img className="img" src = {pinterest} alt="Pinterest"/></li>
        </ul>
    );
}

export default SocialMidia;