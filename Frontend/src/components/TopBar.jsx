import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./TopBar.module.css"; // Importing CSS Module

function TopBar() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNavigation = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className={styles.topBar}>
      <span className={styles.imageSpam} onClick={handleNavigation} style={{ cursor: "pointer" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="Indian Flag"
          className={styles.flagIcon}
        />
        <span className={styles.govtText}>Government of India</span>
      </span>
      <span
        className={styles.skipContent}
        onClick={handleNavigation}
        style={{ cursor: "pointer" }}
      >
        Skip to Main Content
      </span>
    </div>
  );
}

export default TopBar;
