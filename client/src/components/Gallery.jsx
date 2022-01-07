import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Modal, Box, Typography } from '@mui/material';
import styles from './Gallery.module.css';
import { useMediaQuery } from 'react-responsive';





const Gallery = () => {

   const [data, setData] = React.useState(null);
   const [isOpen, setOpen] = React.useState(false);
   const [img, setImg] = React.useState("");

   const handleOpen = (imgSrc, open) => {
      setImg(imgSrc);
      setOpen(open);
   }


   const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

   React.useEffect(() => {
      fetch("/api")
         .then((res) => res.json())
         .then(data => setData(data.photo.map(image => (
            <img src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt='photograph' key={image.title} onClick={() => handleOpen(`https://live.staticflickr.com/${image.server}/${image.id}_${image.originalsecret}_o.jpg`, true)}>

            </img>)))
         );
   }, []);


   return (
      <div className={`${styles.galleryDiv}`}>
         <Masonry className={`${!data && styles.hidden} ${styles.width}`} columns={isMobile ? 2 : 4} sx={{
            margin: 0
         }}>
            {data}
         </Masonry>
         <h3 className={`${data && styles.hidden} ${styles.loading}`}>loading...</h3>
         <div style={{ outline: 'none' }}>
         {!isMobile &&
            <Modal sx={{ outline: 'none' }} open={isOpen} onClose={() => handleOpen(false)}>
               
               <img style={{outline: 'none'}} className={styles.imgPopup} src={img} alt="film photograph"></img>
            
         </Modal>}
         </div>
      </div>

   )
}

export default Gallery;



