import React from 'react';
import styles from './About.module.css';
import computer from '../img/computer6.svg'
import mountain from '../img/mountain.svg'

const About = () => {

   return (
      <div className={styles.aboutMe}>
         <div className={`${styles.row} ${styles.firstRow}`}>
            <div className={styles.computerSpan}><img src={computer} className={styles.computerImg} alt='computer'></img></div>
            <p className={styles.rowParagraph}>Hey! I'm Ian Crawford and I'm a software engineering student and a bit of an adventurer. At the moment I tinker mostly with fullstack development both as a hobby and as part of my co-op.
            I work in Angular and React, preferring React for my personal use, this site was actually made in React, with a Node backend.</p>
         </div>
         <div className={styles.rowAfter}></div>
         <div className={styles.row}>
            <p className={styles.rowParagraph}>
            I'd say my two greatest passions in life are my quest to learn more and better myself and my constant yearning for novel experiences and adventuring.
            I can often be found in the mountains, in ghost towns, or in places that time forgot taking photos, hiking with friends, or simply exploring for the first time.
            </p>
            <div className={styles.computerSpan}><img src={mountain} className={styles.computerImg} alt='computer'></img></div>
         </div>
      </div>
      
   )
}

export default About;