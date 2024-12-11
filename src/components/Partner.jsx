import React from "react";
import styles from "./Partner.module.css"; // Import the CSS Module

const Partner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerText}>
          Doc-Chain is a secure cloud-based platform for storage, sharing and
          verification of documents & certificates
        </p>
        <button className={styles.headerButton}>SIGN UP NOW</button>
      </div>

      <div className={styles.content}>
        <div className={styles.leftCard}>
          <h2 className={styles.cardTitle}>Become a DigiLocker Partner Organization</h2>
          <p className={styles.cardDescription}>
            Get registered as a DigiLocker Issuer or Requester!
          </p>
          <img
            src="Group.png"
            alt="Partnership"
            className={styles.partnershipImage}
          />
          <button className={styles.cardButton}>GET REGISTERED</button>
        </div>

        <div className={styles.rightCard}>
          <h3 className={styles.appText}>Download DigiLocker App</h3>
          <div className={styles.rightContent}>
            <div className={styles.qrSection}>
              <img
                src="qrcode.png" 
                alt="QR Code"
                className={styles.qrImage}
              />
              <div className={styles.appIcons}>
                <img
                  src="playStore.png" 
                  alt="Google Play"
                  className={styles.appIconImage}
                />
                <img
                  src="appStore.png" 
                  alt="App Store"
                  className={styles.appIconImage}
                />
              </div>
            </div>
            <img
              src="phone.png" 
              alt="DigiLocker App Preview"
              className={styles.phoneImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
