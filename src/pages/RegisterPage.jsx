import React, { useState } from 'react';
import { Shield, User, Phone, Calendar, Briefcase, Info, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    userType: 'Patient',
    title: 'Mr',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dob: '',
    gender: 'Male',
    designation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data ready to send to Backend: ", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50">
      
      {/* Background Blobs for styling */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-health-teal/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-health-green/20 rounded-full blur-3xl"></div>

      <div className="max-w-3xl w-full space-y-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl z-10 border border-slate-100">
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-health-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-health-dark" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Create Your Account</h2>
          <p className="text-slate-600 font-medium">Join the FD Health Digital Platform</p>
        </div>
        
        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-4 mb-8 shadow-sm">
          <Info className="text-blue-500 shrink-0 mt-0.5" size={24} />
          <div>
            <h4 className="text-blue-900 font-bold mb-1">Registration Successful? What's Next!</h4>
            <p className="text-blue-700 text-sm leading-relaxed">
              Once you register here, please download the <strong>FD Health Mobile App</strong> from the App Store, Play Store, or App Gallery. Use your registered <strong>Mobile Number</strong> to log in securely.
            </p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* 1. User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-700 mb-3">I am a :</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Patient', 'Doctor', 'Medical Student', 'General'].map((type) => (
                <label key={type} className={`text-center py-3 px-2 rounded-xl cursor-pointer border-2 transition-all duration-300 text-sm font-bold ${formData.userType === type ? 'border-health-teal bg-health-teal/10 text-health-dark shadow-sm' : 'border-slate-100 text-slate-500 hover:border-slate-300'}`}>
                  <input type="radio" name="userType" value={type} className="hidden" onChange={handleChange} checked={formData.userType === type} />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* 2. Title & Gender */}
            <div className="flex gap-4">
              <div className="w-1/3 relative">
                <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">Title</label>
                <select name="title" onChange={handleChange} value={formData.title} className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal focus:border-transparent outline-none transition-all appearance-none bg-slate-50 font-medium">
                  {['Mr', 'Mrs', 'Ms', 'Dr', 'Prof', 'Rev'].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-[38px] text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
              <div className="w-2/3 relative">
                <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">Gender</label>
                <select name="gender" onChange={handleChange} value={formData.gender} className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal focus:border-transparent outline-none transition-all appearance-none bg-slate-50 font-medium">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-[38px] text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">Date of Birth</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input name="dob" type="date" required onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal focus:border-transparent outline-none transition-all bg-slate-50 font-medium text-slate-700" />
              </div>
            </div>

            {/* 3. First Name */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input name="firstName" type="text" required onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal focus:border-transparent outline-none transition-all bg-slate-50 font-medium" 
                  placeholder="John" />
              </div>
            </div>

            {/* 4. Last Name */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input name="lastName" type="text" required onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal focus:border-transparent outline-none transition-all bg-slate-50 font-medium" 
                  placeholder="Doe" />
              </div>
            </div>

            {/* 5. Mobile Number */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input name="mobileNumber" type="tel" required onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal focus:border-transparent outline-none transition-all bg-slate-50 font-medium" 
                  placeholder="07X XXX XXXX" />
              </div>
            </div>

            {/* 6. Designation */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">Designation</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input name="designation" type="text" onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal focus:border-transparent outline-none transition-all bg-slate-50 font-medium" 
                  placeholder="e.g. Software Engineer, Doctor" />
              </div>
            </div>

          </div>

          <button type="submit" 
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-md text-lg font-bold text-white bg-gradient-to-r from-health-dark to-health-teal hover:shadow-xl hover:shadow-health-teal/30 hover:-translate-y-1 transition-all duration-300 mt-8">
            Complete Registration
          </button>
        </form>
        
        <p className="text-center text-sm text-slate-600 font-medium mt-6">
          Already registered? <Link to="/login" className="font-bold text-health-teal hover:text-health-dark transition-colors">Sign in via App</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;