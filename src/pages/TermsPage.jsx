import React from 'react';
import { Scale, FileText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-health-teal/10 rounded-full blur-[80px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-health-teal/10 rounded-2xl mb-6">
          <Scale className="h-10 w-10 text-health-teal" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Terms and <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-health-dark to-health-teal">Conditions</span>
        </h1>
        <p className="text-lg text-slate-600 font-medium">
          General Terms and Conditions for Services of Family Doctor Health (Pvt.) Ltd
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12 lg:p-16 relative">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-health-dark via-health-teal to-health-green rounded-t-[2.5rem]"></div>
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="leading-relaxed mb-8">
              These terms and conditions as revised and updated by Family Doctor Health (Pvt.) Ltd from time to time (hereinafter referred to as “General Terms and Conditions” or “GTC”) shall constitute a legally binding agreement made between you, (“Customer”, “User” or “you”) and FD (Pvt.) Ltd (“FD”, “we,” “us” or “our”), concerning your use of FD Services (defined below) and the FD Mobile Application. By accessing and using the Services you unequivocally accept and agree to be bound by the General Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THE TERMS AND CONDITIONS HEREIN, YOU SHOULD NOT USE THE SERVICES.
            </p>

            {/* 1. DEFINITION */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 1. DEFINITION
              </h2>
              <p className="mb-4"><strong>1.1</strong> Unless the context otherwise requires, the different terms and expressions used in these General Terms and Conditions shall have the meaning assigned to them in the following paragraph.</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>“Agreement”</strong> means these General Terms and Conditions, any policies/guidelines formulated by FD from time to time in respect of the Services and any amendments made thereto by FD from time to time.</li>
                <li><strong>“FD Services” or “Services”</strong> means the features provided through the App, including personal profile, own health profiles, family member management, medication reminders, emergency systems, nearest pharmacy approach, nearest medical center approach, nearest doctor approach, nearest physiotherapy approach, doctor booking, lab booking, physiotherapy booking, arranging drugs through the pharmacy, medical record sharing via QR code, FD Running Number Service, and FD Rewards.</li>
                <li><strong>“FD System” or “System”</strong> means the software, mobile application (App), hardware and infrastructure developed and owned by FD or licensed to FD, through which FD Services are provided to Customers.</li>
                <li><strong>“FD Service Fee”</strong> means the fee charged by FD from Customers for the Services provided to Customers.</li>
                <li><strong>“Healthcare Establishment(s)”</strong> means the hospitals, medical centers, pharmacies, laboratories, and physiotherapy centers which have collaborated with FD to make available FD Services at the respective establishment.</li>
                <li><strong>“Medical Professional”</strong> means registered doctors, nurses, pharmacies, laboratories, or other healthcare providers accessing or utilizing the system.</li>
              </ul>
            </section>

            {/* 2. MODIFICATIONS TO GTC */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 2. MODIFICATIONS TO GTC
              </h2>
              <p className="leading-relaxed">
                <strong>2.1</strong> You agree that FD at its sole discretion may revise these General Terms and Conditions at any time without assigning any reasons therefore and you agree to be bound by all such revisions made by FD from time to time. It is your responsibility to periodically review the latest version of the General Terms and Conditions uploaded on the FD official App or website to stay informed of updates and revisions. You undertake to reread the General Terms and Conditions on a regular basis. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised General Terms and Conditions by your continued use of the Services after the date such revised General Terms and Conditions are posted. You hereby waive any right to receive specific notice of such changes/revisions. If you do not accept the changes, you should not use the Services.
              </p>
            </section>

            {/* 3. USE OF SERVICE */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 3. USE OF SERVICE
              </h2>
              <div className="space-y-4">
                <p><strong>3.1</strong> You shall strictly use the Services only in accordance with the provisions of the Agreement.</p>
                <p><strong>3.2</strong> FD Services are available only at the Healthcare Establishments published and updated by FD from time to time.</p>
                <p><strong>3.3</strong> You shall ensure that all information you furnish to avail the Services are true, accurate, complete and up-to-date. You shall not obtain the Services through impersonation or by furnishing incorrect or false information.</p>
                <p><strong>3.4</strong> You shall ensure that you have the required equipment and connectivity (including but not limited to) to access and use the Services.</p>
                <p><strong>3.5</strong> You shall bear the full responsibility for the usage of the Services and any charges whatsoever incurred through the use of the services.</p>
                <p><strong>3.6</strong> You shall not do or permit any third party to do any of the following:</p>
                <ul className="list-[lower-alpha] pl-6 space-y-2">
                  <li>Use the Services for any unethical, obscene, defamatory, scandalous, nuisance or any illegal activity or purpose.</li>
                  <li>Use the Services through unauthorized interfaces or protocols.</li>
                  <li>Use the Service to transmit any content that is abusive, pornographic, violent, racist, discriminatory, offensive, vulgar, obscene, defamatory, invasive of personal privacy, harassing, threatening, or otherwise objectionable.</li>
                  <li>Translate, reverse-engineer, reverse compile, decompile, disassemble, or modify the Services or make derivative works from the Services.</li>
                  <li>Translate, reverse-engineer, reverse compile, decompile, disassemble, reformat or modify the FD System or make derivative works from the FD System.</li>
                  <li>To sub-license, re-sell or re-distribute the Services, in whole or in part.</li>
                  <li>To interfere or tamper or to attempt to interfere or tamper with the integrity or security of the Services and/or the FD System.</li>
                  <li>Take any action that imposes an unreasonable or large load on the FD System.</li>
                  <li>Upload invalid data, viruses, worms, or other harmful software to the Services and/or to the FD System.</li>
                  <li>Use automated means, including spiders, robots, crawlers, data mining tools, or the like to download data from the FD System, unless expressly permitted by FD.</li>
                  <li>Use the Services in a way that disables the Services or prevents or inhibits anyone from using the Services.</li>
                  <li>Impersonate any person or entity in order to use, or through use of, the Services.</li>
                </ul>
                <p><strong>3.7 Personal Health Profiles & Family Members:</strong> You are responsible for the accuracy of the health information entered into your personal profile, your health profile, and the profiles of your unlimited linked family members.</p>
                <p><strong>3.8 Smart Medication Reminder:</strong> The whole-family medication reminder is a tool to assist you. FD is not liable for any missed dosages, incorrect medication entries, or health complications arising from the use or failure of this reminder system.</p>
                <p><strong>3.9 Special QR Code System:</strong> The App allows Medical Professionals to view your health records via a special QR code. You are solely responsible for whom you share this QR code with. FD is not liable for unauthorized access resulting from you sharing your QR code with unverified individuals. You can change your QR code yourself, and if there is any misuse of the QR code, FD is not responsible.</p>
                <p><strong>3.10 Family Alert & Emergency Caller System:</strong> These systems are designed to assist in notifying your designated contacts during an emergency. They are NOT a replacement for national emergency services (e.g., calling an ambulance or police). FD does not guarantee immediate response times from third parties or emergency contacts. This system will provide the live location of the emergency alerting person; if it is not responding to family members due to any reason, FD is not responsible.</p>
                <p><strong>3.11 Nearest Healthcare Provider Identification:</strong> The App includes a feature to help you locate the nearest healthcare providers. However, the visibility and availability of these doctors, pharmacies, laboratories, and physiotherapy centers within the App depend strictly on their active registration and onboarding with the FD platform.</p>
              </div>
            </section>

            {/* 4. PRICING */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 4. PRICING
              </h2>
              <div className="space-y-4">
                <p><strong>4.1</strong> You understand that your use of the Services shall be subject to charges.</p>
                <p><strong>4.2</strong> You agree that the Healthcare Establishment has the right to determine and revise the Healthcare Establishment’s fee, the medical practitioner’s fee, and the fee applicable for medical check-ups.</p>
                <p><strong>4.3</strong> FD reserves the right, at any time and at its sole discretion to revise the FD Service Fee without any notification to the Customer. FD may publish changes to FD’s Service fee on its App or Website.</p>
                <p><strong>4.4</strong> The Customer is required to bear all taxes and levies applicable on the Services availed by the Customer.</p>
              </div>
            </section>

            {/* 5. CANCELLATION OR RE-SCHEDULING */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 5. CANCELLATION OR RE-SCHEDULING AN APPOINTMENT
              </h2>
              <div className="space-y-4">
                <p><strong>5.1</strong> If you are unable to honour the scheduled appointment you shall promptly notify the Healthcare Establishment.</p>
                <p><strong>5.2</strong> If you wish to reschedule a scheduled appointment you shall directly contact the Healthcare Establishment which shall have the sole discretion to determine whether to reschedule the scheduled appointment. As part of rescheduling the appointment, the Healthcare Establishment may charge an extra fee from you.</p>
                <p><strong>5.3</strong> If you wish to cancel the scheduled appointment you shall directly contact the Healthcare Establishment which shall have the sole discretion to determine whether to refund the Healthcare Establishment’s fee and/or the medical practitioner’s fee.</p>
                <p><strong>5.4</strong> In the event of the medical practitioner canceling an appointment, the Healthcare Establishment will give a fresh appointment or shall refund the Healthcare Establishment’s fee and the medical practitioner’s fee according to the Healthcare Establishment’s rules and regulations.</p>
                <p className="bg-health-teal/5 p-4 rounded-xl border border-health-teal/20 text-slate-700">
                  <strong>5.5</strong> FD Service Fee is non-refundable. The FD Service fee is not refundable even if the scheduled appointment is subsequently cancelled or rescheduled. This is due to the reason that FD provides its channeling services to the Customer in consideration of the FD Service Fee paid by the Customer. Therefore, if the channeled appointment is subsequently cancelled due to any reason, FD would have already provided its services to the Customer by channeling the doctor at the Customer's request or providing an appointment number. FD Service is not a cost-free service to FD and various costs are involved including infrastructure maintenance cost, network usage cost etc.
                </p>
                <p><strong>5.6</strong> FD bears no responsibility for delays in medical practitioners attending scheduled sessions or for failure of the medical practitioner to attend the scheduled session. The same should be directly dealt with the Healthcare Establishment.</p>
                <p><strong>5.7</strong> Rescheduling and cancellation of Scheduled appointments and refunds will be facilitated or done by the Healthcare Establishment at its sole discretion in accordance with its respective rules and regulations, and FD bears no liability for the same.</p>
                <p><strong>5.8</strong> It shall be the responsibility of the Customer to directly liaise with the Healthcare Establishment to obtain a refund. If the Healthcare Establishment agrees to a refund, the refund should be collected by the Customer directly from the respective Healthcare Establishment. The Customer cannot collect the refund from FD or through any bank.</p>
                <p><strong>5.9</strong> For some "selected hospitals," online transfer refunds are available. However, the exact same mobile number used to make the appointment must be presented when requesting online refunds.</p>
                
                <div>
                  <p><strong>5.10 FD Running Number Service</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>5.10.1</strong> The Customer is required to check the running number by accessing the 'Running Number' feature on the FD App.</li>
                    <li><strong>5.10.2</strong> FD shall not be responsible for the accuracy of the Running Number displayed. The accuracy and completeness depend entirely on the information entered into the System by the Healthcare Establishment during the session.</li>
                    <li><strong>5.10.3</strong> The FD Running Number Service is available only in Healthcare Establishments in which the running number system has been installed and operated.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. CHANGES TO THE SERVICES */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 6. CHANGES TO THE SERVICES
              </h2>
              <div className="space-y-4">
                <p><strong>6.1</strong> FD reserves the right to change, modify, update, upgrade, suspend or discontinue the Services in its entirety or any portion thereof at any time without any notification to you.</p>
                <p><strong>6.2</strong> FD reserves the right to amend and update the list of Healthcare Establishments without any notification to the Customer.</p>
                <p><strong>6.3</strong> FD has the right to assign any rights, licenses, or obligations arising out of or relating to this Agreement and the Services without any restriction and without any notification to the Customer.</p>
              </div>
            </section>

            {/* 7. INTELLECTUAL PROPERTY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 7. INTELLECTUAL PROPERTY
              </h2>
              <div className="space-y-4">
                <p><strong>7.1</strong> All forms of intellectual property rights and protections that may be obtained for, or may pertain to, the FD System and the FD Services including without limitation, all right, title and interest arising under Sri Lankan law to all (a) patents, (b) trade secrets, (c) copyrights, and (d) proprietary indicia, tradenames, symbols, logos and brand names, shall belong to and exclusively vest with FD and its licensors.</p>
                <p><strong>7.2</strong> The Customer undertakes not to cause or permit any action that may damage the Intellectual Property Rights of FD. No right or license whatsoever, either expressed or implied is granted to the Customer pursuant to this Agreement.</p>
                <p><strong>7.3</strong> FD Services and FD System shall not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of FD.</p>
                <p><strong>7.4</strong> This Clause 7 shall survive the termination or expiry of this Agreement.</p>
              </div>
            </section>

            {/* 8. DATA PROTECTION AND PRIVACY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 8. DATA PROTECTION AND PRIVACY
              </h2>
              <div className="space-y-4">
                <p><strong>8.1</strong> By using the Services, the Customer consents to FD collecting, processing, storing and disseminating to third parties such personal data provided by the Customer or generated by FD in the course of making the Services available, for the following purposes:</p>
                <ul className="list-[lower-alpha] pl-6 space-y-2">
                  <li>Provision of Services to the Customer.</li>
                  <li>Market research and Customer-profiling based on usage and preferences for the purpose of initiating information, promotions and/or marketing campaigns associated with FD’s Services unless the Customer has explicitly opted out.</li>
                  <li>Credit profiling of Customer to ascertain his/her creditworthiness.</li>
                  <li>Prevention and detection of fraud, money laundering and terrorist financing.</li>
                  <li>Compliance with applicable laws and regulations.</li>
                </ul>
                <p><strong>8.2</strong> Customer consents to FD sharing personal data of the Customer with the Healthcare Establishment to enable the Healthcare Establishment to contact the Customer for purposes of confirming the Customer’s appointment or for other reasons relating to the appointment.</p>
                <p><strong>8.3</strong> The Customer consents to receive promotional and informational SMS from FD and/or from the respective Healthcare Establishment. The Customer may opt-out of this service by contacting FD.</p>
              </div>
            </section>

            {/* 9. DISCLAIMERS AND LIMITATION OF LIABILITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 9. DISCLAIMERS AND LIMITATION OF LIABILITY
              </h2>
              <div className="space-y-4">
                <p><strong>9.1</strong> FD Services and FD System are made available "as is" or "as available" and FD, its directors, employees and agents do not make any representation or warranty, express or implied in relation to the Service quality, availability, security, timeliness, accessibility, uninterrupted use, accuracy, speed or completeness, merchantability, or fit for the particular purpose of a Customer.</p>
                <p><strong>9.2</strong> FD does not guarantee that Customers will be able to access the Services at all times or places, that the System will have adequate capacity for all users, or that the App will be operable/compatible with the Customer’s equipment.</p>
                <p><strong>9.3</strong> FD shall not be liable in any manner whatsoever to the Customer in respect of any loss or damage (including consequential loss or damage) however caused, which may arise directly or indirectly in respect of the Service, or the failure or omission on the part of FD.</p>
                <p><strong>9.4</strong> FD disclaims responsibility and liability for any damages, loss, pain, mental distress or suffering incurred or experienced by a Customer or by any third party as a result of the Services.</p>
                <p><strong>9.5</strong> The Customer is responsible for the Customer’s use of the Service and the Customer agrees that the Service is used at the Customer’s risk.</p>
                
                <p><strong>9.6</strong> FD is only providing a channeling service and is not the Healthcare Establishment or the medical practitioner providing health services to the Customer. Therefore, FD has no control over the services or decisions taken by the Healthcare Establishment and the medical practitioners. Accordingly, FD disclaims all liability:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>9.6.1</strong> For the services provided by Healthcare Establishments.</li>
                  <li><strong>9.6.2</strong> For the services provided by medical practitioners.</li>
                  <li><strong>9.6.3</strong> For the actions and omission of Healthcare Establishments and medical practitioners including medical negligence.</li>
                  <li><strong>9.6.4</strong> For any cancellation or rescheduling of appointments.</li>
                  <li><strong>9.6.5</strong> For any decision taken by the Healthcare Establishment to refuse or allow the Customer to cancel or reschedule appointments or refund any payments.</li>
                  <li><strong>9.6.6</strong> For any reminders sent by the Healthcare Establishment(s).</li>
                  <li><strong>9.6.7</strong> Any inconvenience, mental distress and/or financial loss caused by the actions and/or omissions of the Healthcare Establishment(s) and/or medical practitioner(s).</li>
                </ul>

                <p><strong>9.7</strong> FD does not warrant, endorse, guarantee, or assume responsibility for any product or services provided, advertised or offered by Healthcare Establishments and medical practitioners.</p>
                <p><strong>9.8</strong> Under no circumstances whatsoever shall FD be liable to the Customer or to any third party for any indirect damages, consequential damages, special damages, incidental damages, punitive damages, loss of profit, loss of revenue, and the like.</p>
                <p><strong>9.9</strong> Notwithstanding anything to the contrary, FD’s total and aggregate liability under this Agreement shall be limited to Fifty percent (50%) of the total FD Service Fee (excluding taxes) paid by the Customer to FD in respect of the particular appointment which is the subject matter of the dispute.</p>
                <p><strong>9.10</strong> FD strictly provides a technological platform to manage health records, set reminders, and connect with healthcare providers. FD does not provide medical, diagnostic, or treatment advice. All medical consultations, diagnoses, and treatments obtained through the app are the sole responsibility of yours and the respective Medical Professional.</p>
                <p><strong>9.11</strong> This Clause 9 shall survive the termination or expiry of this Agreement.</p>
              </div>
            </section>

            {/* 10. INDEMNITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 10. INDEMNITY
              </h2>
              <div className="space-y-4">
                <p><strong>10.1</strong> The Customer shall indemnify and hold harmless FD, its holding company, subsidiaries, affiliates, successors, assigns, and its officers, directors, shareholders, employees and agents from and against any and all claims, losses, damages, liabilities, demands, suits, proceedings, costs, expenses, actual or alleged arising out of and/or in any way connected with:</p>
                <ul className="list-[lower-alpha] pl-6 space-y-2">
                  <li>Breach of any representation, warranty, term or condition in this Agreement by the Customer.</li>
                  <li>Any illegal or unauthorized activity, or breach of statutory obligation carried out by the Customer.</li>
                  <li>Any claims, demands and/or allegations of fraud, duplication, or malpractice committed by the Customer.</li>
                  <li>Any claims and/or allegations of infringement of intellectual property rights of any third party by the Customer.</li>
                  <li>Your sharing of the QR code resulting in unauthorized access.</li>
                </ul>
                <p className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  In the event of any such action being brought against FD by any third party, the Customer shall compensate FD in respect of all expenses and losses arising out of the same, inclusive of any indirect and consequential damages, legal costs and any cost of settlement to which FD shall enter into with such third party.
                </p>
                <p><strong>10.2</strong> This Clause 10 shall survive the termination or expiry of this Agreement.</p>
              </div>
            </section>

            {/* 11. TERMINATION OF THE SERVICES */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 11. TERMINATION OF THE SERVICES
              </h2>
              <div className="space-y-4">
                <p><strong>11.1</strong> Without prejudice to the rights accrued to FD under this Agreement, FD may suspend or disconnect the Customer’s access to the Service partially or fully due to non-payment of amounts payable in respect of the Services.</p>
                <p><strong>11.2</strong> FD may suspend or disconnect the Customer’s access to the Service partially or fully if the Customer in FD’s opinion has misused the Services, provided false details, misused the emergency and alert systems, or has breached any of the terms and conditions in this Agreement.</p>
                <p><strong>11.3</strong> FD reserves the right to suspend or cancel the Services without adducing any reasons thereof and without any compensation to Customers or any third party.</p>
                <p><strong>11.4</strong> FD reserves the right to refuse Customer’s access to FD Services without assigning any reasons thereof.</p>
                <p><strong>11.5</strong> The provisions intended to survive (including liability, intellectual property, and indemnity) shall survive expiry or termination of this Agreement.</p>
                <p><strong>11.6</strong> Termination or expiry of this Agreement shall be made without prejudice to the accrued rights and liabilities of the parties at the date of termination or expiry.</p>
              </div>
            </section>

            {/* 12. MISCELLANEOUS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 12. MISCELLANEOUS
              </h2>
              <div className="space-y-4">
                <p><strong>12.1 Confidentiality:</strong> The Customer shall keep in strict confidence all information obtained from FD irrespective of whether the information is marked as Confidential or with a similar legend.</p>
                <p><strong>12.2 Assignment:</strong> The Customer shall not assign or transfer his/her rights and obligations under this Agreement without the prior written approval of FD. FD has the right to assign any rights, licenses, or obligations arising out of or relating to this Agreement and the Services without any restriction and without any notification to the Customer.</p>
                <p><strong>12.3 No Waiver:</strong> No decision of FD to refrain from exercising or enforcing its rights under any provision of this Agreement shall constitute a waiver thereof.</p>
                <p><strong>12.4 Amendments:</strong> This Agreement is subject to change from time to time by FD at its sole discretion and the Customer undertakes to abide by such changes.</p>
                <p><strong>12.5 Severance:</strong> If a court or any other competent authority finds that any provision of the Agreement is invalid, illegal or unenforceable, that provision shall be deemed deleted, and the validity and enforceability of the other provisions of the Agreement shall not be affected.</p>
                <p><strong>12.6 No partnership:</strong> Nothing in this Agreement is intended to constitute a partnership or joint venture of any kind between any of the parties, nor constitute any party the agent of another party for any purpose.</p>
                <p><strong>12.7 Set off:</strong> FD reserves the right to set off any outstanding payments due for the Service from any other contract entered into between FD and the Customer.</p>
                <p><strong>12.8 Governing law and jurisdiction:</strong> The Agreement, and any dispute or claim arising out of or in connection with it, shall be governed by, and construed in accordance with, the law of Sri Lanka, and the parties irrevocably submit to the exclusive jurisdiction of the courts of Sri Lanka.</p>
                <p><strong>12.9</strong> FD reserves all rights not expressly granted in this Agreement.</p>
              </div>
            </section>

            {/* 13. MEMBERSHIP TERMS AND CONDITIONS */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-health-teal h-6 w-6" /> 13. FD REWARDS (If Applicable)
              </h2>
              <div className="space-y-4">
                <p><strong>13.1</strong> The membership of the FD Rewards Loyalty Program is open to any FD member bearing the web or mobile app.</p>
                <p><strong>13.2</strong> FD Rewards membership will be offered based on a mobile number and can be registered via downloading the App.</p>
                <p><strong>13.3</strong> FD Rewards Loyalty Program is a property of FD, having the right to introduce, decline and withdraw the loyalty program anytime OR terminate the FD Rewards Loyalty Program without prior notice.</p>
                <p><strong>13.4</strong> Points can be earned by simply using FD services via the App as a registered member. Any transaction done as a guest won’t be entitled to member points.</p>
                <p><strong>13.5</strong> Accumulated points can be redeemed while logged into the member account via the App.</p>
                <p><strong>13.6</strong> Points accumulated have a validity period of a minimum of one year and the points exceeding the said period will expire on 31st December.</p>
                <p><strong>13.7</strong> Points accumulated cannot be exchanged for cash and cannot be pooled with any other FD Rewards Member.</p>
                <p><strong>13.8</strong> Points are not awarded for any purchase made before the FD Rewards Membership is granted.</p>
                <p><strong>13.9</strong> Offers on the FD Rewards Program cannot be combined with any other ongoing promotion.</p>
                <p><strong>13.10</strong> Reversal of redeemed points are not facilitated. Under no circumstances will cash be exchanged for the amount of such redeemed points.</p>
                <p><strong>13.11</strong> The information provided in the registration form will be utilized to communicate to FD Rewards Members on promotions and offers executed by the loyalty program.</p>
                <p><strong>13.12</strong> FD Rewards Members shall notify FD of any change of personal details, the mobile number in particular, at the first reasonable opportunity after such change. The Customer has to contact the FD Support line or email to inform of such changes.</p>
                <p><strong>13.13</strong> FD Rewards Member’s privileges and rights to enjoy the offers are governed by the terms and conditions hereunder and such terms and conditions laid down by the participating establishments. Failure to comply with such terms and conditions shall result in the cancellation of the Membership by FD.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;