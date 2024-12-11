import React, { useState } from "react"; 
import { FaFileAlt, FaKey, FaIdCard } from "react-icons/fa"; // Importing the icons
import styles from "./AccessDocument.module.css";

const AccessDocument = () => {
  const [formData, setFormData] = useState({
    documentType: "",
    uid: "",
    publicKey: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Requesting Access for Document:", formData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Access Document</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <FaFileAlt className={styles.icon} /> Document Type
        </label>
        <input
          type="text"
          name="documentType"
          value={formData.documentType}
          onChange={handleChange}
          placeholder="e.g., Transcript, Certificate"
          required
        />
        
        <label>
          <FaIdCard className={styles.icon} /> UID
        </label>
        <input
          type="text"
          name="uid"
          value={formData.uid}
          onChange={handleChange}
          placeholder="Unique Identifier"
          required
        />
        
        <label>
          <FaKey className={styles.icon} /> Public Key
        </label>
        <input
          type="text"
          name="publicKey"
          value={formData.publicKey}
          onChange={handleChange}
          placeholder="Public Key of the User"
          required
        />
        
        <button type="submit" className={styles.button}>
          <FaFileAlt className={styles.buttonIcon} /> Request Access
        </button>
      </form>
    </div>
  );
};

export default AccessDocument;
