import React, { useState } from 'react';

const MyDocs = () => {
  // Dummy documents data
  const documents = [
    { id: 1, title: 'ID Card - John Doe', description: 'A copy of my ID card.', type: 'idCard' },
    { id: 2, title: 'Certificate - Web Development', description: 'Certificate for completing the web development course.', type: 'certificate' },
    { id: 3, title: 'Electricity Bill - May 2024', description: 'My electricity bill for the month of May 2024.', type: 'bill' },
    { id: 4, title: 'License - Driver\'s License', description: 'Copy of my driver\'s license.', type: 'license' },
    { id: 5, title: 'Other Document', description: 'Some other important document.', type: 'other' },
  ];

  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setShowAll(false); // Reset 'View All' to false when a new filter is applied
  };

  const filteredDocuments = documents.filter((doc) => {
    if (filter === 'all') return true;
    return doc.type === filter;
  });

  const handleViewAll = () => {
    setShowAll(true);
  };

  // Show either all documents or filtered documents based on showAll state
  const documentsToDisplay = showAll ? documents : filteredDocuments;

  return (
    <section className="overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">My Documents</h1>
      <div className="flex justify-between mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleViewAll}
        >
          View All
        </button>
        <select
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          onChange={handleFilterChange}
        >
          <option value="all">Filter by Type</option>
          <option value="idCard">ID Card</option>
          <option value="certificate">Certificate</option>
          <option value="bill">Bill</option>
          <option value="license">License</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      {/* Document List */}
      <div
        className={`grid gap-4 ${showAll ? 'h-auto' : 'overflow-y-auto'} `}
        style={{
          maxHeight: showAll ? 'none' : '500px', // Remove height restriction when showing all docs
          overflowY: 'auto', // Add vertical scrolling
        }}
      >
        {documentsToDisplay.map((doc) => (
          <div
            key={doc.id}
            className="p-4 bg-white shadow-md rounded-md border"
          >
            <h3 className="font-semibold">{doc.title}</h3>
            <p className="text-sm text-gray-600">{doc.description}</p>
            <p className="mt-2 font-medium text-gray-500">Type: {doc.type}</p>
            <button className="mt-2 text-white">View</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyDocs;
