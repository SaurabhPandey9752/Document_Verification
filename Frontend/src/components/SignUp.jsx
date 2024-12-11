import React from 'react';
import { Link } from 'react-router-dom'; // Link for navigation
import styles from './SignUp.module.css'; // Importing CSS Module for styling

function SignUp() {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.content}>
        <h2>Sign up for Doc-Chain</h2>
      

        <div className={styles.planChoices}>
          <div className={styles.plan}>
            <h3>
              <Link to="/usersignup" className={styles.link}>User</Link>
            </h3>
            <p>I am here to view my certificates</p>
          </div>
          <div className={styles.plan}>
            <h3>
              <Link to="/issuingauthoritysignup" className={styles.link}>Issuing Authority</Link>
            </h3>
            <p>I am here to issue certificates</p>
          </div>
          <div className={styles.plan}>
            <h3>
              <Link to="/verifyingauthoritysignup" className={styles.link}>Verifying Authority</Link>
            </h3>
            <p>I am here to verify certificates</p>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>Have a question, or need help?</h3>
          
        </div>
      </div>
    </div>
  );
}

export default SignUp;
