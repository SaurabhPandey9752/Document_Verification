import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IssuedCertificatePage.module.css";
import CertificateTemplatePage from "./CertificateTemplatePage"; // Import the new component

const dummyCertificates = [
  { id: "CERT001", issuedTo: "John Doe", issuedBy: "Organization Name", status: "Published" },
  { id: "CERT002", issuedTo: "Jane Smith", issuedBy: "Organization Name", status: "InProgress" },
  { id: "CERT003", issuedTo: "Emily Davis", issuedBy: "Organization Name", status: "Published" },
  { id: "CERT004", issuedTo: "Michael Brown", issuedBy: "Organization Name", status: "Published" },
  { id: "CERT005", issuedTo: "Chris Johnson", issuedBy: "Organization Name", status: "Published" },
  { id: "CERT006", issuedTo: "Patricia Wilson", issuedBy: "Organization Name", status: "InProgress" },
];

const IssuedCertificatePage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [userIcon, setUserIcon] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const navigate = useNavigate(); // Hook for navigating to routes

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUserIcon(URL.createObjectURL(file));
    }
  };

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  const filteredCertificates = dummyCertificates.filter((cert) =>
    cert.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "Issued Certificate") {
      navigate("/issuedcertificatesignin"); // Navigate to the specified route
    }
  };

  return (
    <div className={styles.container}>
      {/* Top Navigation */}
      <div className={styles.navbar}>
        <div
          className={`${styles.tab} ${activeTab === "Dashboard" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("Dashboard")}
        >
          Dashboard
        </div>
        <div
          className={`${styles.tab} ${activeTab === "Issued Certificate" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("Issued Certificate")}
        >
          Issue a Certificate
        </div>
        <div className={styles.userIcon}>
          <label htmlFor="uploadIcon">
            <img
              src={userIcon || "https://via.placeholder.com/30"}
              alt="User Icon"
              className={styles.icon}
            />
          </label>
          <input
            type="file"
            id="uploadIcon"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
      </div>

      {/* Dashboard Content */}
      {activeTab === "Dashboard" ? (
        <div className={styles.certificateContent}>
          {/* Search Bar */}
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Enter Certificate ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}></button>
          </div>

          {/* Heading */}
          <h2 className={styles.heading}>
            Certificates Issued by <span>Organization Name</span>
          </h2>

          {/* Certificates Table */}
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Certificate ID</th>
                  <th>Issued To</th>
                  <th>Issued By</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCertificates.length > 0 ? (
                  filteredCertificates.map((cert) => (
                    <tr key={cert.id}>
                      <td>{cert.id}</td>
                      <td>{cert.issuedTo}</td>
                      <td>{cert.issuedBy}</td>
                      <td>{cert.status}</td>
                      <td>
                        <button
                          className={styles.viewButton}
                          onClick={() => handleViewCertificate(cert)}
                        >
                          View Certificate
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className={styles.noData}>
                      No Certificates Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <CertificateTemplatePage /> // Render the new template component
      )}

      {/* Modal for Viewing Certificate */}
      {selectedCertificate && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Certificate Details</h3>
            <p>
              <strong>Certificate ID:</strong> {selectedCertificate.id}
            </p>
            <p>
              <strong>Issued To:</strong> {selectedCertificate.issuedTo}
            </p>
            <p>
              <strong>Issued By:</strong> {selectedCertificate.issuedBy}
            </p>
            <p>
              <strong>Status:</strong> {selectedCertificate.status}
            </p>
            <div className={styles.dummyDocument}>
              <p>Dummy Certificate Document</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssuedCertificatePage;
