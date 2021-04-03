import React ,{useState}from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './stateprovider';
import firebase  from  'firebase';

import  db from './firebase';


function MessageSender(){
 const[{user},dispatch]=useStateValue();
 const[input,setInput]=useState('');
const[ImageUrl,setImageUrl]=useState('');

const handleSubmit =(e)=>{
  console.log(user);
  e.preventDefault();
   
   db.collection("posts").add({
    message:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    profilePic:user.photoURL,
    username:user.displayName,
    image:ImageUrl
})

  setInput("");
  setImageUrl("");

}



   return(
   <div className="MessageSender">
  <div className="messageSender__top">
        <Avatar src={user.PhotoURL} className="MessageSender__mobile"/>
        <form>
          <input
            value={input}
     onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`Whats on your mind,${user.displayName}`}
          />
          <input
             value={ImageUrl}
           onChange={(e) =>setImageUrl(e.target.value)}
            className="messageSender__Image"
            type="text"
            placeholder="Image URL (Optional)"
          />

          <button 
          onClick={handleSubmit} 
          type="submit">
            Hidden Button
          </button>
        </form>
      </div> 
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>


   </div>

	)




}
export  default MessageSender;