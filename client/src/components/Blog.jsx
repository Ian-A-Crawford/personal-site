import React from 'react';
import styles from './About.module.css';

const Blog = () => {
   return(
      <div class={styles.blogContainer}>
      <div class={styles.blogRow}>
            <div class={styles.blogHeader}>
               <h3>S3-Based Image Sharing Site</h3>
               <p>1/14/2023</p> 
            </div>
            <p>
            &emsp;&emsp;&emsp;Recently, I have been getting back into film photography. I have purchased a few new 
            cameras over the last few months, and I have shot many rolls of film on them. On top of this, I got 
            my own film scanner, so I can control most of the process of getting a negative from my camera onto 
            my computer. This site already has a gallery tab, but I want to be able to create a more functional 
            one in the future, using new technology. Out of this, I decided to start experiementing with Amazon's 
            S3, an object storage service with a well documented api. Through this, I was able to create a demo of
             what the functionalities of this site might be, using a react frontend served by express, I was able 
             to interface with my S3 bucket and both upload and download images from a single webpage. Next, I 
             intend on creating a fully functional site, one that not only contains the uploading and downloading 
             features, but also authentication, and a way to resize images before they are uploaded in order to 
             optimize my S3 usage. I look forward to working with more AWS technologies in the future, as this is 
             a subject that is very interesting to me, and I see this as one of my first steps in that direction.
             The repository for this project is on my Github, which is linked at the bottom of this page.
            </p>
          </div>
          <div class={styles.blogRow}>
            <div class={styles.blogHeader}>
               <h3>Penpal Bot</h3>
               <p>12/2/2022</p> 
            </div>
            <p>
            &emsp;&emsp;&emsp;I have recently worked on a small project in my spare time because I wanted to create 
               something while learning a new technology. I decided to create a Telegram bot  since 
               the interactivity makes it a bit more engaging (and I can use my friends as test subjects). 
               I used the python-telegram-bot module to create a bot and learned SQL to implement a 
               sqlite database that stores user data, and with this, I created the Penpal bot. 
               Essentially, it collects user information when a user interacts with it, and 
               when another user interacts with it, it pairs the two together to talk. I wanted the bot 
               to be repeatedly usable without spam being an issue, so I decided to add a date column to 
               the table. Each time the bot receives a request, it checks the table for old rows, and if 
               a user row has been there for more than a few days, it is removed. Furthermore, I wanted 
               the bot to run constantly, but didn’t want it running in the background on my own machine.
               With this in mind, I launched an AWS EC2 instance with Linux, transferred the project to 
               that instance, and ran it from there. Since the bot is essentially serverless, it currently
               is simply running in a terminal with tmux, but I am curious about using systemd service
                  units, maybe look out for that in the future! I thought it might be an interesting exercise 
                  in getting people who otherwise wouldn’t to converse, and it was a more engaging way to 
                  work with unfamiliar technology for me. Next, I think I’d like to experiment more with 
                  cloud computing after getting a taste of it here, so expect a more fully fledged web 
                  app using the AWS CDK to come next!
            </p>
          </div>
      </div>
      
   )
}

export default Blog;