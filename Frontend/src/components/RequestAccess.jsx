import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RequestAccess.module.css";

const RequestAccess = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Request Access</h2>
      <div className={styles.cardContainer}>
        <div
          className={styles.card}
          onClick={() => navigate("/request-access/document")}
        >
          <h3 className={styles.cardTitle}>Access Document</h3>
          <p className={styles.cardDescription}>
            Enter details to access a specific document securely.
          </p>
        </div>
        <div
          className={styles.card}
          onClick={() => navigate("/request-access/information")}
        >
          <h3 className={styles.cardTitle}>Access Information</h3>
          <p className={styles.cardDescription}>
            Retrieve information using ZK proof-based verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestAccess;
