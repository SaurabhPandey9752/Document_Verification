import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCertificate, FaUpload } from "react-icons/fa"; // Importing icons
import styles from "./CertificateTemplatePage.module.css";

const CertificateTemplatePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Choose an Option</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card} onClick={() => navigate("/generate-certificate")}>
          <div className={styles.iconContainer}>
            <FaCertificate className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Generate Digital Certificate</h3>
          <p className={styles.cardDescription}>Create an e-certificate with details.</p>
        </div>
        <div className={styles.card} onClick={() => navigate("/upload-certificate")}>
          <div className={styles.iconContainer}>
            <FaUpload className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Upload Scanned Certificate</h3>
          <p className={styles.cardDescription}>Upload and manage scanned certificates.</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplatePage;
