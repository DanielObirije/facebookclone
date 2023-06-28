// import React from "react";
import React, { useState, useEffect } from 'react';
import { ReactComponent as Sun } from '../img/Sun.svg'
import { ReactComponent as Moon } from "../img/Moon.svg";
import "./darkmood.css";

const DarkMode = () => {
    // const setdarkTheme =(()=>{
    //     document.querySelector('.container').setAttribute('data-theme','dark')
    //     localStorage.setItem('selectedTheme','dark')
    // })
    // const setlightTheme =(()=>{
    //     document.querySelector('.container').setAttribute('data-theme','light')
    //     localStorage.setItem('selectedTheme','light')
    // })
   
    // const toggleTheme =((e)=>{
    //   e.target.checked ? setdarkTheme() : setlightTheme()
    // })

    // const selectedTheme = localStorage.getItem('selectedTheme')
    // selectedTheme === 'dark' && setdarkTheme()

    
    
    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selectedTheme'));

  useEffect(() => {
    selectedTheme === 'dark' ? setDarkTheme() : setLightTheme();
  }, [selectedTheme]);

  const setDarkTheme = () => {
    document.querySelector('.container').setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
  };

  const setLightTheme = () => {
    document.querySelector('.container').setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
  };

  const toggleTheme = (e) => {
    e.target.checked ? setDarkTheme() : setLightTheme();
  };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark'}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
// "./Sun.svg";