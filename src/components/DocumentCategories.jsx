import React from "react";
import styles from "./DocumentCategories.module.css";

const categories = [
  { icon: "govt.png", label: "Central Government" },
  { icon: "govt.png", label: "State Government" },
  { icon: "military.png", label: "Ministry of Defence" },
  { icon: "transport.png", label: "Transport & Infrastructure" },
  { icon: "service.png", label: "National Service Scheme" },
  { icon: "identify.svg", label: "Identity Docs" },
  { icon: "edu.png", label: "Education & Learning" },
  { icon: "money.png", label: "Banking, Financial Services and…" },
  { icon: "health.png", label: "Health & Wellness" },
  { icon: "sports.svg", label: "Sports & Culture" },
  { icon: "Gov_sector.svg", label: "Government & Public Sector" },
  { icon: "industry.svg", label: "Industry & Private Sector" },
  { icon: "skills.svg", label: "Skill & Vocational" },
  { icon: "docu.png", label: "Most Popular Documents" },
];

const DocumentCategories = () => {
  return (
    <div className={styles.categoriesSection}>
      <h2 className={styles.title}>Find Documents based on Categories</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryItem}>
            <img
              src={category.icon}
              alt={`${category.label} Icon`}
              className={styles.categoryIcon}
            />
            <p className={styles.categoryLabel}>{category.label}</p>
          </div>
        ))}
      </div>
      <button className={styles.viewMoreButton}>
        <span role="img" aria-label="search">
          🔍
        </span>{" "}
        View More Documents
      </button>
    </div>
  );
};

export default DocumentCategories;
