import React, { useState, useMemo } from 'react';
import { 
  Users, 
  BookOpen, 
  Mail, 
  Award, 
  Trophy, 
  Sparkles, 
  Briefcase, 
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { 
  FACULTY_MEMBERS, 
  STUDENT_CLUBS, 
  TESTIMONIALS 
} from '../data/mockData';

export const FacultyPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const departmentsList = useMemo(() => {
    const list = Array.from(new Set(FACULTY_MEMBERS.map(f => f.department)));
    return ['all', ...list];
  }, []);

  const filteredFaculty = useMemo(() => {
    if (selectedDept === 'all') return FACULTY_MEMBERS;
    return FACULTY_MEMBERS.filter(f => f.department === selectedDept);
  }, [selectedDept]);

  const studentAchievements = [
    {
      title: 'First Prize · NASA Space Apps Challenge 2025',
      team: 'Team Asteroid (4th Year CSE & Mech)',
      desc: 'Developed an autonomous asteroid terrain mapping algorithm utilizing computer vision and edge compute.',
    },
    {
      title: 'National Champions · Smart India Hackathon (SIH)',
      team: 'CodeForgers (3rd Year IT)',
      desc: 'Created an AI-driven disaster response dispatch portal adopted by municipal emergency coordination authorities.',
    },
    {
      title: 'Best Design Trophy · Formula Student Bharat 2026',
      team: 'Team Velocita Racing (Mechanical Eng.)',
      desc: 'Fabricated an ultra-lightweight carbon fiber aerodynamic chassis for single-seater collegiate electric racecars.',
    },
    {
      title: 'Gold Medal · Inter-University Coding Olympiad',
      team: 'Rohan Deshmukh (CSE)',
      desc: 'Ranked #1 out of 4,200 participating undergraduate competitive programmers nationally.',
    },
  ];

  const alumniSpotlights = [
    {
      name: 'Aditi Sundaram',
      degree: 'B.Tech CSE (Class of 2018)',
      role: 'Principal Staff Engineer @ Microsoft Azure',
      achievement: 'Architect of core hyper-scale cloud container orchestration engines in Redmond, WA.',
    },
    {
      name: 'Vikram Malhotra',
      degree: 'B.Tech Mechanical (Class of 2015)',
      role: 'Director of Propulsion @ SkyRoot Aerospace',
      achievement: 'Pioneered indigenous cryogenic rocket engine components for commercial satellite launches.',
    },
    {
      name: 'Sneha Patel',
      degree: 'MBA (Class of 2020)',
      role: 'Partner @ Sequoia Capital India & SEA',
      achievement: 'Overseeing early-stage enterprise SaaS and fintech venture capital investments.',
    },
    {
      name: 'Dr. Nikhil Rao',
      degree: 'B.Tech ECE (Class of 2014)',
      role: 'Postdoctoral Fellow @ MIT Nano Labs',
      achievement: 'Authored 22 IEEE papers on 2nm GAAFET transistor channel geometries and quantum spintronics.',
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              Academic Fellowship & Student Life
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              World-Class Faculty, Vibrant Student Societies & Alumni
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Meet our acclaimed scholars with doctorates from MIT, Stanford, and IITs, alongside student trailblazers and distinguished alumni creating global impact.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Directory Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              Scholars & Mentors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Distinguished Faculty Profiles
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              82% of faculty members hold Ph.D. degrees and lead active funded research projects.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg">
            {departmentsList.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedDept === dept
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept.replace('Department of ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((fac) => (
            <div
              key={fac.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
            >
              <div className="space-y-3">
                {/* Avatar Badge */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-base font-mono shadow-xs shrink-0">
                    {fac.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                      {fac.name}
                    </h3>
                    <span className="text-[11px] text-amber-800 font-semibold block">
                      {fac.designation}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  {fac.department}
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 space-y-1">
                  <div>
                    <strong className="text-slate-800">Qualification:</strong> {fac.qualification}
                  </div>
                  <div>
                    <strong className="text-slate-800">Experience:</strong> {fac.experience}
                  </div>
                  <div>
                    <strong className="text-slate-800">Publications:</strong> {fac.publicationsCount} Research Papers
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Specializations:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {fac.specialization.map((spec, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`mailto:${fac.email}`}
                  className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 font-mono"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>{fac.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Clubs & Extracurricular Activities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Campus Vitality
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Student Clubs & Technical Societies
          </h2>
          <p className="text-sm text-slate-600">
            Over 20 student-run organizations where passion transforms into leadership, hackathons, and cultural galas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENT_CLUBS.map((club) => (
            <div
              key={club.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-700 font-semibold px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                    {club.category}
                  </span>
                  <span className="text-slate-500 font-medium">
                    {club.membersCount}+ Active Members
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {club.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {club.description}
                </p>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <div>
                    <strong className="text-slate-700">Student President:</strong> {club.lead}
                  </div>
                  <div>
                    <strong className="text-slate-700">Annual Flagship:</strong> {club.annualFlagshipEvent}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2">
                <button
                  onClick={() => alert(`Enrolled interest in ${club.name}. The student coordinator will reach out via student email.`)}
                  className="w-full py-2 text-xs font-semibold text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  Join Club / Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Achievements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Pride of ABC
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Recent Student Honors & Competition Wins
          </h2>
          <p className="text-sm text-slate-600">
            Recognizing excellence on national and international podiums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentAchievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {ach.title}
              </h4>
              <span className="text-xs text-amber-800 font-semibold block font-mono">
                {ach.team}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Success Stories (Wall of Fame) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Global Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Alumni Hall of Fame
          </h2>
          <p className="text-sm text-slate-600">
            Our 32,000+ strong alumni network spans founding tech unicorns, leading aerospace missions, and running global consulting firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumniSpotlights.map((alumnus, idx) => (
            <div
              key={idx}
              className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between border border-slate-800 shadow-md"
            >
              <div className="space-y-2">
                <span className="text-[10px] text-amber-400 uppercase tracking-wider font-mono">
                  {alumnus.degree}
                </span>
                <h4 className="text-base font-bold text-white">
                  {alumnus.name}
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  {alumnus.role}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  {alumnus.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
