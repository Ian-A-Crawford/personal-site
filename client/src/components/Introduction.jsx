import React from 'react';
import './Introduction.css';
import portrait from '../img/portrait.jpg';

const Introduction = () => {

   return (
      <div className='intro'>
         <div className='about'>
            <div>
               <img src={portrait} alt='portrait' className='portrait'></img>
               <p><b>Web Developer</b></p>
               <p><b>he/him</b></p>
            </div>
         </div>
         <div className='col__introduction'>
            <div className='column one'>
               <p>SWEN @ Auburn</p>
               <p>Co-Op @ ADTRAN</p>
               <p>Professional &lt;div&gt;-er</p>
            </div>
            <div className='column'>
               <p>React.js</p>
               <p>Angular</p>
               <p>Python/Java</p>
            </div>
         </div>


      </div>

   )
}

export default Introduction;