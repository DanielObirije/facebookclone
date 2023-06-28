import React from 'react'
import './FeedStory.css'
import { Avatar} from '@mui/material';
function FeedStory({backgroundUrl,title,photoUrl}) {
  return (
     <div style={{backgroundImage:`url(${backgroundUrl})` }} className='feedStory'> 
          {photoUrl && <Avatar className='storyAvater' src={photoUrl}/> }  
         { title &&  <h4>{title}</h4>}  
     </div>

  )
}

export default FeedStory
