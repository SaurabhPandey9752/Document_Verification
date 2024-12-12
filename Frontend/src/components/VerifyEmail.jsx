import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "pandeysaurabh9752@gmail.com";

  const handleInputChange = (value, index) => {
    if (/^\d$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleCreateAccount = () => {
    const verificationCode = code.join("");
    console.log("Entered Verification Code:", verificationCode);
    window.location.href= "http://localhost:3000/", { state: { name: "User" } };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-8 w-11/12 max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Hello User</h1>
        <p className="text-center text-gray-700 mb-6">
          We have sent a confirmation email to <b>{email}</b>. Please enter the
          six-digit verification code below.
        </p>
        <div className="flex space-x-2 justify-center mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`digit-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e.target.value, index)}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <button
          onClick={handleCreateAccount}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition w-full"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
