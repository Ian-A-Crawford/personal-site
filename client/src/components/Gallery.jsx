import React, { Component } from 'react';
import Masonry from '@mui/lab/Masonry';
import './Gallery.css';



const images = [
   {
      original: 'https://picsum.photos/id/1018/600/300/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
   },
   {
      original: 'https://picsum.photos/id/1015/600/300/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
   },
   {
      original: 'https://picsum.photos/id/1019/600/300/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
   },
   {
      original: 'https://picsum.photos/id/1018/600/300/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
   },
   {
      original: 'https://picsum.photos/id/1015/600/300/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
   },
   {
      original: 'https://picsum.photos/id/1019/600/300/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
   },
   {
      original: 'https://picsum.photos/id/1018/600/300/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
   },
   {
      original: 'https://picsum.photos/id/1015/600/300/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
   },
   {
      original: 'https://picsum.photos/id/1019/600/300/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
   },
];


const Gallery = () => {

   const [data, setData] = React.useState(null);

   React.useEffect(() => {
      fetch("/api")
         .then((res) => res.json())
         .then((data) => setData(data.message));
   }, []);

   return (
      <div className='galleryDiv'>
         <p>{!data ? "Loading..." : data}</p>
         <Masonry>
            {images.map(image => (
               <img src={image.original}></img>
            ))}
         </Masonry>
      </div>

   )
}

export default Gallery;