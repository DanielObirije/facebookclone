import React from 'react'
import { Avatar } from '@mui/material';
import './SidebarRow.css'

function SidebarRow({Icon,text,src}) {
  return (
    <div className='sidebar_Row'>
       {Icon && <Icon/>}
       {src && <Avatar src={src}/>}
       <h4> {text && text}</h4>
    </div>
  )
}

export default SidebarRow
