import React from "react";
import {
  Activity,
  Shield,
  Clock,
  HeartPulse,
  ChevronRight,
  Menu,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer">
              <HeartPulse className="text-health-dark h-8 w-8 animate-pulse" />
              <span className="text-2xl font-bold text-health-dark">
                FD <span className="text-health-teal">Health</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About Our Company", "Services", "More"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-slate-600 hover:text-health-teal font-medium transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-health-green transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button className="md:hidden text-health-dark">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative"
      >
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-health-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-20 -z-10 w-72 h-72 bg-health-teal rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-slate-800 mb-2">
              Smart Healthcare for
            </span>
            <span className="text-gradient">A Better Tomorrow</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto mb-10">
            Managing your health has never been easier. Join us for reliable,
            secure, and fast digital healthcare services designed for your
            everyday needs.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-health-dark to-health-teal text-white rounded-full font-semibold shadow-lg hover:shadow-health-teal/50 hover:scale-105 transition-all duration-300">
              Get Started
            </button>

            <button className="px-8 py-4 bg-white text-health-dark border-2 border-health-teal rounded-full font-semibold shadow-md hover:bg-health-teal hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-our-company" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-96 bg-gradient-to-br from-health-dark via-health-teal to-health-green group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-health-dark mb-6">
                About Our Company
              </h2>

              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We are a healthcare technology company committed to making
                healthcare services more efficient, secure, and accessible
                through modern digital innovation. Our mission is to build a
                comprehensive digital healthcare ecosystem that enables everyone
                to receive quality healthcare services anytime, anywhere.
              </p>

              <ul className="space-y-4">
                {[
                  "24/7 Customer Support",
                  "Advanced Technology for Secure Medical Data Protection",
                  "Managed by Experienced Healthcare Professionals",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-slate-700"
                  >
                    <Shield className="text-health-green mr-3 h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-health-dark mb-4">
              Our Services
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital healthcare solutions designed to meet your
              medical and wellness needs with convenience, reliability, and
              innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SOS Emergency Alerts",
                desc: "Instant emergency notification system that quickly alerts your emergency contacts and healthcare providers whenever immediate assistance is needed.",
                icon: <Activity className="h-8 w-8" />,
              },
              {
                title: "QR Medical Records",
                desc: "Access and share your medical records securely through a QR code, allowing healthcare professionals to retrieve your information quickly and safely.",
                icon: <Shield className="h-8 w-8" />,
              },
              {
                title: "Medication Reminders",
                desc: "Never miss your medications with smart reminders that help you follow your treatment schedule accurately every day.",
                icon: <Clock className="h-8 w-8" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl hover:shadow-health-teal/20 transition-all duration-300 border-b-4 border-transparent hover:border-health-green group"
              >
                <div className="w-16 h-16 bg-health-light/30 rounded-xl flex items-center justify-center text-health-dark mb-6 group-hover:bg-health-teal group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-4">{service.desc}</p>

                <button className="flex items-center text-health-teal font-semibold group-hover:text-health-dark transition-colors">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="more" className="bg-health-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse className="text-health-light h-8 w-8" />
              <span className="text-2xl font-bold">
                FD <span className="text-health-light">Health</span>
              </span>
            </div>

            <p className="text-slate-300 max-w-sm">
              Join us as we redefine the future of healthcare through innovative
              digital technology, making quality healthcare more accessible for
              everyone.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-health-light">
              Quick Links
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about-our-company"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-health-light">
              Contact
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>info@fdhealth.com</li>
              <li>+94 76 575 5625</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-slate-400">
          <p>© 2026 FD Health (Pvt) Ltd. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;