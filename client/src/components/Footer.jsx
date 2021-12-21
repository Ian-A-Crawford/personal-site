import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {

   return (
   <div>
      <div className={styles.footer}>
      <div className={styles.links}>

      </div>
         <div className={styles.footerText}>
            <p>copyright</p>
            <p>Ian Crawford</p>
         </div>
      </div>
   </div>
   )  
}

export default Footer;