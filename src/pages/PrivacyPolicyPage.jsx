import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-transparent min-h-screen pt-24 pb-24 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-health-teal/10 rounded-full blur-[80px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-health-teal/10 rounded-2xl mb-6">
          <ShieldCheck className="h-10 w-10 text-health-teal" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Privacy <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-health-dark to-health-teal">Notice</span>
        </h1>
        <p className="text-lg text-slate-600 font-medium">
          How FD collects, uses, and protects your personal data.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-transparent-50 rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12 lg:p-16 relative">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-health-dark via-health-teal to-health-green rounded-t-[2.5rem]"></div>
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="text-sm font-bold text-slate-400 mb-8 uppercase tracking-wider">
              Last Updated: May 2026
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                1. How This Privacy Policy Applies
              </h2>
              <p className="mb-4 leading-relaxed">
                This Privacy Notice explains how Family Doctor Health (Pvt.) Ltd (“FD”, “we”, “us”, or “our”) collects, uses, discloses, stores, and protects the personal data of our customers, employees, and other stakeholders (“Data Subjects”) in accordance with the Personal Data Protection Act, No. 9 of 2022 of Sri Lanka (“PDPA”).
              </p>
              <p className="mb-4 leading-relaxed">
                This Privacy Notice applies to personal data collected and processed through:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The FD mobile application</li>
                <li>Any other FD platforms, systems, or services that refer to this Privacy Notice</li>
              </ul>
              <p className="leading-relaxed">
                FD acts as the Data Controller in relation to your personal data and will be responsible for your personal data that is processed in connection with doctors, hospitals, pharmacies, laboratories, and other medical centers. By accessing or using FD services, you acknowledge that you have read and understood this Privacy Notice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                2. Personal Data We Collect
              </h2>
              <p className="mb-4 leading-relaxed">
                We will collect Personal Data as necessary within the purpose, scope, and provisions of the law. In this regard, we will ask for consent from the Data Subject before or during the collection of Personal Data through various methods, except where the law allows us to collect the Personal Data without consent.
              </p>
              <p className="mb-4 leading-relaxed">
                We collect and process personal data of customers, doctors, consultants, healthcare professionals, vendors, service providers, business partners, employees, and visitors, depending on the services used and the nature of each individual’s or entity’s relationship with FD.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Identification details (name, NIC/passport where applicable, age/date of birth)</li>
                <li>Contact information, including phone number and email address</li>
                <li>Account and login details (where registered)</li>
                <li>Appointment, booking, and transaction details</li>
                <li>Payment and financial information. We do not store your payment card details, and all payments are processed through secure payment service providers.</li>
                <li>Health-related information necessary to facilitate healthcare services, including medication reminders, personal/family health profiles, and medical records shared via QR code.</li>
                <li>Emergency contact information utilized for the Family Alert & Emergency Caller System.</li>
                <li>Communications (emails, call recordings, messages, letters).</li>
                <li>Device and usage information (IP address, logs, cookies, live location data for emergency features and nearest provider identification).</li>
                <li>Images or recordings (where applicable for events, security, or service features).</li>
              </ul>
              <p className="leading-relaxed font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                Health data, biometric data, and children’s personal data are treated as special category personal data and will be processed with enhanced safeguards.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                3. Purposes of Processing
              </h2>
              <p className="mb-4 leading-relaxed">We process personal data only for clear, specific, and lawful purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Delivery:</strong> To provide registration, appointment booking (doctor, lab, physiotherapy), payments, cancellations, refunds, medication reminders, emergency alerting, and storing/sharing health records via QR code.</li>
                <li><strong>Account & Relationship Management:</strong> To manage relationships with doctors, hospitals, pharmacies, agents, partners, and employees.</li>
                <li><strong>Payments & Financial Operations:</strong> To process payments, refunds, commissions, settlements, and reconciliations.</li>
                <li><strong>Customer Support & Communications:</strong> To handle inquiries, complaints, and service notifications.</li>
                <li><strong>Business Operations, Analytical Purposes & Improvements:</strong> To operate, analyze, improve systems, services, and reporting.</li>
                <li><strong>Marketing & Promotions:</strong> To conduct marketing and promotional activities, subject to consent and opt-out preferences.</li>
                <li><strong>Employment & Human Resource Management:</strong> To manage recruitment, payroll and allowances, attendance, and statutory compliance.</li>
                <li><strong>Legal, Audit & Risk Management:</strong> To enforce agreements, manage disputes, and conduct audits.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                4. Consent and Legal Basis
              </h2>
              <p className="mb-4 leading-relaxed">We process personal data in accordance with the PDPA based on one or more lawful bases:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Performance of a contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                <li><strong>Compliance with a legal obligation:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                <li><strong>Legitimate interests:</strong> We may process your data when it is reasonably necessary for the purposes of legitimate interests pursued by us or by a third party.</li>
                <li><strong>Consent:</strong> We may process your data when you have given us explicit consent to process your personal information for a specific purpose (where required).</li>
                <li><strong>Vital interests:</strong> We may process your personal data where processing is necessary to respond to an emergency that threatens the life, health, or safety of you or another person.</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                FD may process personal data relating to children under the age of 16 solely for the purpose of providing healthcare-related services, including appointment bookings, family profile management, and related support services. Where the data subject is under 16 years of age, personal data is processed only on one or more of the following lawful bases:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Explicit consent of a parent or legal guardian, obtained at the point of registration, booking, or service request.</li>
                <li>Compliance with applicable legal or medical obligations.</li>
              </ul>
              <p className="leading-relaxed">
                Parents or legal guardians may withdraw consent for the processing of a child’s personal data by contacting us, provided that such withdrawal does not conflict with any other legal obligations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                5. Disclosure of Personal Data
              </h2>
              <p className="mb-4 leading-relaxed">We may have to share with the parties listed below for the purposes specified in ‘Purposes of processing’:</p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li>To any party, in compliance with legal and regulatory requirements.</li>
                <li>To relevant security or law enforcement agencies, provided a valid court order or an authorized legal request is submitted to us, for prevention/detection of crime or prosecution of such offenders.</li>
                <li>Upon request of a government institution, agencies, or authorities.</li>
                
                {/* DOCTOR & PHARMACY CONNECTION CONSENT RULES ADDED HERE */}
                <li className="bg-health-teal/5 p-4 rounded-xl border border-health-teal/20">
                  <strong className="text-health-dark block mb-2">To connected Healthcare Providers based on your explicit request:</strong>
                  <ul className="list-circle pl-5 space-y-2 text-slate-700">
                    <li><strong>Doctors:</strong> When you initiate a connection request with a Doctor on the FD platform and the Doctor accepts it, that specific Doctor is granted access to view your health details and medical records to facilitate proper diagnosis and care.</li>
                    <li><strong>Pharmacies:</strong> When you establish a connection request with a Pharmacy through our platform, the respective Pharmacy is granted access to view your specific drug and medication details to facilitate accurate prescription processing and fulfillment.</li>
                  </ul>
                </li>
                
                <li>To any party that acts as FD’s payment channels, including but not limited to, where applicable to validate your information, as and when required.</li>
                <li>In the event that FD, any division, or Service undergoes re-organization or is sold to a third party, in which any of your Personal Information we hold may be transferred to the re-organized entity or third party subject to the principles in this Privacy Policy.</li>
                <li>To protect FD’s vital interests.</li>
              </ul>
              <p className="leading-relaxed">
                We require all of our third parties to protect your personal information in adherence to local legal regulations and for specified purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                6. Data Transfers Outside Sri Lanka
              </h2>
              <p className="mb-4 leading-relaxed">
                We may transfer personal data to recipients located outside Sri Lanka where such transfers are necessary for legitimate business purposes or to provide our services. Any cross-border transfer of personal data will be carried out in accordance with the Personal Data Protection Act, No. 9 of 2022 (Sri Lanka) as amended and subject to appropriate safeguards.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The recipient country, territory, or organisation provides an adequate level of protection for personal data, as determined in accordance with applicable law.</li>
                <li>Appropriate contractual, technical, or organisational safeguards are in place to protect personal data.</li>
                <li>The transfer is carried out with the explicit consent of the Data Subject, where required by law.</li>
                <li>The transfer is otherwise permitted or required under applicable legal or regulatory obligations.</li>
              </ul>
              <p className="leading-relaxed">
                We take reasonable steps to ensure that personal data transferred across borders is protected against unauthorised access, disclosure, alteration, or loss and is processed only for the purposes for which it was originally collected.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                7. Data Retention & Security
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                <h3 className="font-bold text-slate-900 mb-2">Retention</h3>
                <p className="leading-relaxed mb-4">
                  Personal data is retained only for as long as necessary to fulfill the purposes stated in this Privacy Notice or to meet legal requirements. Retention periods are defined in internal policies. When there is no ongoing legitimate need to process your personal information, or when the retention period has expired, we will securely delete or anonymize such information.
                </p>
                
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-health-teal" /> Security
                </h3>
                <p className="leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect personal data from accidental loss, unauthorized access, use, alteration, or disclosure. Access to your personal data is restricted to employees, agents, contractors, and other third parties on a need-to-know basis. They process personal data only on our instructions and are bound by strict confidentiality obligations.
                </p>
                <p className="leading-relaxed mb-4">
                  However, you also have a responsibility to exercise due care. Where we have provided you with (or where you have chosen) a password to access the FD services or portal, you are responsible for keeping such login details confidential.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of all the personal data, both in transit over the internet and at rest in our systems.</li>
                  <li>Regular security assessments and updates to system components.</li>
                  <li>Enforcement of strong access controls and data leakage prevention mechanisms.</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                8. Your Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                You are entitled to the following rights, and we are obliged to uphold them under the PDPA, subject to applicable legal requirements and limitations.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="text-slate-900 block mb-1">Right of access:</strong> To request confirmation of whether we process your personal data and to obtain a copy.</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="text-slate-900 block mb-1">Right to rectification:</strong> To request correction of inaccurate or incomplete personal data.</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="text-slate-900 block mb-1">Right to erasure:</strong> To request deletion of your data where there is no lawful reason to continue processing.</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="text-slate-900 block mb-1">Right to restriction:</strong> To request that we limit the processing of your personal data.</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="text-slate-900 block mb-1">Right to withdraw consent:</strong> To withdraw consent at any time without affecting prior lawful processing.</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><strong className="text-slate-900 block mb-1">Right to object:</strong> To object to the processing of your personal data where permitted by law.</div>
              </div>
              <p className="leading-relaxed bg-health-teal/5 p-4 rounded-xl border border-health-teal/10">
                <strong>Right to appeal:</strong> If you are dissatisfied with how we handled your data or your request, you may escalate the matter to the Data Protection Authority.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                9. Contact Details
              </h2>
              <p className="mb-4 leading-relaxed">
                Your requests to exercise any of the above rights or for privacy-related inquiries can be submitted through the following formal channels:
              </p>
              <div className="bg-slate-900 text-white p-6 rounded-2xl mb-4">
                <h3 className="font-bold text-health-green mb-4">Data Protection Officer (DPO)</h3>
                <ul className="space-y-3">
                  <li><strong>Company:</strong> Family Doctor Health (Pvt.) Ltd</li>
                  <li><strong>Postal Address:</strong> 555/A/158 HILIFE MEEGODA.</li>
                  <li><strong>Call Center / Phone:</strong> 011 754 8584</li>
                  <li><strong>Email:</strong> info@familydoctorhealth.com</li>
                </ul>
              </div>
              <p className="text-sm text-slate-500">
                We will respond to your request within 30 days from the date we receive it, after validating your identity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 
                10. Changes to This Privacy Notice
              </h2>
              <p className="leading-relaxed">
                It is our policy to post any changes we make to our Privacy Notice on this page. Any such changes will be posted on this page, and the date of the latest revision will be indicated at the top of the Privacy Notice. The most recently published version shall prevail over all previous versions. We are not obligated to notify you of any changes, and you are encouraged to review this Privacy Notice periodically to remain informed of any updates.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;