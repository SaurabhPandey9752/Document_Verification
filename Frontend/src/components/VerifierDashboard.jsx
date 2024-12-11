import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFileAlt, FaWallet } from "react-icons/fa";
import styles from "./VerifierDashboard.module.css";

const VerifierDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Verifier Dashboard</h1>
      <div className={styles.cardContainer}>
        {/* Request Access Card */}
        <div
          className={styles.card}
          onClick={() => navigate("/request-access")}
        >
          <FaRegFileAlt className={styles.icon} />
          <h2 className={styles.cardTitle}>Request Access</h2>
          <p className={styles.cardDescription}>
            Request access to view or verify specific documents.
          </p>
        </div>

        {/* View Wallet Card */}
        <div
          className={styles.card}
          onClick={() => navigate("/view-wallet")}
        >
          <FaWallet className={styles.icon} />
          <h2 className={styles.cardTitle}>View Wallet</h2>
          <p className={styles.cardDescription}>
            Access your wallet to view all verified documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifierDashboard;
