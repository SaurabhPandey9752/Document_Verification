import React from "react";
import styles from "./DocumentWallet.module.css";

const DocumentWallet = () => {
  return (
    <div className={styles.statisticsSection}>
      <div className={styles.textContent}>
        <h2>Document Wallet to Empower Citizens</h2>
        <p>
        Doc-Chain is a flagship initiative of the Ministry of Power under the Digital India programme. Doc-Chain aims at 'Digital Empowerment' of citizens by providing access to authentic digital documents through the citizen's digital document wallet. DocChain is a secure cloud-based platform for the storage, sharing, and verification of documents & certificates.

        </p>
      </div>
      <div className={styles.statsBox}>
        <div className={styles.statsItemsWrapper}>
          <div className={styles.statsItem}>
            <img
              src="teamwork.png"
              alt="Registered Users Icon"
              className={styles.statsIcon}
            />
            <h3>357.54 Million</h3>
            <p>Registered Users</p>
          </div>
          <div className={styles.statsItem}>
            <img
              src="documents.png"
              alt="Issued Documents Icon"
              className={styles.statsIcon}
            />
            <h3>7.76 Billion</h3>
            <p>Issued Documents</p>
          </div>
        </div>
        <button className={styles.statsButton}>View Statistics →</button>
      </div>
    </div>
  );
};

export default DocumentWallet;
  