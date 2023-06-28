import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import NearMeIcon from '@mui/icons-material/NearMe';
import SmsIcon from '@mui/icons-material/Sms';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import './Posts.css'
function Posts({profile,image,username,timestamp,message}) {
  return (
    <div className='post'>
        <div className="post_top">
            <div className='post_top_container'>
                <Avatar src={profile}/>
                <div className="post_info">
                   <h4>{username}</h4>
                  <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                  
                </div>
            </div>
            <div >
                <MoreHorizIcon  className='icon' />
            </div>
           
        </div>
        <div className="messages">
            {message && <p>{message}</p> }
        </div>
        <div className="post_img">
           {image && <img src={image} alt='post_img'/> } 
        </div>
        <div className="post_bottom">
            <div className="reactions">
                <ThumbUpIcon  className='icon' />
                <span>Like</span>
            </div>
            <div className="reactions">
                <SmsIcon  className='icon'  />
                <span>Comments</span>
            </div>
            <div className="reactions">
                <NearMeIcon  className='icon' />
                
                <span>Share</span>
            </div>
            <div className="reactions">
                <PersonPinIcon className='icon' />
                <KeyboardArrowDownIcon  className='icon' />
            </div>
        </div>
    </div>
  )
}

export default Posts
