import React from 'react'
import styles from  './Header.module.css'
import '../Fonts/Fauna.ttf'
function Header() {
  return (
    <div className={styles.title}>
    <span class={styles.name}>Aditya Sagar's</span><br></br>
    
    <span class={styles.trackerTitle}>COVID TRACKER</span>
    </div>
  )
}

export default Header
