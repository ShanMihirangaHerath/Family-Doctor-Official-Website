import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import DnaBackground from '../components/DnaBackground'; // 👈 DNA Background එක Import කළා

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col font-sans text-slate-900">
      
      <DnaBackground />
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative z-10">
        <Outlet /> 
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
      
    </div>
  );
};

export default MainLayout;