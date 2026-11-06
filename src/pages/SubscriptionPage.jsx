import React from 'react';
import { 
  CalendarDays, Users, BriefcaseMedical, Asterisk, CheckCircle2, 
  RefreshCw, ArrowLeft, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const allFeatures = [
  "Personal profile.",
  "Health profile.",
  "QR for health profile.",
  "All investigations and reports can be saved in the health profile.",
  "Drug remembering alarm.",
  "Drug remembering notification.",
  "Appointments and clinic visits will be reminded through the notification system.",
  "Family health profile gathering.",
  "9 Notifications and alarm system for all family members about their drug taking time.",
  "Can identify the person who responded with drugs notifications.",
  "Emergency family alarm call with live location.",
  "Emergency call for police, ambulance, fire brigade, poison control.",
  "Family gathering chat.",
  "Nearest doctors and medical centers can be seen through the app.",
  "Medical center and doctor channeling system.",
  "Dr can see the patient health profile through doctor profile.",
  "Nearest pharmacy, laboratory, physiotherapy center, doctor and medical center can be seen through the app.",
  "Patient can send drug prescription to pharmacy and ready drugs without wasting time.",
  "Pharmacy can add patient drugs to patient health profile through their pharmacy profile (needs patient consent).",
  "Lab can add lab reports through their app to patient profile (patient can accept/reject).",
  "Patient can pay lab payments online prior to visit and confirm visit.",
  "Patient can make physiotherapy appointments through chat, pay online, and confirm visit.",
  "Patient can chat with doctors or medical centers after adding them to the profile.",
  "Doctor has their own doctor profile additional to personal and health profile.",
  "Shows today's patients and future patients with dates and times.",
  "Doctor can see patient health through their doctor profile.",
  "Doctor can add all health data to patient profile.",
  "Doctor can search for patients and send requests to add them to their patient group.",
  "Future: Doctors get drug balance options, get photocopies of medical bills, referral letters, drug charts.",
  "* FD channeling system (future) *"
];

const overseasFeatures = [
  "Caller doctor with FD chat support.",
  "We can deliver drugs with cost.",
  "We are willing to give health support at any time with family doctor throughout the year.",
  ...allFeatures
];

const SubscriptionCard = ({ plan }) => {
  const displayFeatures = plan.features || allFeatures;

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
      <div className={`bg-gradient-to-br ${plan.gradient} p-6 md:p-8 text-white relative flex-shrink-0`}>
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-2">
            {plan.id === 'overseas' && <Globe className="w-6 h-6" />}
            {plan.name}
          </h2>
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/30 tracking-wider">
            {plan.badge}
          </span>
        </div>
        <p className="text-3xl md:text-4xl font-extrabold">{plan.price}</p>
      </div>

      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="grid grid-cols-2 gap-4 mb-8 flex-shrink-0">
          <div className="bg-[#f0f9fa] p-4 rounded-2xl flex items-start gap-3">
            <CalendarDays className="w-6 h-6 text-[#0B8793] mt-0.5" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Duration</p>
              <p className="text-slate-800 font-extrabold text-sm md:text-base">{plan.duration}</p>
            </div>
          </div>
          <div className="bg-[#f0f9fa] p-4 rounded-2xl flex items-start gap-3">
            <Users className="w-6 h-6 text-[#0B8793] mt-0.5" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Family</p>
              <p className="text-slate-800 font-extrabold text-sm md:text-base">{plan.family}</p>
            </div>
          </div>
          <div className="bg-[#f0f9fa] p-4 rounded-2xl flex items-start gap-3">
            <BriefcaseMedical className="w-6 h-6 text-[#0B8793] mt-0.5" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Consultations</p>
              <p className="text-slate-800 font-extrabold text-sm md:text-base">{plan.consultations}</p>
            </div>
          </div>
          <div className="bg-[#f0f9fa] p-4 rounded-2xl flex items-start gap-3">
            <Asterisk className="w-6 h-6 text-[#0B8793] mt-0.5" />
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Emergency</p>
              <p className="text-slate-800 font-extrabold text-sm md:text-base">{plan.emergency}</p>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <ul className="space-y-4 mb-2">
            {displayFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00d2b4] flex-shrink-0 mt-0.5 bg-white rounded-full" />
                <span className="text-slate-600 font-medium text-sm leading-relaxed">
                  <span className="text-slate-400 mr-1">{String(index + 1).padStart(2, '0')}.</span> 
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SubscriptionPage = () => {
  const navigate = useNavigate();

  const plans = [
    {
      id: 'gold',
      name: 'Golden health',
      badge: 'FD-GOLD-G',
      price: 'LKR 299.00',
      duration: '6 months',
      family: '10 members',
      consultations: '30',
      emergency: 'Included',
      gradient: 'from-[#0B8793] to-[#36D1DC]'
    },
    {
      id: 'platinum',
      name: 'Platinum',
      badge: 'FD-PLATINUM-P',
      price: 'LKR 549.00',
      duration: '12 months',
      family: '10 members',
      consultations: '30',
      emergency: 'Included',
      gradient: 'from-[#0B8793] to-[#36D1DC]' 
    },
    {
      id: 'overseas',
      name: 'Overseas Package',
      badge: 'FD-OVERSEAS-H',
      price: 'LKR 9,990.00',
      duration: '12 months',
      family: 'Flexible',
      consultations: 'Unlimited',
      emergency: 'Included',
      gradient: 'from-[#1d4ed8] to-[#3b82f6]', 
      features: overseasFeatures
    }
  ];

  return (
    <div className="min-h-screen bg-transparent font-sans py-8">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="p-2 hover:bg-slate-200/50 rounded-full transition-colors active:scale-95"
            >
              <ArrowLeft className="w-6 h-6 text-slate-800" />
            </button>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Subscription Plans</h1>
          </div>
          
          <button className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-700 active:rotate-180 duration-300">
            <RefreshCw className="w-6 h-6" />
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-start mb-12">
          {plans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} />
          ))}
        </div>

      </main>
    </div>
  );
};

export default SubscriptionPage;