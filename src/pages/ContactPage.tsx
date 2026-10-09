import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation, 
  Share2, 
  Building,
  GraduationCap
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Admission Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  const departmentsDirectory = [
    { name: 'Admissions & Counseling Helpline', phone: '+1 (800) 222-8324', email: 'admissions@abctech.edu' },
    { name: 'Office of the Principal & Academic Council', phone: '+1 (415) 890-7701', email: 'principal@abctech.edu' },
    { name: 'Controller of Examinations (COE)', phone: '+1 (415) 890-7705', email: 'examinations@abctech.edu' },
    { name: 'Training & Placement Division', phone: '+1 (415) 890-7708', email: 'placements@abctech.edu' },
    { name: 'Chief Hostel Warden & Residential Office', phone: '+1 (415) 890-7712', email: 'hostels@abctech.edu' },
    { name: 'Campus Accounts & Student Fee Desk', phone: '+1 (415) 890-7715', email: 'accounts@abctech.edu' },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              Campus Communications
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              Connect with ABC College of Technology
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We welcome prospective students, academic collaborators, research partners, and alumni to connect with our campus community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Form & Campus Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
                Direct Message
              </span>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Send Us an Enquiry
              </h2>
              <p className="text-xs text-slate-500">
                Our administrative staff responds to all enquiries within 24 to 48 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-950">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Your message regarding <strong className="font-semibold">"{subject}"</strong> has been forwarded to the respective department head. We will get back to you at <strong className="font-semibold">{email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Subject / Topic of Enquiry <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-white"
                  >
                    <option value="Admission Enquiry">Admission & Eligibility Enquiry</option>
                    <option value="Campus Tour Request">Schedule In-Person Campus Tour</option>
                    <option value="Placements & Corporate Hiring">Corporate Placement & Internship Partnership</option>
                    <option value="Transcript & Verification">Transcript & Degree Certificate Verification</option>
                    <option value="Research & Grant Collaboration">Faculty Research & Grant Collaboration</option>
                    <option value="General Administration">General Administrative Question</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Detailed Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please describe your enquiry in detail..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Message to Admissions & Admin</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Office Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-mono">
                Campus Location & Main Desk
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Main Campus Address</strong>
                    <span>{COLLEGE_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Telephone Switchboard</strong>
                    <span>{COLLEGE_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Official Electronic Mail</strong>
                    <span>{COLLEGE_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Operating Hours</strong>
                    <span>{COLLEGE_INFO.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Digital Channels */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                Stay Connected
              </span>
              <h4 className="text-base font-bold font-display text-white">
                Official Digital & Social Channels
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Follow ABC College of Technology for student achievements, campus live streams, and research breakthroughs.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-200 text-center font-medium"
                >
                  LinkedIn Community
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-200 text-center font-medium"
                >
                  YouTube Live Lectures
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-200 text-center font-medium"
                >
                  Campus Instagram
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-200 text-center font-medium"
                >
                  Official X / Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Campus Map & Transit Guidance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Location & Transit
          </span>
          <h2 className="text-2xl font-bold font-display text-slate-900">
            Interactive Campus Map & Directions
          </h2>
        </div>

        {/* Realistic Styled Map Component */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="relative h-72 sm:h-80 bg-slate-100 flex items-center justify-center p-6 text-center overflow-hidden">
            {/* Grid Pattern Background for Map */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 max-w-md p-6 bg-white/95 rounded-2xl shadow-xl border border-slate-200 text-center space-y-3 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  ABC College of Technology Campus
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tech Knowledge Park, University Boulevard, Metro City
                </p>
              </div>

              <div className="pt-2 flex justify-center gap-2">
                <a
                  href={`https://maps.google.com/?q=ABC+College+of+Technology`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Transit options strip */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="space-y-1">
              <strong className="text-slate-900 block">By Metro Rail:</strong>
              <span>Take the Blue Line to 'Tech Knowledge Park Station' (Exit 2). Free college shuttle every 15 minutes.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-slate-900 block">By Airport:</strong>
              <span>Metro City International Airport (MCI) is located 28 km away (approx. 35 mins via Airport Expressway).</span>
            </div>
            <div className="space-y-1">
              <strong className="text-slate-900 block">College Bus Network:</strong>
              <span>45 air-conditioned buses ply across all 18 designated municipal routes daily.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Department Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="text-lg font-bold font-display text-slate-900">
          Departmental Helplines & Direct Contacts
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {departmentsDirectory.map((dept, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5"
            >
              <h4 className="text-xs font-bold text-slate-900">{dept.name}</h4>
              <div className="text-[11px] text-slate-500 font-mono space-y-0.5">
                <div>Tel: {dept.phone}</div>
                <div>Email: {dept.email}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
