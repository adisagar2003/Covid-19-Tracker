import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import {FaEnvelope} from 'react-icons/fa';
import {FaCode} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaGripfire} from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
      <div className='covidTitleName'>
    COVID TRACKER<br></br>
    <span className='icons'>
     <a className='github' href='https://github.com/adisagar2003'> <FaGithub /></a>  <a className='envelope' mailto='adityasagarpython@gmail.com'><FaEnvelope /></a>   <a className='envelope' href=''><FaCode /></a> 
      
    </span>
      </div>
    <div className='technologiesUsed'>
      <span className='technologiesUsed__title'>Technologies Used</span>
      <br></br>
      <br></br>
      <span className='technologiesUsed__icons'>

      <FaReact />  <FaCss3 />  <FaGripfire /></span>
     
    </div>
    <div className='lastQuotations'>
    <span className='lastQuotations__title'> </span>
<i>@made by <a href='https://github.com/adisagar2003'>Aditya Sagar</a></i>
    </div>    
    </div>
  )
}

export default Footer
