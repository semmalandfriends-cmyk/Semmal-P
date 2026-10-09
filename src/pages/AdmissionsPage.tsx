import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  Send, 
  Calendar, 
  HelpCircle, 
  FileText, 
  Download, 
  ChevronDown, 
  Clock, 
  Award,
  PhoneCall,
  Mail,
  Search,
  Sparkles
} from 'lucide-react';
import { 
  COURSES_DATA, 
  ADMISSION_STEPS, 
  ADMISSION_DATES, 
  ADMISSION_FAQS 
} from '../data/mockData';
import { usePortal } from '../context/PortalContext';

export const AdmissionsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { enquiries, submitEnquiry, downloadBrochure } = usePortal();

  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredCourse, setPreferredCourse] = useState('Computer Science & Engineering');
  const [previousQualification, setPreviousQualification] = useState('High School (10+2 PCM)');
  const [percentageOrCgpa, setPercentageOrCgpa] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [statusSearchId, setStatusSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);

  // Pre-select course if URL param exists
  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      const found = COURSES_DATA.find(c => c.id === courseParam);
      if (found) {
        setPreferredCourse(found.name);
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !email || !phone || !percentageOrCgpa || !city) {
      alert('Please fill out all required fields.');
      return;
    }

    const refId = submitEnquiry({
      studentName,
      email,
      phone,
      preferredCourse,
      previousQualification,
      percentageOrCgpa,
      city,
      notes,
    });

    setSubmittedId(refId);
  };

  const handleStatusLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!statusSearchId.trim()) return;
    const match = enquiries.find(item => item.id.toLowerCase() === statusSearchId.trim().toLowerCase());
    setSearchResult(match || 'NOT_FOUND');
  };

  return (
    <div className="space-y-16 py-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              Admissions Office 2026-27
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              Enroll for Undergraduate & Postgraduate Batches
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Step into an environment of discovery, high-impact research, and industry-connected engineering. Submit your admission enquiry or formal application below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section: Application Form & Status Tracker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Online Admission Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
                Official Registration
              </span>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Online Admission Enquiry & Application Form
              </h2>
              <p className="text-xs text-slate-500">
                Submit your profile for eligibility assessment and counseling scheduling.
              </p>
            </div>

            {submittedId ? (
              /* Success Submission Card */
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 space-y-4 animate-in fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-emerald-950">
                      Application Received Successfully!
                    </h3>
                    <p className="text-xs text-emerald-800">
                      Your admission enquiry has been logged into the ABC Academic System.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-emerald-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Reference Application ID:</span>
                    <span className="font-mono font-bold text-slate-900 text-sm">{submittedId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Applicant:</span>
                    <span className="font-semibold text-slate-900">{studentName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Preferred Program:</span>
                    <span className="font-semibold text-slate-900">{preferredCourse}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Current Status:</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono font-semibold text-[11px]">
                      Received · Queued for Counseling
                    </span>
                  </div>
                </div>

                <p className="text-xs text-emerald-800 leading-relaxed">
                  Our admissions counselor will review your qualifying scores and contact you at <strong className="font-semibold">{email}</strong> or <strong className="font-semibold">{phone}</strong> within 48 business hours.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    onClick={() => {
                      setSubmittedId(null);
                      setStudentName('');
                      setEmail('');
                      setPhone('');
                      setPercentageOrCgpa('');
                      setCity('');
                      setNotes('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    Submit Another Application
                  </button>
                  <button
                    onClick={() => downloadBrochure()}
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official Prospectus</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Full Student Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
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
                      placeholder="john.doe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Preferred Academic Course <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={preferredCourse}
                      onChange={(e) => setPreferredCourse(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-white"
                    >
                      {COURSES_DATA.map(course => (
                        <option key={course.id} value={course.name}>
                          {course.name} ({course.degree})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Previous Qualification <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={previousQualification}
                      onChange={(e) => setPreviousQualification(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900 bg-white"
                    >
                      <option value="High School (10+2 PCM)">High School (10+2 PCM / Science)</option>
                      <option value="Diploma in Engineering (Polytechnic)">Diploma in Engineering (Lateral Entry)</option>
                      <option value="Undergraduate Bachelor Degree (B.Sc / B.Tech / BCA)">Undergraduate Bachelor Degree</option>
                      <option value="Bachelor of Commerce / Arts / Other">Bachelor of Commerce / Arts / Other</option>
                      <option value="International Baccalaureate (IB) / A-Levels">International Baccalaureate (IB) / A-Levels</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Qualifying Marks (% or CGPA) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 88.5% or 8.9 CGPA"
                      value={percentageOrCgpa}
                      onChange={(e) => setPercentageOrCgpa(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    City & State / Country of Residence <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chicago, IL or Metro City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Specific Queries / Scholarship Consideration
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter any questions regarding hostel accommodation, merit scholarship, or branch details..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Admission Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Admission Application Status Tracker & Assistance */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Lookup Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-mono flex items-center gap-2">
                  <Search className="w-4 h-4 text-amber-600" />
                  <span>Application Status Lookup</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Track the real-time processing status of your submitted application.
                </p>
              </div>

              <form onSubmit={handleStatusLookup} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. ABC-2026-ENG-1082"
                  value={statusSearchId}
                  onChange={(e) => setStatusSearchId(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900 font-mono"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Check
                </button>
              </form>

              {searchResult && searchResult !== 'NOT_FOUND' && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-slate-500">{searchResult.id}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold font-mono text-[10px]">
                      {searchResult.status}
                    </span>
                  </div>
                  <div className="font-bold text-slate-900">{searchResult.studentName}</div>
                  <div className="text-slate-600">{searchResult.preferredCourse}</div>
                  <div className="text-[11px] text-slate-400">Submitted: {searchResult.submittedAt}</div>
                </div>
              )}

              {searchResult === 'NOT_FOUND' && (
                <p className="text-xs text-rose-600 font-medium">
                  No record found with that reference ID. Please double check the ID code.
                </p>
              )}

              {/* Sample IDs tip */}
              <div className="text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="font-semibold block text-slate-600">Sample Active Application IDs:</span>
                <span className="font-mono text-slate-700">ABC-2026-ENG-1082</span> or <span className="font-mono text-slate-700">ABC-2026-ENG-1083</span>
              </div>
            </div>

            {/* Admissions Helpline Box */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                Need Guidance?
              </span>
              <h3 className="text-base font-bold text-white font-display">
                Dedicated Admissions Helpdesk
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our counseling deans regarding entrance cut-offs, fee payment installments, and campus residential housing.
              </p>

              <div className="space-y-2 text-xs pt-1">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Toll-Free: +1 (800) 222-8324</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>admissions@abctech.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Mon - Sat: 8:30 AM to 5:00 PM</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => downloadBrochure()}
                  className="w-full py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Admissions Prospectus (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Procedure Step-by-Step */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Four-Step Admission Roadmap
          </h2>
          <p className="text-sm text-slate-600">
            A transparent and merit-based admission procedure guided by our academic admissions committee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADMISSION_STEPS.map((st, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 relative shadow-2xs"
            >
              <div className="text-2xl font-bold text-amber-600 font-mono">
                {st.step}
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {st.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {st.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Admission Dates Calendar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Calendar
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Important Dates for Academic Year 2026-27
          </h2>
          <p className="text-sm text-slate-600">
            Key milestones for application submission, entrance exam, and counseling.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
          {ADMISSION_DATES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.event}</h4>
                  <span className="text-xs text-slate-500 font-mono">{item.date}</span>
                </div>
              </div>

              <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded self-start sm:self-auto ${
                item.status === 'Active'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Admissions Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Find answers to commonly asked questions regarding qualifications, fees, and campus life.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {ADMISSION_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:text-amber-600 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    activeFaq === idx ? 'rotate-180 text-amber-600' : ''
                  }`}
                />
              </button>

              {activeFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
