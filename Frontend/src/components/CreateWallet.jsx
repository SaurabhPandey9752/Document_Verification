import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CreateWallet = () => {
  const [walletDetails, setWalletDetails] = useState({
    name: "",
    phone: "",
    details: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || "User";

  const handleCreateWallet = () => {
    navigate("/success", { state: { name } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-8 w-11/12 max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Hello {name}</h1>
        <p className="text-center text-gray-700 mb-6">
          Great! Next, create your wallet:
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={walletDetails.name}
              onChange={(e) =>
                setWalletDetails({ ...walletDetails, name: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              value={walletDetails.phone}
              onChange={(e) =>
                setWalletDetails({ ...walletDetails, phone: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Details
            </label>
            <textarea
              placeholder="Details"
              value={walletDetails.details}
              onChange={(e) =>
                setWalletDetails({ ...walletDetails, details: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
          <button
            type="button"
            onClick={handleCreateWallet}
            className="w-full bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Create Wallet
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWallet;
