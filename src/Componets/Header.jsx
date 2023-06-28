import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { Avatar, IconButton, Typography } from '@mui/material';
import { useStateValue } from '../StateProvider';
function Header() {
const [{user},dispatch] = useStateValue()


  return (
    <div className='header'>
      <div className="header_Left">
        <img src='https://upload.wikimedia.org/wikipedia/commons/archive/5/51/20200820101155%21Facebook_f_logo_%282019%29.svg' alt='fb_img'/>
        <div className="header_input">
           <SearchIcon/>
           <input placeholder='SearchFacebook' type="text" />
        </div>
      
      </div>  

      <div className="header_Center">
          <div className="header_Options header_Active">
            <HomeIcon fontSize='large'/>
          </div>
          <div className="header_Options">
            <FlagIcon fontSize='large'/>
          </div>
          <div className="header_Options">
              <SubscriptionsIcon fontSize='large'/>
          </div>
          <div className="header_Options">
              <StorefrontIcon fontSize='large'/>
          </div>
          <div className="header_Options">
              <SupervisedUserCircleIcon fontSize='large'/>
          </div>
      </div>
      
      <div className="header_Right">
         <div className="header_Info">
            <Avatar src={user.photoURL}/>
            <h3>{user.displayName}</h3>
            <IconButton className='hover'>
                <AddIcon/>
            </IconButton>
            <IconButton className='hover'>
               <QuestionAnswerIcon/>
            </IconButton>
            <IconButton className='hover'>
               <NotificationsActiveIcon/>
            </IconButton>
            <IconButton className='hover'>
                <KeyboardArrowDownIcon/>
            </IconButton>   
             
         </div>
      </div>
    </div>
  )
}

export default Header
