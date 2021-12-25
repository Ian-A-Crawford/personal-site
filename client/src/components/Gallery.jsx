import React, { Component } from 'react';
import Masonry from '@mui/lab/Masonry';
import './Gallery.css';




const Gallery = () => {

   const [data, setData] = React.useState(null);

   React.useEffect(() => {
      fetch("/api")
         .then((res) => res.json())
         .then(data => setData(data.photo.map(image => (<img src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt='photograph' key={image.title}></img>))));
   }, []);

   return (
      <div className='galleryDiv'>
         
         <Masonry>
            {data}
         </Masonry>
      </div>

   )
}

export default Gallery;



