import React, { useState } from "react";
import { FaFileUpload, FaFileAlt, FaListAlt } from "react-icons/fa";
import styles from "./UploadCertificate.module.css";

const UploadCertificate = () => {
  const [documentType, setDocumentType] = useState("Transcript");
  const [otherType, setOtherType] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Document:", {
      documentType: documentType === "Other" ? otherType : documentType,
      file,
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Upload Your Scanned Certificate</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <FaListAlt className={styles.icon} />
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            required
          >
            <option value="Transcript">Transcript</option>
            <option value="Birth Certificate">Birth Certificate</option>
            <option value="Aadhaar">Aadhaar</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {documentType === "Other" && (
          <div className={styles.inputGroup}>
            <FaFileAlt className={styles.icon} />
            <input
              type="text"
              placeholder="Specify Document Type"
              value={otherType}
              onChange={(e) => setOtherType(e.target.value)}
              required
            />
          </div>
        )}
        <div className={styles.inputGroup}>
          <FaFileUpload className={styles.icon} />
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit" className={styles.button}>
          Upload Document
        </button>
      </form>
    </div>
  );
};

export default UploadCertificate;
