import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';








function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
         
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p className="post__option_mobile">Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p className="post__option_mobile">Comment</p>
        </div>
        <div className="post__option mr-6">
          <NearMeIcon className="w-4" />
          <p className="post__option_mobile">Share</p>
        </div>
        <div className="post__option post__option_mobile w-4 ">
          <AccountCircleIcon  className="post__option_mobile w-4"/>
          <ExpandMoreOutlined className="post__option_mobile w-4"/>
        </div>
      </div>
    </div>
  );
}

export default Post;
