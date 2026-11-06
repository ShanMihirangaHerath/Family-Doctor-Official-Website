import React from 'react';
import { Eye, Target, ShieldCheck, Stethoscope } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="overflow-hidden bg-transparent min-h-screen pt-24 pb-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-health-teal/20 rounded-full blur-3xl -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          About <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-health-dark via-health-teal to-health-green">Family Doctor</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 relative group transition-all duration-300 hover:shadow-2xl hover:shadow-health-teal/10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-health-dark via-health-teal to-health-green"></div>
          
          <div className="p-8 md:p-12 lg:flex gap-12 items-center">
            
            <div className="lg:w-1/2 mb-10 lg:mb-0 relative">
              <div className="absolute -inset-4 bg-health-teal/5 rounded-full blur-xl"></div>
              
              {/* Company Logo replacing the HeartPulse icon */}
              <img 
                src="/mylogo.png" 
                alt="Family Doctor Logo" 
                className="h-20 w-auto relative z-10 mb-8 object-contain animate-pulse drop-shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed text-lg">
                  <strong className="text-health-dark font-semibold">FD (Pvt) Ltd</strong> is a Sri Lankan digital healthcare company dedicated to improving access to quality healthcare for individuals and families through innovative technology-driven solutions.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Family Doctor is supported and guided by experienced Sri Lankan healthcare professionals, including medical specialists, consultants, professors, and industry experts who serve as advisors to ensure the highest standards of healthcare quality, safety, and innovation.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-health-green/30 hover:bg-white transition-all duration-300 group/card shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-health-green/10 p-3 rounded-xl group-hover/card:bg-health-green group-hover/card:text-white transition-colors">
                    <ShieldCheck className="text-health-green group-hover/card:text-white shrink-0" size={28} />
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    We are committed to promoting preventive care, strengthening family well-being, and making healthcare more accessible and convenient for every Sri Lankan. Through technology, expertise, and compassion, we aim to improve health outcomes and support healthier lifestyles.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-health-teal/30 hover:bg-white transition-all duration-300 group/card shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-health-teal/10 p-3 rounded-xl group-hover/card:bg-health-teal group-hover/card:text-white transition-colors">
                    <Stethoscope className="text-health-teal group-hover/card:text-white shrink-0" size={28} />
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    With a vision of making Sri Lanka the healthiest nation in the world, we continue to develop innovative digital healthcare solutions that empower individuals and families to take control of their health and well-being.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="bg-gradient-to-br from-health-dark to-health-teal p-[2px] rounded-[2.5rem] group hover:-translate-y-2 transition-transform duration-500 shadow-lg">
            <div className="bg-white h-full rounded-[2.4rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 text-health-teal/5 group-hover:text-health-teal/10 transition-colors duration-500 transform group-hover:scale-110">
                <Eye size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-health-dark to-health-teal rounded-2xl flex items-center justify-center mb-8 shadow-md">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To be the foremost and preferred private digital healthcare platform in the country, serving the nation and its people by improving access to quality healthcare and contributing to a stronger, healthier society.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-health-teal to-health-green p-[2px] rounded-[2.5rem] group hover:-translate-y-2 transition-transform duration-500 shadow-lg">
            <div className="bg-white h-full rounded-[2.4rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 text-health-green/5 group-hover:text-health-green/10 transition-colors duration-500 transform group-hover:scale-110">
                <Target size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-health-teal to-health-green rounded-2xl flex items-center justify-center mb-8 shadow-md">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To improve the health and well-being of every family through innovative digital healthcare solutions that promote preventive care, strengthen family bonds, and encourage a culture of compassion and wellness. We are committed to helping Sri Lankans live longer, healthier lives, reducing the burden on the national healthcare system, and contributing to the vision of making Sri Lanka the healthiest nation in the world.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutPage;