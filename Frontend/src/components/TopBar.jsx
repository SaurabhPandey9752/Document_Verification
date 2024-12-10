import React from 'react';
import styles from './TopBar.module.css'; // Importing CSS Module

function TopBar() {
  return (
    <div className={styles.topBar}>
      <span className={styles.imageSpam}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
          alt="Indian Flag" 
          className={styles.flagIcon} 
        />
        <span className={styles.govtText}>Government of India</span>
      </span>
      <span className={styles.skipContent}>Skip to Main Content</span>
    </div>
  );
}

export default TopBar;
