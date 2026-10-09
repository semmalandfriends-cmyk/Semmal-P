import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Download, 
  LogOut, 
  Award, 
  UserCheck,
  ShieldCheck,
  Clock,
  Layers
} from 'lucide-react';
import { usePortal } from '../../context/PortalContext';

export const PortalModal: React.FC = () => {
  const { 
    isPortalOpen, 
    setIsPortalOpen, 
    portalTab, 
    setPortalTab, 
    currentUser, 
    loginUser, 
    logoutUser 
  } = usePortal();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [formError, setFormError] = useState('');

  if (!isPortalOpen) return null;

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail || !inputPassword) {
      setFormError('Please enter both institutional email and password.');
      return;
    }
    setFormError('');
    loginUser(portalTab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display uppercase tracking-wide">
                ABC Institutional ERP & Campus Portal
              </h3>
              <p className="text-xs text-slate-300">
                Secure Academic Management Information System
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsPortalOpen(false)}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close portal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {currentUser ? (
            /* Logged in Dashboard View */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg font-mono">
                    {currentUser.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">
                        {currentUser.name}
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold uppercase">
                        {currentUser.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{currentUser.batchOrDesignation}</p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">ID: {currentUser.id} · {currentUser.email}</p>
                  </div>
                </div>

                <button
                  onClick={logoutUser}
                  className="px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg flex items-center gap-1.5 transition-colors self-end sm:self-center"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>

              {currentUser.role === 'student' ? (
                /* Student ERP Details */
                <div className="space-y-4">
                  {/* Academic Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                      <span className="text-xs text-emerald-700 font-medium block">Current CGPA</span>
                      <span className="text-xl font-bold text-emerald-900 font-mono">8.92 / 10</span>
                      <span className="text-[10px] text-emerald-600 block">Top 5% Batch</span>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <span className="text-xs text-blue-700 font-medium block">Attendance</span>
                      <span className="text-xl font-bold text-blue-900 font-mono">91.8%</span>
                      <span className="text-[10px] text-blue-600 block">Eligible for Exams</span>
                    </div>
                    <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                      <span className="text-xs text-amber-700 font-medium block">Completed Credits</span>
                      <span className="text-xl font-bold text-amber-900 font-mono">134 / 160</span>
                      <span className="text-[10px] text-amber-600 block">On Track</span>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50 border border-purple-100">
                      <span className="text-xs text-purple-700 font-medium block">Fee Status</span>
                      <span className="text-xl font-bold text-purple-900 font-mono">Paid</span>
                      <span className="text-[10px] text-purple-600 block">Receipt #88412</span>
                    </div>
                  </div>

                  {/* Course Roster */}
                  <div className="border border-slate-200 rounded-xl p-4">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      <span>Current Semester Enrolled Subjects (Semester VI)</span>
                    </h5>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded bg-slate-50">
                        <div>
                          <span className="font-semibold text-slate-900">CS601: Distributed Systems & Microservices</span>
                          <span className="text-slate-500 block">Prof. Evelyn Vance · Mon/Wed 10:00 AM</span>
                        </div>
                        <span className="font-mono text-emerald-700 font-semibold">94% Attd.</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-slate-50">
                        <div>
                          <span className="font-semibold text-slate-900">CS602: Cloud Architecture & DevOps Practicum</span>
                          <span className="text-slate-500 block">Prof. Marcus Holloway · Tue/Thu 02:00 PM</span>
                        </div>
                        <span className="font-mono text-emerald-700 font-semibold">90% Attd.</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-slate-50">
                        <div>
                          <span className="font-semibold text-slate-900">CS603: Deep Learning & Neural Computation</span>
                          <span className="text-slate-500 block">Prof. Elena Rostova · Fri 09:00 AM</span>
                        </div>
                        <span className="font-mono text-emerald-700 font-semibold">92% Attd.</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <button 
                      onClick={() => alert('Downloaded Official Hall Ticket & Grade Card (PDF)')}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-600" />
                      <span>Download Hall Ticket</span>
                    </button>
                    <button 
                      onClick={() => alert('Tuition Fee Clearance Certificate: No Dues Pending.')}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Fee Receipt & No-Dues Certificate</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Faculty ERP Details */
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">Assigned Lectures</span>
                      <span className="text-xl font-bold text-slate-900 font-mono">14 Hrs / Wk</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">Supervised Scholars</span>
                      <span className="text-xl font-bold text-slate-900 font-mono">6 Ph.D. / 14 M.Tech</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">Active Research Grants</span>
                      <span className="text-xl font-bold text-slate-900 font-mono">$240,000</span>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-slate-500" />
                      <span>Faculty Academic Administration Quick Desk</span>
                    </h5>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                        <div>
                          <span className="font-semibold text-slate-900">Mid-Semester Assessment Marks Submission</span>
                          <span className="text-slate-500 block">CS601 Distributed Systems (240 Students enrolled)</span>
                        </div>
                        <button 
                          onClick={() => alert('Grade entry portal opened for CS601.')}
                          className="px-2.5 py-1 text-[11px] font-semibold text-slate-900 bg-white border border-slate-300 rounded shadow-2xs hover:bg-slate-100"
                        >
                          Enter Grades
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                        <div>
                          <span className="font-semibold text-slate-900">Broadcast Notice to Department Students</span>
                          <span className="text-slate-500 block">Sends instant notification to Semester 4 & 6 students</span>
                        </div>
                        <button 
                          onClick={() => alert('Announcement draft sent to HOD approval queue.')}
                          className="px-2.5 py-1 text-[11px] font-semibold text-slate-900 bg-white border border-slate-300 rounded shadow-2xs hover:bg-slate-100"
                        >
                          Post Notice
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Login Form View */
            <div className="space-y-5">
              {/* Tab Selector */}
              <div className="flex items-center p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPortalTab('student')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    portalTab === 'student'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-amber-500" />
                  <span>Student Portal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPortalTab('faculty')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    portalTab === 'faculty'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <UserCheck className="w-4 h-4 text-amber-500" />
                  <span>Faculty ERP Desk</span>
                </button>
              </div>

              {/* Quick Demo One-Click Sign In */}
              <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    Quick Demo Access (Instant Login)
                  </span>
                  <span className="text-[10px] text-amber-700 font-mono">Pre-configured Role</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => loginUser('student')}
                    className="w-full text-left px-3 py-2 bg-white hover:bg-amber-100/50 border border-amber-200 rounded-lg text-xs font-medium text-slate-800 transition-colors shadow-2xs"
                  >
                    <span className="font-semibold block text-slate-900">Sign in as Student</span>
                    <span className="text-[11px] text-slate-500">Jordan Miller · B.Tech 6th Sem</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => loginUser('faculty')}
                    className="w-full text-left px-3 py-2 bg-white hover:bg-amber-100/50 border border-amber-200 rounded-lg text-xs font-medium text-slate-800 transition-colors shadow-2xs"
                  >
                    <span className="font-semibold block text-slate-900">Sign in as Faculty</span>
                    <span className="text-[11px] text-slate-500">Dr. Evelyn Vance · HOD CSE</span>
                  </button>
                </div>
              </div>

              {/* Manual Login Form */}
              <form onSubmit={handleManualLogin} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    {portalTab === 'student' ? 'Student Registration / Roll Number' : 'Faculty Employee ID'}
                  </label>
                  <input
                    type="text"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    placeholder={portalTab === 'student' ? 'e.g. STU-2024-042 or student@abctech.edu' : 'e.g. FAC-ENG-019 or faculty@abctech.edu'}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Portal Password
                  </label>
                  <input
                    type="password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    placeholder="Enter confidential password"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                  />
                </div>

                {formError && (
                  <p className="text-xs text-rose-600 font-medium">{formError}</p>
                )}

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-300 text-slate-900" defaultChecked />
                    <span>Remember terminal</span>
                  </label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Please contact Campus IT Helpdesk in Room Admin-104 for password recovery.'); }} className="text-slate-600 hover:text-slate-900 underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
                >
                  Sign in to {portalTab === 'student' ? 'Student ERP' : 'Faculty Workspace'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
