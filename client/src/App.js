import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TripDetailPage from './pages/TripDetailPage';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import ContactPage from './pages/ContactPage';
import AdminContactPage from './pages/AdminContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/responsive-fixed.css';
import './styles/proxied-images.css';

function App() {
  const isAdminAuthenticated = () => {
    try {
      if (typeof window === 'undefined') return false;
      const token = localStorage.getItem('admin_auth');
      const exp = Number(localStorage.getItem('admin_auth_expires') || 0);
      const valid = token === 'true' && (!exp || Date.now() < exp);
      if (!valid) {
        localStorage.removeItem('admin_auth');
        localStorage.removeItem('admin_auth_expires');
        localStorage.removeItem('admin_user');
      }
      return valid;
    } catch {
      return false;
    }
  };
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
    
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = savedLanguage;
    
    // Update text direction for Arabic
    if (savedLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
    
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = newLanguage;
    
    // Update text direction for Arabic
    if (newLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Router>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trip/:id" element={<TripDetailPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/booking/:tripId" element={<BookingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route
                path="/admin/contact"
                element={isAdminAuthenticated() ? <AdminContactPage /> : <Navigate to="/admin/login" replace />}
              />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </I18nextProvider>
  );
}

export default App;