import React from 'react';
import { Activity, Bell, MapPin, Stethoscope, QrCode, FileText, ArrowRight, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';

const ServicesPage = () => {
  const services = [
    {
      icon: FileText,
      title: "Comprehensive Health Profiles",
      description: "Maintain dedicated personal, health, and family profiles. Securely store all your medical investigations and lab reports in one centralized digital platform.",
      color: "from-health-dark to-health-teal"
    },
    {
      icon: Bell,
      title: "Smart Alarms & Reminders",
      description: "Never miss a dose with our smart drug remembering alarms. Get automated notifications for clinic visits, appointments, and track your family's medication routines.",
      color: "from-health-teal to-health-green"
    },
    {
      icon: Activity,
      title: "Emergency SOS & Rescue",
      description: "Trigger family emergency alarms with live location tracking. Quick-dial integrated emergency services including police, ambulance, fire brigade, and poison control.",
      color: "from-red-500 to-orange-400" 
    },
    {
      icon: MapPin,
      title: "Connected Medical Centers",
      description: "Locate the nearest pharmacies, labs, and physiotherapy centers. Send prescriptions directly to pharmacies to collect your medicine later, saving you valuable time. The same time-saving process applies to booking and managing physiotherapy sessions.",
      color: "from-health-green to-health-light"
    },
    {
      icon: Stethoscope,
      title: "Doctor Portals & Channeling",
      description: "Dedicated profiles for doctors to manage appointments, view patient health data, and add prescriptions. Features an integrated upcoming FD Channeling System.",
      color: "from-health-dark to-slate-600"
    },
    {
      icon: QrCode,
      title: "QR Access & Family Chat",
      description: "Generate a unique QR code for instant health profile access. Keep your loved ones connected and informed with our exclusive family gathering chat feature.",
      color: "from-health-teal to-blue-500"
    }
  ];

  const appMockups = [img1, img2, img3, img4, img5, img6, img7];
  const duplicatedMockups = [...appMockups, ...appMockups];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-24 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-health-teal/10 rounded-full blur-[100px] -z-10"></div>
        
        <span className="text-health-teal font-bold tracking-wider uppercase text-sm mb-4 block">What We Offer</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Our <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-health-dark via-health-teal to-health-green">Digital Services</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Discover our exclusive digital healthcare ecosystem. From live emergency alerts to integrated lab reports, everything you need for your family's well-being.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group relative overflow-hidden flex flex-col h-full">
              
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br ${service.color} group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm`}>
                <service.icon className="h-8 w-8 text-health-dark group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-health-dark transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{service.description}</p>
              
              <Link to="/register" className="inline-flex items-center text-health-teal font-bold group-hover:text-health-dark transition-colors mt-auto w-fit">
                Explore Feature <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-[100vw] mx-auto mb-24 relative overflow-hidden">
        
        <motion.div 
          animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-health-teal/30 rounded-full blur-[100px] -z-10"
        ></motion.div>
        <motion.div 
          animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-health-green/20 rounded-full blur-[100px] -z-10"
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] p-8 md:p-12 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-health-teal/10 text-health-dark font-bold mb-4 border border-white shadow-sm">
                <Smartphone size={20} className="text-health-teal" />
                <span>Experience The App</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Modern & Intuitive Interface
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Take a sneak peek into the Family Doctor mobile application. Designed for seamless navigation and ultimate user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden py-10 w-full">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

          <motion.div 
            className="flex gap-6 md:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 35,
              repeat: Infinity 
            }}
          >
            {duplicatedMockups.map((imgSrc, index) => (
              <div
                key={index}
                className="w-[220px] md:w-[280px] flex-shrink-0 relative group"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? 5 : -5
                  }}
                  className="relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-b from-health-teal/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"></div>
                  
                  <img 
                    src={imgSrc} 
                    alt={`App Screen ${index + 1}`} 
                    className="w-full h-auto rounded-[2rem] shadow-xl border-[6px] border-white/80 group-hover:border-white transition-all duration-300 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-health-dark via-health-teal to-health-green rounded-[3rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Join Us Today for a <br className="hidden md:block"/> Healthier Tomorrow
            </h2>
            <p className="text-health-light text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
              Manage your and your loved ones' health data seamlessly. Connect with doctors, pharmacies, and labs instantly with Family Doctor.
            </p>
            <Link to="#" className="inline-block px-10 py-4 bg-white text-health-dark rounded-2xl font-bold text-lg hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Create Your Free Account Using Mobile App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;