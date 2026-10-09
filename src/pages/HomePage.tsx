import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Calendar, 
  FileText, 
  Users, 
  Sparkles, 
  Compass, 
  ChevronRight, 
  Download, 
  Building2,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { 
  CAMPUS_IMAGES, 
  COLLEGE_INFO, 
  KEY_STATS, 
  PRINCIPAL_INFO, 
  COURSES_DATA, 
  CAMPUS_FACILITIES, 
  UPCOMING_EVENTS, 
  COLLEGE_NOTICES, 
  TESTIMONIALS 
} from '../data/mockData';
import { usePortal } from '../context/PortalContext';

export const HomePage: React.FC = () => {
  const { openCourseModal, setSelectedEvent, downloadBrochure } = usePortal();
  const [activeNoticeTab, setActiveNoticeTab] = useState<'events' | 'notices'>('events');

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-slate-950 overflow-hidden">
        {/* Campus Background Image with Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={CAMPUS_IMAGES.hero}
            alt="ABC College of Technology Campus"
            className="w-full h-full object-cover object-center filter brightness-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white w-full">
          <div className="max-w-3xl space-y-6">
            {/* Academic Credential Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300">
                <Award className="w-3.5 h-3.5" />
                Autonomous Institution · NIRF Top 35
              </span>
              <span className="hidden sm:inline text-slate-400">·</span>
              <span className="text-slate-300">NAAC Grade 'A++' Tier-1 Accredited</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display tracking-tight text-white leading-tight">
              Shaping Tomorrow's Engineers, Innovators & Leaders
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              At <strong className="text-white font-semibold">ABC College of Technology</strong>, world-class faculty, advanced AI laboratories, and industry immersion empower students to solve real-world challenges and lead global transformation.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/admissions"
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors flex items-center gap-2"
              >
                <span>Apply for Admissions 2026</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/courses"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-lg backdrop-blur-xs transition-colors flex items-center gap-2"
              >
                <span>Explore Academic Programs</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link
                to="/contact"
                className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Contact Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Statistics Ribbon (Below Hero Split) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-slate-200">
          {KEY_STATS.map((stat, idx) => (
            <div key={idx} className="p-3 text-center border-r last:border-r-0 border-slate-100">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight block">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Welcome Message from the Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-900 text-white rounded-2xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl border border-slate-800">
          {/* Portrait Image Column */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <img
                src={PRINCIPAL_INFO.image}
                alt={PRINCIPAL_INFO.name}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-center">
                <span className="text-xs font-bold text-amber-400 block font-display">
                  {PRINCIPAL_INFO.name}
                </span>
                <span className="text-[10px] text-slate-300">
                  Principal & Professor of Systems
                </span>
              </div>
            </div>
          </div>

          {/* Letter & Message Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest font-mono">
                Scholarly Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Message from the Principal
              </h2>
              <p className="text-xs text-slate-400">
                {PRINCIPAL_INFO.credentials}
              </p>
            </div>

            <div className="text-sm sm:text-base text-slate-300 leading-relaxed italic border-l-2 border-amber-400 pl-4 py-1">
              "{PRINCIPAL_INFO.message}"
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Read Full Institutional Vision</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => downloadBrochure()}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Academic Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Academic Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              Academic Departments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Flagship Programs & Degrees
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Accredited undergraduate engineering and graduate business & computing programs designed for high career impact.
            </p>
          </div>

          <Link
            to="/courses"
            className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1 self-start md:self-end"
          >
            <span>View All 7 Academic Departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES_DATA.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-800">
                    {course.degree}
                  </span>
                  <span>{course.duration}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {course.name}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {course.shortDescription}
                </p>

                <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                  <div>
                    <strong className="text-slate-700">Intake:</strong> {course.seats} Seats Available
                  </div>
                  <div>
                    <strong className="text-slate-700">Tuition:</strong> {course.annualFee}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => openCourseModal(course.id)}
                  className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <Link
                  to={`/admissions?course=${course.id}`}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Campus Facilities Preview with Generated Real Photos */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              World-Class Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Campus Facilities & Modern Research Hubs
            </h2>
            <p className="text-sm text-slate-600">
              Spread across a 45-acre green ecosystem, providing high-tech computing labs, residential halls, athletic arenas, and digital libraries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Facility Card 1: Library */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={CAMPUS_IMAGES.library}
                  alt="Central Digital Library"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 text-amber-300 text-[11px] font-medium backdrop-blur-xs">
                  Academic Resource
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Central Digital Library
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Over 120,000 volumes, international journal digital access, and silent study amphitheaters.
                  </p>
                </div>
                <Link
                  to="/facilities"
                  className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1"
                >
                  <span>Explore Library Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Facility Card 2: Engineering Lab */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={CAMPUS_IMAGES.engineeringLab}
                  alt="Advanced Computing Labs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 text-amber-300 text-[11px] font-medium backdrop-blur-xs">
                  Computing & AI
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Computing & AI Innovation Labs
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    600+ workstations, NVIDIA DGX tensor GPU clusters, and high-speed network testbeds.
                  </p>
                </div>
                <Link
                  to="/facilities"
                  className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1"
                >
                  <span>Explore Labs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Facility Card 3: Sports & Campus Life */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Hostels, Sports Complex & Food Court
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Separate boys and girls residence halls with 3,200 capacity, Olympic-standard athletics track, and multi-cuisine cafeteria.
                  </p>
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>24/7 Biometric Security & Health Clinic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>45 Air-Conditioned Bus Fleet Routes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Solar-Powered Wi-Fi 6 Campus</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <Link
                  to="/facilities"
                  className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View All 9 Campus Facilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Upcoming Events & Notices Ticker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              Campus Life & Academic Updates
            </span>
            <h2 className="text-2xl font-bold font-display text-slate-900 mt-1">
              Events, Symposiums & Circulars
            </h2>
          </div>

          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setActiveNoticeTab('events')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeNoticeTab === 'events'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveNoticeTab('notices')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeNoticeTab === 'notices'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Official Circulars
            </button>
          </div>
        </div>

        {activeNoticeTab === 'events' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {UPCOMING_EVENTS.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-amber-700 font-semibold uppercase">
                      {event.type}
                    </span>
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="text-[11px] text-slate-500">
                    <strong>Venue:</strong> {event.venue}
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-slate-500">
                    {event.fee}
                  </span>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
                  >
                    View & RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 overflow-hidden">
            {COLLEGE_NOTICES.map((notice) => (
              <div
                key={notice.id}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">
                      {notice.category}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{notice.date}</span>
                    {notice.isUrgent && (
                      <span className="text-rose-600 font-bold uppercase text-[10px] font-mono">
                        Urgent
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {notice.title}
                  </h4>
                </div>

                <button
                  onClick={() => alert(`Downloading circular: ${notice.pdfRef} (${notice.fileSize})`)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md flex items-center gap-1.5 self-start sm:self-auto shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download PDF ({notice.fileSize})</span>
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="text-center pt-2">
          <Link
            to="/news-events"
            className="text-xs font-semibold text-slate-800 hover:text-amber-600 inline-flex items-center gap-1"
          >
            <span>Browse Complete Events Calendar & Notice Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 7. Student & Alumni Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Proven Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Student Achievements & Alumni Voices
          </h2>
          <p className="text-sm text-slate-600">
            Our graduates excel at Silicon Valley enterprises, Fortune 500 corporations, and premier research institutions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm font-mono shrink-0">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] text-amber-700 font-medium">
                    {testimonial.companyOrPursuit}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {testimonial.batch}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Prominent Admission Announcement Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-slate-800 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              Academic Year 2026-27 Admissions Open
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
              Begin Your Journey with ABC College of Technology
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Applications are invited for B.Tech, MBA, and MCA programs. Merit scholarships and hostel allotments are processed on a rolling basis. Early application deadline: <strong>June 30, 2026</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Link
              to="/admissions"
              className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg text-center transition-colors shadow-md"
            >
              Start Online Application
            </Link>
            <button
              onClick={() => downloadBrochure()}
              className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-center transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Admissions Guide</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
