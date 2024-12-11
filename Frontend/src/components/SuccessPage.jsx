import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const name = location.state?.name || "User";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-8 w-11/12 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Hello {name}</h1>
        <p className="text-gray-700 mb-6">
          Success! Your wallet has been successfully created, and the
          credentials have been sent to your registered email ID.
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          onClick={() => {
            // Add functionality to redirect to the login page if needed
            console.log("Redirecting to login page...");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
