import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate(); // Hook for navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state (open or closed)

  const handleSignInClick = () => {
    navigate('/signup'); // Navigate to Sign In page when clicked
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to Home page when clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="emblem.jpeg" alt="Government Logo" />
        <h1>DigiLocker</h1>
      </div>

      {/* Hamburger Icon for smaller screens */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className={styles.closeIcon}>&times;</span> // Close icon when menu is open
        ) : (
          <>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </>
        )}
      </div>

      <div className={`${styles.headerButtons} ${isMenuOpen ? styles.active : ''}`}>
        <button className={styles.btn} onClick={handleHomeClick}>Home</button> {/* Home button */}
        <button className={styles.btn}>Become a Partner</button>
        <button className={styles.btn} onClick={handleSignInClick}>Sign Up</button>
        <button className={`${styles.btn} ${styles.signUp}`}>Sign In</button>
      </div>
    </header>
  );
}

export default Header;
