import React from "react";
import { useNavigate } from "react-router-dom";

const IssuingAuthoritySignup = () => {
  const navigate = useNavigate();

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
          <label className="block text-gray-700 font-semibold text-sm">
            Type of Organization
            <input
              type="text"
              placeholder="Type of Organization"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </label>
          <label className="block text-gray-700 font-semibold text-sm">
            Name of Organization
            <input
              type="text"
              placeholder="Name of Organization"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </label>
          <label className="block text-gray-700 font-semibold text-sm">
            Email ID
            <input
              type="email"
              placeholder="Email ID"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </label>
          <label className="block text-gray-700 font-semibold text-sm">
            Password
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </label>
          <label className="block text-gray-700 font-semibold text-sm">
            Confirm Password
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </label>
          <div className="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              I agree to the Terms and Conditions
            </label>
          </div>
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
