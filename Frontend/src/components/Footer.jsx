import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h4>Doc-Chain</h4>
          <p>
            Doc-Chain aims at ‘Digital Empowerment’ of citizens by providing
            access to authentic digital documents in a secure digital wallet.
          </p>
          <div className={styles.footerSocialIcons}>
            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="twitter.png" alt="X" /></a>
            <a href="#"><img src="insta.png" alt="Instagram" /></a>
            <a href="#"><img src="linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="yt.png" alt="YouTube" /></a>
          </div>
          <p>
            Visits: 344,189<br />
            Since Oct 28, 2024
          </p>
        </div>
        <div className={`${styles.footerSection} ${styles.footerLinks}`}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div className={`${styles.footerSection} ${styles.footerLinks}`}>
          <h4>Support</h4>
          <ul>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Download App</h4>
          <div className={styles.downloadAppIcons}>
            <a href="#"><img src="playStore.png" alt="Google Play" /></a>
            <a href="#"><img src="appStore.png" alt="App Store" /></a>
          </div>
          <p>Last Updated: 12 Nov 2024</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; 2024, Website maintained by National eGovernance Division (NeGD).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
