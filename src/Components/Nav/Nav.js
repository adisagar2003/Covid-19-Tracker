import React from 'react'
import styles from './Nav.module.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function Nav() {
  return (
    <div>
      <BrowserRouter>
   <div className={styles.navbar}>

   <Link to="/">
     <a className={styles.navLink} >HOME</a></Link>
     <Link to='/piechart'>
     <a  className={styles.navLink} >Link</a></Link>
     <Link to='/bargraph'>
     <a className={styles.navLink}>Link</a></Link>
     <a className={styles.navLink} href='/'>Link</a>
     <a className={styles.navLink} href='/'>Link</a>
       
   </div>
   </BrowserRouter>
    </div>
  )
}

export default Nav
