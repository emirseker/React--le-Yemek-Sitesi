import React from 'react'
import Logo from '../İMG/istockphoto-1205449806-612x612.png';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { PiHamburgerBold } from 'react-icons/pi';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={Logo} alt=''/>
        </div>
      
        <div className='mainLink'>
            <Link to="/">Anasayfa </Link>
            <Link to="/Menu">Menu </Link>
            <Link to="/About">Hakkımızda </Link>
            <Link to="/Contact">İletişim </Link>
            <Link to="/Basket">Sipariş Ver <PiHamburgerBold/> </Link>
            
        </div>
    </div>
  )
}
