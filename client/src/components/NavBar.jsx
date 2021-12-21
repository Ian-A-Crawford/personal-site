import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
//import { ReactComponent as con } from '../../img/final.svg'
import Logo from '../img/mountain.svg';

const NavBar = () => {

   return (
      <div>
         <div className='navbar'>
            <div className='icon'>
               <img src={Logo} alt='Logo'></img>
            </div>
            <ul className='middle'>
               <li>
                  <Link to='/'>Introduction</Link>
               </li>
               <li>
                  <Link to='/about'>About Me</Link>
               </li>
               <li>
                  <Link to='/gallery'>Gallery</Link>
               </li>
            </ul>
            <div className='name'>
               Ian Crawford
            </div>
         </div>
      </div>

   )
}

export default NavBar