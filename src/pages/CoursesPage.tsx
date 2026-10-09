import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  Search, 
  ArrowRight, 
  Download, 
  ChevronRight, 
  Filter,
  CheckCircle2,
  DollarSign
} from 'lucide-react';
import { COURSES_DATA } from '../data/mockData';
import { usePortal } from '../context/PortalContext';

export const CoursesPage: React.FC = () => {
  const { openCourseModal, downloadBrochure } = usePortal();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDegree, setSelectedDegree] = useState<'all' | 'B.Tech' | 'MBA' | 'MCA'>('all');

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter(course => {
      const matchesSearch = 
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDegree = selectedDegree === 'all' || course.degree === selectedDegree;
      return matchesSearch && matchesDegree;
    });
  }, [searchTerm, selectedDegree]);

  return (
    <div className="space-y-12 py-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              Academic Curricula & Degrees
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              Undergraduate & Postgraduate Programs
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our seven premier departments offering cutting-edge engineering, computing, and management education with NBA Tier-1 accreditation and AICTE approval.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Degree Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedDegree('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedDegree === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Programs ({COURSES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedDegree('B.Tech')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedDegree === 'B.Tech'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              B.Tech Engineering (5)
            </button>
            <button
              onClick={() => setSelectedDegree('MBA')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedDegree === 'MBA'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              School of Management (MBA)
            </button>
            <button
              onClick={() => setSelectedDegree('MCA')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedDegree === 'MCA'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Computer Applications (MCA/BCA)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by course name or keyword..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
            />
          </div>
        </div>
      </section>

      {/* Courses Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
            >
              <div className="space-y-4">
                {/* Header Tag Strip */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 font-mono font-bold border border-amber-200/80">
                    {course.degree}
                  </span>
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {course.duration}
                  </span>
                </div>

                {/* Course Name */}
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-amber-600 transition-colors">
                    {course.name}
                  </h3>
                  <span className="text-xs text-slate-500 mt-0.5 block">
                    {course.department}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {course.shortDescription}
                </p>

                {/* Eligibility & Seats Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <Users className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Approved Intake:</strong> {course.seats} Seats</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <DollarSign className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Tuition:</strong> {course.annualFee}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60 leading-normal">
                    <strong>Eligibility:</strong> {course.eligibility}
                  </div>
                </div>

                {/* Key Syllabus Pills */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Curriculum Modules:
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px]">
                    {course.curriculum.slice(0, 3).map((mod, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {mod}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                      +{course.curriculum.length - 3} more
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => openCourseModal(course.id)}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-900 hover:text-amber-600 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => downloadBrochure(course)}
                    title="Download Syllabus PDF"
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to={`/admissions?course=${course.id}`}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-900">No courses match your search criteria</h4>
            <p className="text-xs text-slate-500 mt-1">Try resetting the degree filter or typing another search keyword.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedDegree('all'); }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Autonomous Academic Features Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
          <h3 className="text-base font-bold font-display text-slate-900 text-center">
            Autonomous Academic Excellence Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="space-y-1.5 p-4 rounded-xl bg-white border border-slate-200">
              <strong className="text-slate-900 text-sm block">Industry-Designed Curriculum</strong>
              <p>Course structures reviewed biennially with tech leaders from Microsoft, Google, Qualcomm, and Infosys.</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-white border border-slate-200">
              <strong className="text-slate-900 text-sm block">Choice-Based Credit System (CBCS)</strong>
              <p>Students can pick interdisciplinary open electives across AI, financial modeling, robotics, and design thinking.</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-white border border-slate-200">
              <strong className="text-slate-900 text-sm block">Honors & Minor Degrees</strong>
              <p>Opportunity to graduate with an Honors in advanced computing or a Minor in Business Analytics alongside B.Tech.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
