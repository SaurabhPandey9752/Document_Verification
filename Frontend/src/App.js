import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './App.css'; // Import global styles
import TopBar from './components/TopBar'; // Import TopBar component
import Header from './components/Header'; // Import Header component
import HomePage from './components/HomePage'; // Import HomePage component
// import SignIn from './components/SignIn'; // Import SignIn page
import SignUp from './components/SignUp';
// import SignUp from './components/SignUp'; // Import SignUp page (new page)
import Footer from './components/Footer'; // Import Footer component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserSignUp from './components/UserSignUp';
import IssuingAuthoritySignup from './components/IssusingAuthoritySignup';
import VerifyEmail from './components/VerifyEmail';
import CreateWallet from './components/CreateWallet';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <Router> {/* Wrap the entire application in Router */}
      <div className="App">
        {/* Always render TopBar, Header, and Footer */}
        <TopBar />
        <Header />

        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Render HomePage component for home route */}
          <Route path="/signup" element={<SignUp />} /> {/* Render SignIn component for /signin route */}
          <Route path="/usersignup" element={<UserSignUp/>} /> {/* Render SignUp component for /signup route */}
          <Route path="/issuingauthoritysignup" element={<IssuingAuthoritySignup/>}/>
          <Route path="/verifyingauthoritysignup" element={<IssuingAuthoritySignup/>}/>
          <Route path="/verify-email" element={<VerifyEmail/>}/>
          <Route path="/create-wallet" element={<CreateWallet/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
        </Routes>

        {/* Always render Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
