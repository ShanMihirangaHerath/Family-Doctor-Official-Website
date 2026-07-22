import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage'; 
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsPage';
import FloatingWhatsApp from './components/common/FloatingWhatsApp'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsOfServicePage />} />
        </Route>
      </Routes>
      
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;