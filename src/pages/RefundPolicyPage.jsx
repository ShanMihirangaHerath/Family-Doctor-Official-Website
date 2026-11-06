import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Clock, AlertCircle, HelpCircle, FileText } from 'lucide-react';

const RefundPolicyPage = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20 font-sans">
      
      {/* Page Header (Match with other pages) */}
      <div className="bg-gradient-to-r from-[#0f2b3c] via-[#1a4a5a] to-[#0B8793] text-white pt-32 pb-20 md:pt-40 md:pb-28 mb-16 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38ef7d] to-[#0bd2c3]">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              Clear and transparent guidelines on subscription cancellations, appointment refunds, and processing times at Family Doctor.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          {/* Section 1 */}
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0B8793]/10 rounded-2xl flex items-center justify-center text-[#0B8793]">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">1. Subscription Plans</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              At Family Doctor, we offer multiple subscription tiers (Golden Health, Platinum, Overseas). 
              Subscriptions are billed on a prepaid basis.
            </p>
            <ul className="list-disc list-inside text-slate-600 font-medium space-y-2 ml-2">
              <li><strong className="text-slate-800">Cancellations:</strong> You can cancel your subscription at any time. Cancellations will take effect at the end of your current billing cycle.</li>
              <li><strong className="text-slate-800">No Partial Refunds:</strong> We do not offer prorated refunds for partially used subscription periods.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">2. Medical Appointments</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              Refunds for physical or virtual consultations depend on the cancellation timeframe:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4">
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5">✅</span>
                  <span><strong className="text-slate-800">24+ Hours Notice:</strong> 100% Full refund for cancellations made at least 24 hours prior to the scheduled appointment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5">⚠️</span>
                  <span><strong className="text-slate-800">Under 24 Hours Notice:</strong> 50% refund applied to cover administrative and booking costs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">❌</span>
                  <span><strong className="text-slate-800">No-Shows:</strong> No refunds will be issued if the patient fails to attend the appointment without prior notice.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">3. Processing Time</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Approved refunds are processed back to the original payment method (Credit/Debit Card, Bank Transfer, or Mobile Wallet) within <strong className="text-[#0B8793]">5 to 7 business days</strong> depending on your bank's processing times.
            </p>
          </div>

          {/* Section 4 (Contact) */}
          <div className="bg-gradient-to-br from-slate-900 to-[#0f2b3c] p-8 md:p-10 rounded-[2rem] shadow-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <HelpCircle className="w-8 h-8 text-[#0bd2c3]" />
              <h2 className="text-2xl font-extrabold">How to Request a Refund?</h2>
            </div>
            <p className="text-slate-300 font-medium mb-6">
              To request a cancellation or refund, please reach out to our support team with your booking reference or subscription ID.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:support@familydoctor.lk" className="bg-[#0B8793] hover:bg-[#096d76] text-white px-6 py-3 rounded-xl font-bold transition-colors text-center shadow-md">
                Email Support
              </a>
              <a href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition-colors text-center border border-white/20">
                Contact Us Form
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;