import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  ExternalLink,
  ShieldCheck,
  Download
} from 'lucide-react';
import { COLLEGE_INFO } from '../../data/mockData';
import { usePortal } from '../../context/PortalContext';

export const Footer: React.FC = () => {
  const { downloadBrochure, setIsPortalOpen, setPortalTab } = usePortal();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand & Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display uppercase block">
                  ABC College of Technology
                </span>
                <span className="text-xs text-amber-400/90 tracking-wide font-medium">
                  Autonomous · NBA Tier-1 · NAAC Grade 'A++'
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              Pioneering excellence in engineering, digital sciences, and modern enterprise leadership since 1996. Dedicated to rigorous inquiry, experiential learning, and societal innovation.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                NIRF Top 35
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                AICTE Approved
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                ISO 9001:2015
              </span>
            </div>

            <div className="pt-3">
              <button
                onClick={() => downloadBrochure()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download College Prospectus 2026-27</span>
              </button>
            </div>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/courses" className="hover:text-amber-400 transition-colors">
                  Computer Science & Eng.
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-amber-400 transition-colors">
                  Information Technology
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-amber-400 transition-colors">
                  Electronics & Comm. Eng.
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-amber-400 transition-colors">
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-amber-400 transition-colors">
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-amber-400 transition-colors">
                  MBA - Business Administration
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-amber-400 transition-colors">
                  MCA - Computer Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Portals & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Institutional Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/admissions" className="hover:text-amber-400 transition-colors">
                  Admissions & Eligibility
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-amber-400 transition-colors">
                  Campus & Laboratories
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-amber-400 transition-colors">
                  Faculty Directory & Research
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="hover:text-amber-400 transition-colors">
                  Notices, Circulars & Events
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => { setPortalTab('student'); setIsPortalOpen(true); }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Student ERP Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setPortalTab('faculty'); setIsPortalOpen(true); }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Faculty Academic Management
                </button>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  Mandatory Disclosures & IQAC
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Directory & Campus Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COLLEGE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COLLEGE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COLLEGE_INFO.email}</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Office Hours: 8:30 AM – 5:00 PM (Mon – Sat)
              </div>
            </div>

            <div className="pt-3">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                <span className="text-white font-semibold block mb-1">Admissions Helpline</span>
                <span className="text-amber-400 font-mono text-sm block font-semibold">+1 (800) 222-8324</span>
                <span className="text-[11px] text-slate-400">Toll-free admissions assistance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} ABC College of Technology. All rights reserved.</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">{COLLEGE_INFO.affiliations}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/about" className="hover:text-white transition-colors">Anti-Ragging Policy</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors">Grievance Redressal</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
