import React from "react";
import styles from "./AccessInformation.module.css";

const AccessInformation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Access Information</h2>
      <p className={styles.description}>
        Retrieve user information securely using ZK proof verification.
      </p>
    </div>
  );
};

export default AccessInformation;
