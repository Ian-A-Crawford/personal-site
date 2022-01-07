import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
//import { ReactComponent as con } from '../../img/final.svg'
import Logo from '../img/mountain.svg';
import Drawer from '@mui/material/Drawer';


const NavBar = () => {

   const [isOpen, setIsOpen] = React.useState(false)

   const toggleDrawer = (open) => {
      setIsOpen(open);
   }

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
            <div className='name ian'>
               Ian Crawford
            </div>
            <div className='name menu' onClick={() => toggleDrawer(true)}>
               <svg viewBox="0 0 100 80" width="40" height="40">
                  <g fill="#545454">
                     <rect width="100" height="20"></rect>
                     <rect y="30" width="100" height="20"></rect>
                     <rect y="60" width="100" height="20"></rect>
                  </g>
               </svg>
            </div>
            <Drawer anchor='right' open={isOpen} PaperProps={{ sx: { backgroundColor: '#545454' } }} onClose={() => toggleDrawer(false)}>
               <ul class='sideBar'>
                  <li onClick={() => toggleDrawer(false)}>
                     <Link to='/'>Intro</Link>
                  </li>
                  <li onClick={() => toggleDrawer(false)}>
                     <Link to='/about'>About</Link>
                  </li>
                  <li onClick={() => toggleDrawer(false)}>
                     <Link to='/gallery'>Gallery</Link>
                  </li>
               </ul>
            </Drawer>
         </div>
      </div>

   )
}

export default NavBar