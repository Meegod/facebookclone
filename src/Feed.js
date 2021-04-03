import React , { useEffect, useState }  from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';
import firebase  from  'firebase';

import  db from './firebase';


function Feed(){
   
   const[posts,setPosts]=useState([]);

   useEffect(() => {
     db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
        setPosts(snapshot.docs.map(doc=>({id:doc.id,
          data:doc.data()})))
      ));
  }, [])



   return(

   <div className="feed">
  {/*Story Reel*/}
  <StoryReel/>
  <MessageSender/>
  
{
  posts.map(post=>(
    <Post
      id={post.data.id}
      image={post.data.image}
      message={post.data.message}
      profilePic={post.data.profilePic}
      username={post.data.username}
       timestamp={post.data.timestamp}
      />))
}


   
   </div>

	)




}
export  default Feed;