const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const app = express();
const axios = require('axios');




app.use(express.static(path.resolve(__dirname, '../client/build')));



app.get("/api", (req, res) => {

  const images = axios.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${process.env.KEY}&photoset_id=72177720295490185&user_id=${process.env.USERID}&format=json&nojsoncallback=1`)
  .then(response => {
    console.log(response);
    
    res.send(response.data.photoset);
  })
  .catch(error => {
    console.log(error);
  });


 
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});