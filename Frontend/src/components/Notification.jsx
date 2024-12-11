import React, { useState } from 'react';

const Notification = ({ notification }) => {
  const [isRead, setIsRead] = useState(notification.isRead || false);

  const handleMarkAsRead = () => {
    setIsRead(true);
    // Optionally, here you can also make an API call to mark it as read on the server
  };

  return (
    <div
      className={`flex justify-between items-center p-4 mb-2 rounded-md ${isRead ? 'bg-gray-200' : 'bg-gray-100'}`}
    >
      <div>
        <p className="font-semibold">{notification.title}</p>
        <p className="text-sm text-gray-600">{notification.message}</p>
      </div>
      <button
        onClick={handleMarkAsRead}
        className={`px-4 py-2 text-white rounded-md ${isRead ? 'bg-gray-500' : 'bg-blue-500'}`}
      >
        {isRead ? 'Read' : 'Mark as Read'}
      </button>
    </div>
  );
};

export default Notification;
