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
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SignInOption from './components/SignInOption';
import IssuedCertificatePage from './components/IssuedCertificatePage';
import GenerateCertificate from './components/GenerateCertificate';
import UploadCertificate from './components/UploadCertificate';
import CertificateTemplatePage from './components/CertificateTemplatePage';
import RequestAccess from './components/RequestAccess';
import AccessDocument from './components/AccessDocument';
import AccessInformation from './components/AccessInformation';
import VerifierDashboard from './components/VerifierDashboard';
import UserLogin from './components/UserLogin';
import IssueLogin from './components/IssueLogin';
import VerifyLogin from './components/VerifyLogin';

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
          <Route path="/signin" element={<SignInOption/>}/>
          <Route path="/usersignin" element={<UserLogin/>} />
          <Route path="/usersigninsuccesful" element={<Dashboard/>} />
          <Route path="/issuedsignin" element={<IssueLogin/>} /> 
          <Route path="/issuedsigninsuccesful" element={<IssuedCertificatePage/>} /> 
          <Route path="/usersignup" element={<UserSignUp/>} /> {/* Render SignUp component for /signup route */}
          <Route path="/issuingauthoritysignup" element={<IssuingAuthoritySignup/>}/>
          <Route path="/verifyingauthoritysignup" element={<IssuingAuthoritySignup/>}/>
          <Route path="/issuedcertificatesignin" element={<CertificateTemplatePage/>} />
          <Route path="/about-us" element={<Home/>} />
          <Route path="/verify-email" element={<VerifyEmail/>}/>
          <Route path="/verifiersignin" element={<VerifyLogin/>}/>
          <Route path="/verifiersigninsuccesful" element={<VerifierDashboard/>}/>
          <Route path="/request-access" element={<RequestAccess />} />
        <Route path="/request-access/document" element={<AccessDocument />} />
        <Route
          path="/request-access/information"
          element={<AccessInformation />}
        />
          <Route path="/create-wallet" element={<CreateWallet/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
          <Route path="/generate-certificate" element={<GenerateCertificate/>} />
          <Route path="/upload-certificate" element={<UploadCertificate/>} />
        </Routes>

        {/* Always render Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
