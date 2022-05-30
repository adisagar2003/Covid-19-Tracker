import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import './Navbar.css'
import styles from './Navbar.module.css'
import styled from 'styled-components';
function Navbar() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    
  };
  return (
    <div className={styles.Navbar}>

      <span><Link to='/' style={linkStyle} >Home</Link></span>
      <span><Link to='/data' style={linkStyle}>Data</Link></span>
      <span><Link to='/3d'>3d</Link></span>
     
      <span><Link to='/chart'>Chart</Link></span>

    </div>
  )
}

export default Navbar
