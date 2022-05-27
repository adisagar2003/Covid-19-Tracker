import React from 'react'
import styles from './GraphLayout.module.css'
function GraphLayout() {
    myChart.destroy();
  return (
    <div className={styles.layout}>
      <span className={styles.dataHeading}>Data</span>
    </div>
  )
}

export default GraphLayout
