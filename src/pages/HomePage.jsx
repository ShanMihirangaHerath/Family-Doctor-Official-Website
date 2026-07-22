import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Shield, Clock, ArrowRight, CheckCircle2, Users, HeartPulse, Smartphone, Globe } from 'lucide-react';

const HomePage = () => {
  // Typing Effect States
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const fullText1 = "Your Health, ";
  const fullText2 = "Your Future.";

  useEffect(() => {
    let timeout;
    let i = 0;
    let j = 0;

    const typeFirstLine = () => {
      if (i < fullText1.length) {
        setTypedText1(fullText1.slice(0, i + 1));
        i++;
        timeout = setTimeout(typeFirstLine, 100);
      } else {
        timeout = setTimeout(typeSecondLine, 300);
      }
    };

    const typeSecondLine = () => {
      if (j < fullText2.length) {
        setTypedText2(fullText2.slice(0, j + 1));
        j++;
        timeout = setTimeout(typeSecondLine, 100);
      }
    };

    timeout = setTimeout(typeFirstLine, 800);

    return () => clearTimeout(timeout);
  }, []);

  // Animation Variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="overflow-hidden bg-slate-50">
      
      {/* 1. Hero Section (3D & Floating) */}
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        
        {/* 3D Floating Background Blobs */}
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] -z-10 w-[40rem] h-[40rem] bg-gradient-to-br from-health-teal/20 to-health-light/20 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ y: [20, -20, 20], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] -z-10 w-[30rem] h-[30rem] bg-gradient-to-tr from-health-dark/10 to-health-green/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* 3D Rotating Logo Image */}
            <div className="mb-8" style={{ perspective: 1000 }}>
              <motion.img 
                src="/mylogo.png" 
                alt="FD Health Logo 3D" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                animate={{ rotateY: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                onError={(e) => {
                  e.target.style.display = 'none'; 
                }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md text-health-dark font-bold mb-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default"
            >
              <HeartPulse size={20} className="text-health-teal animate-bounce" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-health-dark to-health-teal">
                Complete HealthCare at Your Fingertips
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp} initial="hidden" animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] min-h-[120px] md:min-h-[160px]"
            >
              {typedText1}
              
              {typedText1.length < fullText1.length && (
                <span className="animate-pulse font-light text-slate-400">|</span>
              )}
              
              <br className="hidden md:block" />
              
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-health-dark via-health-teal to-health-green">
                {typedText2}
              </span>

              {typedText1.length === fullText1.length && (
                <span className="text-health-teal animate-pulse font-light">|</span>
              )}
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium"
            >
              Daily health management is now effortless. Access your medical records, receive emergency alerts, and get medication reminders all in one secure platform.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-5"
            >
              <Link to="/about" className="px-8 py-4 bg-gradient-to-r from-health-dark to-health-teal text-white rounded-2xl font-bold text-lg shadow-[0_10px_40px_-10px_rgba(56,163,165,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(56,163,165,0.6)] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-3 group">
                <span>Learn More</span>
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" size={22} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Quick Stats Section */}
      <section className="py-12 bg-white relative z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-slate-100"
          >
            {[
              { icon: Users, label: 'Active Patients', value: '1M +' },
              { icon: HeartPulse, label: 'Expert Doctors', value: '5K +' },
              { icon: Globe, label: 'Districts Covered', value: '25' },
              { icon: Smartphone, label: '24/7 Support', value: 'Always On' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center group cursor-default flex flex-col items-center pl-8 first:pl-0 border-transparent">
                <div className="w-12 h-12 rounded-full bg-health-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-health-teal transition-all duration-500 shadow-inner">
                  <stat.icon className="text-health-teal group-hover:text-white transition-colors duration-500 h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 group-hover:text-health-dark transition-colors duration-300">{stat.value}</h3>
                <p className="text-slate-500 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Core Services Section (3D Perspective Cards) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-health-teal font-bold tracking-wider uppercase text-sm mb-3 block">Features</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-lg text-slate-600">Discover our exclusive digital solutions designed specifically for your ultimate health protection and convenience.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
            style={{ perspective: 1000 }}
          >
            {[
              { icon: Activity, title: 'SOS Alerts', desc: 'Instant emergency notification system alerting your family members and doctors with a single click.' },
              { icon: Shield, title: 'QR Medical Records', desc: 'Securely access and share your patient data and medical history through our innovative QR system.' },
              { icon: Clock, title: 'Medication Reminders', desc: 'Smart medication reminders sent directly to your smartphone to ensure you never miss a dose.' }
            ].map((Service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02, z: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-[2rem] shadow-lg hover:shadow-2xl border border-white group relative overflow-hidden transform-gpu"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-health-teal/20 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:bg-gradient-to-br from-health-dark to-health-teal group-hover:rotate-12 transition-all duration-500">
                  <Service.icon className="text-health-teal group-hover:text-white transition-colors duration-500 h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{Service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{Service.desc}</p>
                
                <Link to="/services" className="inline-flex items-center text-health-dark font-bold group-hover:text-health-teal transition-colors">
                  Learn more <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
{/* 4. Why Choose Us Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Animated 3D Graphic Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="lg:w-1/2 w-full relative group"
              style={{ perspective: 1200 }}
            >
              <motion.div 
                animate={{ rotateZ: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-health-dark via-health-teal to-health-green rounded-full opacity-10 blur-3xl"
              ></motion.div>
              
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5 }} transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white/50 backdrop-blur-2xl rounded-[3rem] h-[450px] overflow-hidden shadow-2xl border border-white flex items-center justify-center transform-gpu"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-health-dark via-health-teal to-health-green opacity-90 group-hover:scale-110 transition-transform duration-1000"></div>
                
                {/* Floating Elements inside graphic - Updated with Custom Logo */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <img 
                      src="/mylogo.png" 
                      alt="Family Doctor Secure Logo" 
                      className="w-28 h-28 md:w-32 md:h-32 object-contain mb-6 drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                  <div className="bg-white/20 backdrop-blur-xl px-8 py-4 rounded-full border border-white/30 text-white font-bold tracking-widest shadow-2xl">
                    100% SECURE DATA
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <span className="text-health-teal font-bold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Your Health Data is <br className="hidden lg:block"/>
                <span className="text-health-teal">Completely Secure</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                At Family Doctor, we leverage cutting-edge technology to make healthcare services highly efficient and secure. Safeguarding patient privacy is our utmost priority.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                  'State-of-the-art data encryption protocols',
                  'Direct and secure patient-doctor connectivity',
                  'User-friendly interface with 24/7 active monitoring'
                ].map((item, i) => (
                  <motion.li 
                    key={i} whileHover={{ x: 10 }}
                    className="flex items-center text-slate-800 font-semibold bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-health-teal/30 hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <CheckCircle2 className="text-health-green mr-4 h-7 w-7 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-health-dark transition-colors duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;