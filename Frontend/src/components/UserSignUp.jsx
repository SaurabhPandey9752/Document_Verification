import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserSignUp.module.css";

const UserSignUp = () => {
  const [username, setUsername] = useState(""); // New state for username
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username, // Include username in the payload
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Sign Up Successful! Please verify your email.");
        navigate("/verify-email");
      } else {
        alert(data.message || "Sign Up Failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.header}>Sign Up for Doc-Chain</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.nameRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.nameRow}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              By signing up, you agree to our{" "}
              <span className={styles.link}>Terms of Service</span> and{" "}
              <span className={styles.link}>Privacy Policy</span>.
            </label>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!agree}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
