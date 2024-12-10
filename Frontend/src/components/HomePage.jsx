import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import HeroSection from './HeroSection';
import NewInDigiLocker from './NewInDigilocker';
import DocumentWallet from './DocumentWallet';
import DocumentCategories from './DocumentCategories';
import Steps from './Steps';
import Partner from './Partner';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
    
      <HeroSection />
      <NewInDigiLocker />
      <DocumentWallet />
      <DocumentCategories />
      <Steps />
      <Partner />
     
    </div>
  );
}

export default HomePage;
