import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogoutModal from './components/LogoutModal';
import Toast from './components/Toast';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FeatureDictionaryPage from './pages/FeatureDictionaryPage';
import FeatureDetectionPage from './pages/FeatureDetectionPage';
import CommunityForumPage from './pages/CommunityForumPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activePage, setActivePage] = useState('home');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast({ message });
  };

  const handleLogoutConfirm = () => {
    setCurrentUser(null);
    setIsLogoutModalOpen(false);
    showToast('Anda berhasil keluar dari Humora.');
  };

  // If not logged in, force login screen
  if (!currentUser) {
    return (
      <>
        <LoginPage onLoginSuccess={setCurrentUser} />
        {toast && (
          <Toast message={toast.message} onClose={() => setToast(null)} />
        )}
      </>
    );
  }

  // Helper render page
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage currentUser={currentUser} onNavigate={setActivePage} />;
      case 'kamus':
        return <FeatureDictionaryPage onNavigate={setActivePage} showToast={showToast} />;
      case 'penerjemah':
        return <FeatureDetectionPage onNavigate={setActivePage} showToast={showToast} />;
      case 'forum':
        return <CommunityForumPage onNavigate={setActivePage} showToast={showToast} />;
      case 'profil':
        return (
          <ProfilePage 
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser} 
            onNavigate={setActivePage} 
            showToast={showToast} 
          />
        );
      case 'pengaturan':
        return (
          <SettingsPage 
            onNavigate={setActivePage} 
            onLogoutClick={() => setIsLogoutModalOpen(true)} 
            showToast={showToast} 
          />
        );
      default:
        return <HomePage currentUser={currentUser} onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col relative overflow-hidden text-[#1c2826]">
      
      {/* Background Ambient Mesh Light Spheres */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Mint Teal Orb top-right */}
        <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#2dd4bf]/20 via-[#14b8a6]/15 to-transparent blur-[110px] animate-mesh-1" />
        {/* Soft Forest Green Orb mid-left */}
        <div className="absolute top-[35%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#0c4a3e]/15 via-[#126454]/10 to-transparent blur-[130px] animate-mesh-2" />
        {/* Soft Amber Glow Orb bottom-right */}
        <div className="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#f59e0b]/15 via-[#d9f99d]/15 to-transparent blur-[100px] animate-mesh-1" />
      </div>

      {/* Top and Bottom Navigation Bars */}
      <Navbar 
        activePage={activePage} 
        onNavigate={setActivePage} 
        onLogoutClick={() => setIsLogoutModalOpen(true)} 
      />

      {/* Main Spacious Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 pb-28 md:pb-12 relative z-10">
        {renderPage()}
      </main>

      {/* Page Footer */}
      <Footer onNavigate={setActivePage} />

      {/* Confirmation Dialogs & Alert Toasts */}
      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogoutConfirm} 
      />

      {toast && (
        <Toast message={toast.message} onClose={() => setToast(null)} />
      )}
    </div>
  );
}
