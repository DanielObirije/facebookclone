import React from 'react'
import './Iframe.css'
import DarkMode from '../darkmood/Darkmood'
function Iframe() {
  return (
    <div className='iframe'>
      <DarkMode/>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdaniel.obirije&tabs=timeline&width=400px&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="200px" height="600"  style={{border:'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default Iframe
// style={{border:'none', overflow: 'hidden'}