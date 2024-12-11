import React, { useState, useEffect } from 'react';
import MyDocs from './MyDocs';
import Wallet from './Wallet';
import Notification from './Notification'; // Import the Notification component

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [user, setUser] = useState({
    profilePicture: '',
    name: '',
    email: '',
    username: '',
    password: '',
  });
  const [documents, setDocuments] = useState([]);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Message',
      message: 'You have received a new message.',
      isRead: false,
    },
    {
      id: 2,
      title: 'System Update',
      message: 'Your system has been updated successfully.',
      isRead: true,
    },
    // Add more notifications as needed
  ]);

  useEffect(() => {
    // Fetch user data from backend
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));

    // Fetch documents data from backend
    fetch('/api/user/documents')
      .then((res) => res.json())
      .then((data) => setDocuments(data))
      .catch((err) => console.error(err));
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 rounded-lg m-4 shadow-md">
        <div className="flex items-center gap-4 mb-8">
          <img
            src={user.profilePicture || 'https://via.placeholder.com/150'}
            alt="User Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-bold">{user.name || 'User Name'}</h2>
            <p className="text-sm text-gray-400">{user.email || 'user@example.com'}</p>
          </div>
        </div>
        <nav>
          <ul>
            <li
              className={`py-2 px-4 rounded-md cursor-pointer ${
                activeSection === 'profile' ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveSection('profile')}
            >
              Profile
            </li>
            <li
              className={`py-2 px-4 rounded-md cursor-pointer ${
                activeSection === 'myDocs' ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveSection('myDocs')}
            >
              My Docs
            </li>
            <li
              className={`py-2 px-4 rounded-md cursor-pointer ${
                activeSection === 'wallet' ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveSection('wallet')}
            >
              Wallet
            </li>
            <li
              className={`py-2 px-4 rounded-md cursor-pointer ${
                activeSection === 'notifications' ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveSection('notifications')}
            >
              Notifications
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6 rounded-lg m-4 shadow-md">
        {activeSection === 'profile' && (
          <section>
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <form className="space-y-4">
              {/* Profile Picture */}
              <div className="text-center">
                <label htmlFor="profilePicture" className="cursor-pointer">
                  <img
                    src={user.profilePicture || 'https://via.placeholder.com/150'}
                    alt="User Profile"
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <p className="text-sm text-gray-600">Change Profile Picture</p>
              </div>
              {/* Name and Username in one row */}
              <div className="flex gap-4 ml-[280px]">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={user.name || ''}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium">Username</label>
                  <input
                    type="text"
                    value={user.username || ''}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              {/* Email and Password in one row */}
              <div className="flex gap-4 ml-[280px]">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={user.email || ''}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={user.password || ''}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              {/* Save Changes Button */}
              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        )}

        {activeSection === 'myDocs' && <MyDocs documents={documents} />}

        {activeSection === 'wallet' && <Wallet />}

        {activeSection === 'notifications' && (
          <section>
            <h1 className="text-2xl font-bold mb-4">Notifications</h1>
            {notifications.map((notification) => (
              <Notification
                key={notification.id}
                notification={notification}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
