import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './stateprovider';





function Header(){
const[{user},dispatch]=useStateValue();

   return(
  <div className="header">
<div className="header__left">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"/>
<div className="header__input">
<SearchIcon />
<input placeholder="Search Facebook" type="text"/>
</div>
</div>

<div className="header__center">
<div className="header__option header__option--active ">
 <HomeIcon fontSize="large" />
</div>
 <div className="header__option">
          <FlagIcon fontSize="large"
          />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon className="header__mobile"/>
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" 
          />
        </div>
        <div className="header__option">
          <SupervisedUserCirceIcon fontSize="large" 
         />
        </div>

</div>
<div className="header__right">

 <div className="header__info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton  className="header__mobile">
          <AddIcon />
        </IconButton>
        <IconButton className="header__mobile">
          <ForumIcon />
        </IconButton>
        <IconButton className="header__mobile">
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton className="header__mobile">
          <ExpandMoreIcon />
        </IconButton>


</div>


  </div>


   	)



}
export default Header;