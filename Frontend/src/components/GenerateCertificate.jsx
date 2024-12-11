import React, { useState } from "react";
import { FaUser, FaBook, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import styles from "./GenerateCertificate.module.css";

const GenerateCertificate = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    date: "",
    issuer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generated Certificate Data:", formData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Generate Your E-Certificate</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            name="name"
            placeholder="Recipient's Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <FaBook className={styles.icon} />
          <input
            type="text"
            name="course"
            placeholder="Course Name"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <FaCalendarAlt className={styles.icon} />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <FaUniversity className={styles.icon} />
          <input
            type="text"
            name="issuer"
            placeholder="Issuer's Name"
            value={formData.issuer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Generate Certificate
        </button>
      </form>
    </div>
  );
};

export default GenerateCertificate;
