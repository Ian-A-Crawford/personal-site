import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const Footer = () => {

   var date = new Date()
   const currentYear = date.getFullYear();

   
   return (
   <div>
      <div className={styles.footer}>
      <div className={styles.links}>

      </div>
         <div className={styles.footerText}>
            <div className={styles.brands}>
               <a rel='noreferrer' target={"_blank"} href="https://www.linkedin.com/in/ian-crawford-447527210/"><FontAwesomeIcon icon={brands('linkedin')}/></a>
               <a rel='noreferrer' target={"_blank"} href='https://www.instagram.com/ianalexiac/'><FontAwesomeIcon icon={brands('instagram')}/></a>
            </div>
            
            <p>&copy; {currentYear} Ian Crawford</p>
         </div>
      </div>
   </div>
   )  
}

export default Footer;