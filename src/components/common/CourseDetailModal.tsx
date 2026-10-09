import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Clock, 
  Users, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  Download, 
  DollarSign, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { usePortal } from '../../context/PortalContext';

export const CourseDetailModal: React.FC = () => {
  const { selectedCourse, setSelectedCourse, downloadBrochure } = usePortal();
  const navigate = useNavigate();

  if (!selectedCourse) return null;

  const handleApplyNow = () => {
    const courseId = selectedCourse.id;
    setSelectedCourse(null);
    navigate(`/admissions?course=${courseId}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            onClick={() => setSelectedCourse(null)}
            className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close course details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1.5 pr-8">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
              {selectedCourse.degree} Degree Program · {selectedCourse.department}
            </span>
            <h3 className="text-2xl font-bold text-white font-display">
              {selectedCourse.name}
            </h3>
            <p className="text-xs text-slate-300">
              Approved Intake: {selectedCourse.intakeSeason}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Duration
              </span>
              <span className="text-sm font-bold text-slate-900 mt-1 block">
                {selectedCourse.duration}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                Sanctioned Seats
              </span>
              <span className="text-sm font-bold text-slate-900 mt-1 block">
                {selectedCourse.seats} Seats
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                Annual Tuition
              </span>
              <span className="text-sm font-bold text-slate-900 mt-1 block">
                {selectedCourse.annualFee}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                Accreditation
              </span>
              <span className="text-sm font-bold text-slate-900 mt-1 block">
                NBA Tier-1
              </span>
            </div>
          </div>

          {/* Program Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Program Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedCourse.fullDescription}
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1">
            <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
              Eligibility Criteria
            </h5>
            <p className="text-xs text-amber-950 font-medium leading-relaxed">
              {selectedCourse.eligibility}
            </p>
          </div>

          {/* Core Curriculum Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Core Curriculum & Laboratory Modules</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {selectedCourse.curriculum.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-amber-600 font-bold font-mono text-[11px] mt-0.5">0{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Placement & Career Prospects */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-slate-500" />
              <span>Placement & Career Roles</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {selectedCourse.careerProspects.map((prospect, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-800 font-medium border border-slate-200"
                >
                  {prospect}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => downloadBrochure(selectedCourse)}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg shadow-2xs hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Download Syllabus PDF</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCourse(null)}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900"
            >
              Close
            </button>
            <button
              onClick={handleApplyNow}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Apply for this Course</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
