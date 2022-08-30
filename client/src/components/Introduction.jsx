import React from 'react';
import './Introduction.css';
import portrait from '../img/portrait.jpg';

const Introduction = () => {

   return (
      <div className='intro'>
         <div className='about'>
            <div>
               <img src={portrait} alt='portrait' className='portrait'></img>
               <p><b>Software Engineer</b></p>
               <p><b>he/him</b></p>
            </div>
         </div>
         <div className='col__introduction'>
            <div className='column one'>
               <p>CS @ WWU</p>
               <p>Worked At REI & ADTRAN</p>
               <p>Professional &lt;div&gt;-er</p>
            </div>
            <div className='column'>
               <p>React.js/Angular/Vue.js</p>
               <p>Git, Linux, Agile</p>
               <p>Python/Java/JS/C++</p>
            </div>
         </div>


      </div>

   )
}

export default Introduction;