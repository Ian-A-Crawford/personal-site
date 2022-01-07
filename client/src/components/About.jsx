import React from 'react';
import styles from './About.module.css';
import computer from '../img/computer6.svg'
import mountain from '../img/mountain.svg'
import city from '../img/city.svg'

const About = () => {

   return (
      <div className={styles.aboutMe}>
         <div className={`${styles.row} ${styles.firstRow}`}>
            <div className={styles.computerSpan}><img src={computer} className={styles.computerImg} alt='computer'></img></div>
            <p className={styles.rowParagraph}>Hey! I am Ian Crawford, a software engineering student and avid adventurer!
               I tinker with fullstack development as a hobby and through my co-op. I work with Angular and React, and I
               prefer React for my independent endeavors such as this one. This website was constructed using
               React with a Node backend.</p>
         </div>
         <div className={styles.rowAfter}></div>
         <div className={styles.row}>
            <p className={styles.rowParagraph}>
               I am on a constant quest to obtain knowledge and improve myself through novel experiences and
               quests. I explore my passion for photography and exploration while trekking through
               mountains, ghost towns, and places time left behind. I love to hike with friends and go on adventures to
               new locations.
            </p>
            <div className={styles.computerSpan}><img src={mountain} className={styles.computerImg} alt='computer'></img></div>

         </div>
         <div className={styles.rowAfter}></div>
         <div className={styles.row}>
            <div className={styles.computerSpan}><img src={city} className={styles.computerImg} alt='city'></img></div>
            <p className={styles.rowParagraph}>
               At the present, I'm looking toward the future. While what it holds might be uncertain,
               I'm certain it will turn out well. I will be updating this particular section in the
               future with some really exciting things that I have planned, but at the moment, they
               aren't quite ready to be revealed.
            </p>

         </div>
      </div>

   )
}

export default About;