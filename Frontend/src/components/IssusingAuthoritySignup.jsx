import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IssuingAuthoritySignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    orgName: "",
    orgWebsite: "",
    orgEmail: "",
    password: "",
    confirmPassword: "",
    orgPhone: "",
    orgIndustry: "",
    orgSize: "",
    orgCountry: "",
    terms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleVerifyEmail = () => {
    navigate("/verify-email");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-200 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl md:text-2xl font-bold text-black mb-8 text-center">
          Hello User
        </h1>
        <form className="w-full space-y-4">
          {/* Organization Name and Organization Website in a row */}
          <div className="flex space-x-4">
            <label className="flex-1 block text-gray-700 font-semibold text-sm">
              Organization Name
              <input
                type="text"
                name="orgName"
                placeholder="Organization Name"
                value={formData.orgName}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>

            <label className="flex-1 block text-gray-700 font-normal text-sm">
              Organization Website
              <input
                type="url"
                name="orgWebsite"
                placeholder="Organization Website"
                value={formData.orgWebsite}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>
          </div>

          {/* Organization Email Address and Phone Number in a row */}
          <div className="flex space-x-4">
            <label className="flex-1 block text-gray-700 font-semibold text-sm">
              Organization Email Address
              <input
                type="email"
                name="orgEmail"
                placeholder="Organization Email Address"
                value={formData.orgEmail}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>

            <label className="flex-1 block text-gray-700 font-semibold text-sm">
              Organization Phone Number
              <input
                type="tel"
                name="orgPhone"
                placeholder="Organization Phone Number"
                value={formData.orgPhone}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>
          </div>

          {/* Password and Confirm Password in a row */}
          <div className="flex space-x-4">
            <label className="flex-1 block text-gray-700 font-semibold text-sm">
              Password
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>

            <label className="flex-1 block text-gray-700 font-semibold text-sm">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>
          </div>

          {/* Organization Industry and Size in a row */}
          <div className="flex space-x-4">
            <label className="flex-1 block text-gray-700 font-semibold text-sm">
              Organization Industry
              <input
                type="text"
                name="orgIndustry"
                placeholder="Organization Industry"
                value={formData.orgIndustry}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>

            <label className="flex-1 block text-gray-700 font-semibold text-sm">
              Organization Size
              <input
                type="text"
                name="orgSize"
                placeholder="Organization Size"
                value={formData.orgSize}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>
          </div>

          {/* Organization Country in a row */}
          <div className="flex space-x-4">
            <label className="flex-1 block text-gray-700 font-semibold text-sm">
              Organization Country
              <input
                type="text"
                name="orgCountry"
                placeholder="Organization Country"
                value={formData.orgCountry}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </label>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </label>
          </div>

          {/* Verify Email Button */}
          <button
            type="button"
            onClick={handleVerifyEmail}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          >
            Verify Email Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default IssuingAuthoritySignup;
