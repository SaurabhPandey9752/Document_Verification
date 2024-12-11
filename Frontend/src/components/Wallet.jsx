import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('tokens');
  const [tokens, setTokens] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    // Dummy data for now, to be replaced by actual backend data.
    setTokens([
      { type: 'Ethereum', balance: 5, profit: 0.2 },
    ]);
    setNfts([
      { name: 'CryptoKitty', value: 10 },
      { name: 'Bored Ape', value: 50 },
     
    ]);
    setActivity([
      { date: '2024-12-11', action: 'Transfer', status: 'Completed', amount: 1 },
      { date: '2024-12-10', action: 'Deposit', status: 'Pending', amount: 0.5 },
    ]);
  }, []);

  // Get the left position for the sliding bar
  const getSlidePosition = (tab) => {
    switch (tab) {
      case 'tokens':
        return '0%';
      case 'nfts':
        return '33.33%';
      case 'activity':
        return '66.66%';
      default:
        return '0%';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Main Wallet Container */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
  {/* Top Items Container */}
  <div className="relative">
    <div className="flex gap-6 mb-6">
      <div
        className={`cursor-pointer py-2 px-4 text-center w-full ${activeTab === 'tokens' ? 'font-semibold' : ''}`}
        onClick={() => setActiveTab('tokens')}
      >
        Tokens
      </div>
      <div
        className={`cursor-pointer py-2 px-4 text-center w-full ${activeTab === 'nfts' ? 'font-semibold' : ''}`}
        onClick={() => setActiveTab('nfts')}
      >
        NFTs
      </div>
      <div
        className={`cursor-pointer py-2 px-4 text-center w-full ${activeTab === 'activity' ? 'font-semibold' : ''}`}
        onClick={() => setActiveTab('activity')}
      >
        Activity
      </div>
    </div>
    {/* Sliding Bar */}
    <div
      className="absolute bottom-0 left-0 h-1 bg-blue-500"
      style={{
        width: '33.33%',
        left: getSlidePosition(activeTab),
        transition: 'left 0.3s ease, width 0.3s ease',
      }}
    />
  </div>

  {/* Content Based on Active Tab */}
  <div className="mb-6" style={{ maxHeight: '250px', overflowY: 'auto' }}>
    {activeTab === 'tokens' && (
      <div>
        <h3 className="text-2xl font-semibold mb-4">Tokens</h3>
        {tokens.map((token, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl">{token.type}</h4>
            <p>Balance: {token.balance} ETH</p>
            <p>Profit: {token.profit} ETH</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add More</button>
          </div>
        ))}
      </div>
    )}

    {activeTab === 'nfts' && (
      <div>
        <h3 className="text-2xl font-semibold mb-4">NFTs</h3>
        {nfts.map((nft, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl">{nft.name}</h4>
            <p>Value: {nft.value} ETH</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add NFT</button>
          </div>
        ))}
      </div>
    )}

    {activeTab === 'activity' && (
      <div>
        <h3 className="text-2xl font-semibold mb-4">Activity</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {activity.map((act, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{act.date}</td>
                <td className="py-2 px-4 border-b">{act.action}</td>
                <td className="py-2 px-4 border-b">{act.status}</td>
                <td className="py-2 px-4 border-b">{act.amount} ETH</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</div>


      {/* Total Assets Container */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Total Assets</h3>
        <div className="flex justify-between mb-6">
          <div>
            <p>Total Assets: 100 ETH</p>
            <p>Total Deposit: 50 ETH</p>
          </div>
          <div>
            <button className="px-4 py-2 bg-green-500 text-white rounded mr-4">
              <FaArrowCircleUp /> Receive
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded">
              <FaArrowCircleDown /> Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
