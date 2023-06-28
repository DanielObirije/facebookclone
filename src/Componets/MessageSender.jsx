import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useStateValue } from '../StateProvider';
import { db } from '../Firebase';
import { collection,addDoc } from 'firebase/firestore';
// import { firebase } from 'firebase';
import { Timestamp} from '@firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
function MessageSender() {
    const [{user},dispatch] = useStateValue()
    const [URL,setURL] = useState('')
    const [text,settext] = useState('')
     const dbValue = collection(db,'Posts')
   
    const handleSubmit= async(e)=>{
         e.preventDefault()
         await addDoc(dbValue,{
            image: URL,
            message: text,
            profilePic: user.photoURL,
            timestamp: serverTimestamp(),
            userName: user.displayName
         }  )
    
         
         setURL('')
         settext('')
    }

  return (
    <div className='messageSender'>
        <div className="messageSender_top">
            <Avatar src={user.photoURL}/>
            <form>
                <input placeholder='Whats on your mind ?' value={text} onChange={(e)=> settext(e.target.value)} className='messageSender_input'/>
                <input placeholder='image URL (optional)' value={URL} onChange={(e)=> setURL(e.target.value)}/>
                <button onClick={handleSubmit}  type='submit'> Hidden submit</button>
            </form>
        </div>
        <div className="messageSender_buttom">
            <div className="messageSender_options">
                <div className="options">
                    <VideocamIcon style={{color: '#fd0d0d'}} />
                    <h4>Live Video</h4>
                </div>
                <div className="options">
                    <PhotoLibraryIcon style={{color: 'green'}}/>
                    <h4>Photo/video</h4>
                </div>
                <div className="options">
                    <TagFacesIcon style={{color: 'orange'}}/>
                    <h4> Feeling/Activity</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageSender
