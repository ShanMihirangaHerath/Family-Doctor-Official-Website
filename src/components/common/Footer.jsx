import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, Smartphone, Play, HeartPulse, PhoneOffIcon, LucidePhoneCall, PhoneIncoming } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info & App Downloads */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white/10 p-1.5 rounded-xl backdrop-blur-sm">
                <img 
                  src="/mylogo.png" 
                  alt="Family Doctor Logo" 
                  className="h-8 w-auto object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Family <span className="text-health-green">Doctor</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Join our journey to discover a new dimension in healthcare through digital technology. Your health data is now more secure than ever.
            </p>
            
            {/* Horizontal App Store Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col items-center gap-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 text-center">Download Our App</p>
              
              <div className="flex flex-row justify-center gap-2">
                <button className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl transition-colors border border-slate-700 group">
                  <Play className="h-5 w-5 text-health-green" />
                </button>

                <button className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl transition-colors border border-slate-700 group">
                  <Smartphone className="h-5 w-5 text-health-teal" />
                </button>

                <button className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl transition-colors border border-slate-700 group">
                  <HeartPulse className="h-5 w-5 text-red-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center group hover:text-health-green transition-colors text-sm font-medium">
                    <ChevronRight className="h-4 w-4 mr-2 text-health-teal group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features / Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Features</h3>
            <ul className="space-y-3">
              {[
                { name: 'SOS Alerts', path: '/services' },
                { name: 'QR Medical Records', path: '/services' },
                { name: 'Medication Reminders', path: '/services' },
                { name: 'Family Chat', path: '/services' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="flex items-center group hover:text-health-green transition-colors text-sm font-medium">
                    <ChevronRight className="h-4 w-4 mr-2 text-health-teal group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start group cursor-default">
                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-health-teal/20 transition-colors">
                  <MapPin className="h-5 w-5 text-health-teal" />
                </div>
                <span className="mt-1">No.555/A/158 HILIFE MEEGODA, COLOMBO</span>
              </li>
              <li className="flex items-center group cursor-default">
                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-health-teal/20 transition-colors">
                  <LucidePhoneCall className="h-5 w-5 text-health-teal" />
                </div>
                <span>0117548584</span>
              </li>
              <li className="flex items-center group cursor-default">
                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-health-teal/20 transition-colors">
                  <PhoneIncoming className="h-5 w-5 text-health-teal" />
                </div>
                <span>+94 76 575 5625</span>
              </li>
              <li className="flex items-center group cursor-default">
                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-health-teal/20 transition-colors">
                  <Mail className="h-5 w-5 text-health-teal" />
                </div>
                <span>info@familydoctorhealth.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Family Doctor Health (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );  
};

export default Footer;