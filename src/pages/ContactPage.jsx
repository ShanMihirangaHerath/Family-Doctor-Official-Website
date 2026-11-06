import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Mail, Send, MapPin, Loader2, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', mobile: '', subject: 'General Inquiry', message: '' }); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-transparent min-h-screen pt-20 pb-24 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-health-teal/10 rounded-full blur-[80px] -z-10"></div>
        <span className="text-health-teal font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Contact <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-health-dark to-health-teal">Family Doctor</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Send us your questions, suggestions, or feedback. Our customer support team is available 24/7 to assist you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden lg:flex">
          
          <div className="lg:w-2/5 bg-gradient-to-br from-health-dark via-health-teal to-health-green p-10 lg:p-12 text-white relative overflow-hidden flex flex-col">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col flex-grow">
              <h3 className="text-3xl font-bold mb-2">Contact Information</h3>
              <p className="text-health-light mb-10 font-medium">Reach out to us anytime. We're here to help.</p>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start group">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 group-hover:bg-white/20 transition-colors"><MapPin className="h-6 w-6 text-health-light" /></div>
                  <div>
                    <h4 className="font-semibold text-white/80 text-sm mb-1">Our Office</h4>
                    <p className="text-sm font-medium text-health-light leading-snug">Family Doctor Health (Pvt.) Ltd,<br/>Sri Lanka.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 group-hover:bg-white/20 transition-colors"><MessageCircle className="h-6 w-6 text-health-light" /></div>
                  <div>
                    <h4 className="font-semibold text-white/80 text-sm mb-1">WhatsApp Support</h4>
                    <a href="https://wa.me/94765755624" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-health-light transition-colors block">076 575 5624</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 group-hover:bg-white/20 transition-colors"><PhoneCall className="h-6 w-6 text-health-light" /></div>
                  <div>
                    <h4 className="font-semibold text-white/80 text-sm mb-1">General Inquiries</h4>
                    <a href="tel:0117548584" className="text-lg font-bold hover:text-health-light transition-colors block">011 754 8584</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 rounded-2xl overflow-hidden h-[200px] border-2 border-white/20 shadow-lg relative z-10">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4710.762509401101!2d80.04258092431111!3d6.859012775700588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25300017c44b7%3A0xfccc850bd625df77!2sFamily%20Doctor%20Health%20(Pvt.)%20Ltd!5e0!3m2!1sen!2slk!4v1783500678800!5m2!1sen!2slk" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:w-3/5 p-10 lg:p-14">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal outline-none transition-all bg-slate-50 font-medium" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal outline-none transition-all bg-slate-50 font-medium" placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal outline-none transition-all bg-slate-50 font-medium" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal outline-none transition-all bg-slate-50 font-medium" placeholder="07X XXX XXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal outline-none transition-all bg-slate-50 font-medium text-slate-600 appearance-none">
                  <option>General Inquiry</option>
                  <option>App Support / Technical Issue</option>
                  <option>Partnership (Doctor / Pharmacy / Lab)</option>
                  <option>Feedback & Suggestions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-health-teal outline-none transition-all bg-slate-50 font-medium resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-2 font-medium">
                  <CheckCircle className="h-5 w-5" /> Message sent successfully! Our team will contact you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl font-medium">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-health-dark transition-colors duration-300 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;