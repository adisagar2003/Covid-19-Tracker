import React from 'react'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <div>
   <div className={styles.navbar}>
     
     <a className={styles.navLink} href='/'>HOME</a>
     <a  className={styles.navLink} href='/'>Link</a>
     <a className={styles.navLink} href='/'>Link</a>
     <a className={styles.navLink} href='/'>Link</a>
     <a className={styles.navLink} href='/'>Link</a>
       
   </div>
    </div>
  )
}

export default Nav
