import React from 'react';
import { 
  Award, 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  Calendar, 
  Users, 
  FileCheck, 
  CheckCircle2, 
  Download,
  Building,
  GraduationCap
} from 'lucide-react';
import { PRINCIPAL_INFO, COLLEGE_INFO, CAMPUS_IMAGES } from '../data/mockData';
import { usePortal } from '../context/PortalContext';

export const AboutPage: React.FC = () => {
  const { downloadBrochure } = usePortal();

  const milestones = [
    { year: '1996', title: 'Founding & Inception', desc: 'Established by the ABC Educational Trust with 3 undergraduate engineering disciplines and 180 seats.' },
    { year: '2004', title: 'Campus Expansion', desc: 'Acquisition of the 45-acre Tech Knowledge Park campus and inauguration of the Central Digital Library.' },
    { year: '2012', title: 'Autonomous Status & NBA Tier-1', desc: 'Granted Autonomous Academic Status by UGC, enabling curriculum redesign aligned with global industry needs.' },
    { year: '2018', title: 'AI & Robotics Innovation Center', desc: 'Inaugurated dedicated AI research facility sponsored by major multinational technology partners.' },
    { year: '2024', title: "NAAC Grade 'A++' Re-Accreditation", desc: 'Awarded highest institutional grade with a 3.74 CGPA on a 4-point scale, recognizing research output and outcomes.' },
    { year: '2026', title: '30-Year Jubilee of Excellence', desc: 'Over 8,500 active students, 28 degree programs, and 32,000 global alumni across 45 nations.' },
  ];

  const values = [
    { title: 'Intellectual Integrity', desc: 'Commitment to truthful scientific inquiry, ethical engineering, and transparent governance.' },
    { title: 'Experiential Excellence', desc: 'Learning through fabrication, field experiments, hackathons, and corporate internships rather than rote memorization.' },
    { title: 'Innovation for Humanity', desc: 'Directing technological capabilities toward clean energy, healthcare diagnostics, and societal upliftment.' },
    { title: 'Inclusivity & Character', desc: 'Fostering a respectful, egalitarian campus celebrating diverse cultures and collaborative fellowship.' },
  ];

  const leadershipTeam = [
    { name: 'Dr. Arthur Sterling', role: 'Principal & Head of Academic Council', qual: 'Ph.D. (MIT), Fellow IEEE' },
    { name: 'Dr. Rajeshwar Sharma', role: 'Dean of Academic Affairs', qual: 'Ph.D. (IISc Bangalore)' },
    { name: 'Dr. Sunita Deshmukh', role: 'Dean of Sponsored Research & Industrial Consultancy', qual: 'Ph.D. (IIT Madras)' },
    { name: 'Prof. Marcus Vance', role: 'Dean of Student Welfare & Campus Life', qual: 'M.Tech, Ph.D.' },
    { name: 'Dr. Priya Narayanan', role: 'Director, School of Business & Management', qual: 'Ph.D. (London Business School)' },
    { name: 'Mr. Arvind Saxena', role: 'Registrar & Chief Administrative Officer', qual: 'M.B.A., LL.B.' },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              About ABC College of Technology
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              A Legacy of Academic Rigor, Research & Leadership
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Established in 1996, ABC College of Technology has been recognized as one of the country's most respected autonomous engineering and management institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-display text-slate-900">
              Our Vision
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              "To be an internationally acclaimed center of excellence in engineering, computing, and executive leadership, fostering breakthrough technological research and developing professionals endowed with technical competence, moral character, and social responsibility."
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-display text-slate-900">
              Our Mission
            </h2>
            <ul className="text-sm text-slate-600 space-y-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Deliver cutting-edge curricula benchmarked against global technical standards and emerging industrial frontiers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Nurture exploratory research, patent innovation, and interdisciplinary problem-solving across students and faculty.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Cultivate leadership grounded in sustainability, human empathy, and universal ethical values.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values Strip */}
        <div className="mt-8 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono text-center mb-6">
            Institutional Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-900">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Detailed Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="lg:col-span-4">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={PRINCIPAL_INFO.image}
                alt={PRINCIPAL_INFO.name}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-3 text-center sm:text-left">
              <h4 className="text-base font-bold text-slate-900">{PRINCIPAL_INFO.name}</h4>
              <p className="text-xs text-amber-700 font-medium">{PRINCIPAL_INFO.title}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{PRINCIPAL_INFO.credentials}</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              Academic Direction
            </span>
            <h2 className="text-2xl font-bold font-display text-slate-900">
              Principal's Vision & Perspective
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                "At ABC College of Technology, we look at engineering not simply as an occupational degree, but as humanity’s primary instrument for constructing a safer, more sustainable, and intellectually vibrant tomorrow."
              </p>
              <p>
                "Our autonomous framework allows our departments to refresh course syllabi every two years in direct consultation with advisory boards from Google, Microsoft, Qualcomm, and premier global universities. When our students step onto our campus, they join a community of scholars determined to publish papers, launch startups, and engineer real solutions."
              </p>
              <p>
                "We take equal pride in our moral ethos. High technical skill without ethical clarity is perilous; our graduates are taught to question consequences, honor environmental stewardship, and serve community needs."
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => downloadBrochure()}
                className="px-4 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg inline-flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                <span>Download College Annual Institutional Report</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* College Achievements, Accreditations & Recognitions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Quality Benchmarks
          </span>
          <h2 className="text-2xl font-bold font-display text-slate-900">
            Accreditations & National Recognitions
          </h2>
          <p className="text-sm text-slate-600">
            Certified at the highest tier of Indian and international higher education standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <Award className="w-6 h-6 text-amber-500" />
            <h4 className="text-sm font-bold text-slate-900">NAAC Grade 'A++'</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Accredited with an exceptional 3.74/4.00 score by the National Assessment and Accreditation Council.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            <h4 className="text-sm font-bold text-slate-900">NBA Accredited Tier-1</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              All undergraduate engineering programs are fully accredited under the Washington Accord Tier-1 system.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <Building className="w-6 h-6 text-amber-500" />
            <h4 className="text-sm font-bold text-slate-900">NIRF Top 35 Engineering</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Consistently ranked among the top 35 engineering institutions by the Ministry of Education NIRF framework.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <FileCheck className="w-6 h-6 text-amber-500" />
            <h4 className="text-sm font-bold text-slate-900">UGC Autonomous</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Autonomous status granted by UGC and AICTE, granting academic flexibility to update modern courses.
            </p>
          </div>
        </div>
      </section>

      {/* 30-Year Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Our Journey
          </span>
          <h2 className="text-2xl font-bold font-display text-slate-900">
            Three Decades of Growth & Impact
          </h2>
          <p className="text-sm text-slate-600">
            From modest beginnings in 1996 to one of the premier technical colleges in the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2 relative">
              <span className="text-xs font-mono font-bold text-amber-600 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 inline-block">
                {m.year}
              </span>
              <h4 className="text-base font-bold text-slate-900">
                {m.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Leadership & Administration Council */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Governance
          </span>
          <h2 className="text-2xl font-bold font-display text-slate-900">
            Administration & Academic Leadership
          </h2>
          <p className="text-sm text-slate-600">
            Distinguished deans, directors, and researchers guiding academic operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadershipTeam.map((lead, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <h4 className="text-sm font-bold text-slate-900">{lead.name}</h4>
              <p className="text-xs text-amber-700 font-medium">{lead.role}</p>
              <p className="text-[11px] text-slate-500 font-mono">{lead.qual}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
