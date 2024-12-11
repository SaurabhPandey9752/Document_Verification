import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Function to handle screen resizing
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false); // Close the menu on larger screens
    }
  };

  // Run handleResize on initial render and when the window is resized
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Call handleResize once to ensure correct menu state on initial load
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  const handleSignInClick = () => {
    navigate('/signin');
  };
  const handleAboutClick = () => {
    navigate('/about-us');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.jpeg" alt="Government Logo" className={styles.logoImg} />
        <img src="docchain.jpeg" alt="DocChain Logo" className={styles.logoImg} />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className={styles.closeIcon}>&times;</span>
        ) : (
          <>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </>
        )}
      </div>

      <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
        <button className={styles.btn} onClick={handleHomeClick}>Home</button>
        <button className={styles.btn} onClick={handleAboutClick}>About Us</button>
        <button className={styles.btn} onClick={handleSignUpClick}>Sign Up</button>
        <button className={`${styles.btn} ${styles.signUp}`} onClick={handleSignInClick}>Sign In</button>
      </nav>
    </header>
  );
}

export default Header;
