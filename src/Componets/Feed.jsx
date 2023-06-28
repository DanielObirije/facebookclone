
import { collection, onSnapshot ,doc,query, orderBy  } from 'firebase/firestore';
import { db } from '../Firebase';
import { getDoc } from 'firebase/firestore';
import FeedStory from './FeedStory';
import './Feed.css'
import  photo1 from '../img/pic1.jpg'
import  photo2 from '../img/pic2.jpg'
import  photo3 from '../img/pic3.jpg'
import  photo4 from '../img/pic4.jpg'
import  photo5 from '../img/pic5.jpg'
import  background1 from '../img/1.png'
import  background2 from '../img/2.png'
import  background3 from '../img/3.png'
import  background4 from '../img/4.png'
import  background5 from '../img/5.png'
import MessageSender from './MessageSender';
import Posts from '../Componets/Posts'
import { useEffect, useState } from 'react';




function Feed () { 
  const [posts, setposts] = useState();

   useEffect(()=>{
    const dbValue = collection(db, 'Posts');
    onSnapshot(
      query(dbValue, orderBy('timestamp','desc')), // Replace 'fieldName' with the actual field you want to order by
      (snapshot) => {
  
       setposts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
     
      }
    );
  
   },[])
  
  


  
 

  return (
    <div className="feedcontainer">
      <div className='feed'>
          <FeedStory  backgroundUrl={background1}title={'Burnaboy'} photoUrl={photo1}/>
          <FeedStory backgroundUrl={background2} title={'Manchester'} photoUrl={photo2}/>
          <FeedStory backgroundUrl={background3} title={'Santan'} photoUrl={photo3}/>
          <FeedStory backgroundUrl={background4} title={'InternetMc'} photoUrl={photo4}/>
          <FeedStory backgroundUrl={background5} title={'Xbox'} photoUrl={photo5}/>
      </div>
      <MessageSender/>
   
      { posts &&  posts.map((e)=> (<>
       <Posts timestamp={e.timestamp} image={e.image} profile={e.profilePic}
       username={e.userName} 
       message={e.message}/></>) 
      ) }
   
      {/* <Posts profile={photo1}  username={'Burnaboy'} 
      timestamp={'23 jun 14:00,GMT+1'} message={'lol new cat'}/>
      <Posts profile={photo1}  username={'danny'}
       timestamp={'23 jun 14:00,GMT+1'} message={'oyer oyer u don catch me'}/> */}
     
    </div>
  )
}

export default Feed