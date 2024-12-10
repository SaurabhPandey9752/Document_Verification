import React from "react";
import styles from "./Steps.module.css"; // Import the CSS Module

const Steps = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Getting started is quick and easy</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.icon}>
            <img
              src="register.svg"
              alt="Register"
              className={styles.iconImage}
            />
          </div>
          <p className={styles.text}>Register Yourself</p>
        </div>
        <div className={styles.arrow}>→</div>

        <div className={styles.step}>
          <div className={styles.icon}>
            <img
              src="verify.svg"
              alt="Verify"
              className={styles.iconImage}
            />
          </div>
          <p className={styles.text}>Verify Yourself</p>
        </div>
        <div className={styles.arrow}>→</div>
        
        <div className={styles.step}>
          <div className={styles.icon}>
            <img
              src="fetch.svg"
              alt="Fetch"
              className={styles.iconImage}
            />
          </div>
          <p className={styles.text}>Fetch your Documents</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
