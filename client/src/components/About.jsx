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
            <p className={styles.rowParagraph}>
               Hey! I am Ian Crawford, a computer science student at Western Washington
               University and an avid adventurer! I have work experience in both front end and back end development,
               and I look forward to putting these skills to use in my future positions.
            </p>
         </div>
         <div className={styles.rowAfter}></div>
         <div className={styles.row}>
            <p className={styles.rowParagraph}>
               I am on a constant quest to obtain knowledge and improve myself through novel experiences and
               quests. I engage in my passion for photography and exploration while trekking through
               mountains, ghost towns, and other places of natural beauty, and I cycle long distances in order to experience the world
               around me in a new way.
            </p>
            <div className={styles.computerSpan}><img src={mountain} className={styles.computerImg} alt='computer'></img></div>

         </div>
         <div className={styles.rowAfter}></div>
         <div className={styles.row}>
            <div className={styles.computerSpan}><img src={city} className={styles.computerImg} alt='city'></img></div>
            <p className={styles.rowParagraph}>
               Currently, I am settling down in my new home in the Pacific Northwest, having moved here in the summer of 2022. I greatly look
               forward to the new opportunities this region holds for me, and I see it as an important turning point
               in my career and life more broadly.
            </p>

         </div>
      </div>

   )
}

export default About;