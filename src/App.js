import React from 'react'
import { useStateValue } from './StateProvider'
import Header from './Componets/Header'
import Sidebar from './Componets/Sidebar'
import Feed from './Componets/Feed'
import './App.css'
import Login from './Componets/Login'
import Iframe from './Componets/Iframe'

function App() {
  const [{user},dispatch] = useStateValue()
  const selectedTheme = localStorage.getItem('selectedTheme')
  return (
    <div data-theme={selectedTheme}  className='container'>
      {!user ?  <Login/> :  <>
      
      <Header/>
         <div className='app_Body'>
            <Sidebar/>
            <Feed/>
            <Iframe/>
          </div>
       
      
          </> }
        
    </div>
  )
}

export default App
