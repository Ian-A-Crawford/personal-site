import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {

   var date = new Date()
   const currentYear = date.getFullYear();

   
   return (
   <div>
      <div className={styles.footer}>
      <div className={styles.links}>

      </div>
         <div className={styles.footerText}>
            <p>&copy; {currentYear} Ian Crawford</p>
         </div>
      </div>
   </div>
   )  
}

export default Footer;