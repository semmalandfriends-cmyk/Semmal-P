import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, User, Calendar, FileText, ArrowRight } from 'lucide-react';
import { usePortal } from '../../context/PortalContext';
import { COURSES_DATA, FACULTY_MEMBERS, UPCOMING_EVENTS, COLLEGE_NOTICES } from '../../data/mockData';

export const QuickSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, openCourseModal, setSelectedEvent } = usePortal();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase().trim();

    const courses = COURSES_DATA.filter(
      c => c.name.toLowerCase().includes(q) || 
           c.department.toLowerCase().includes(q) ||
           c.shortDescription.toLowerCase().includes(q)
    );

    const faculty = FACULTY_MEMBERS.filter(
      f => f.name.toLowerCase().includes(q) ||
           f.department.toLowerCase().includes(q) ||
           f.specialization.some(s => s.toLowerCase().includes(q))
    );

    const events = UPCOMING_EVENTS.filter(
      e => e.title.toLowerCase().includes(q) ||
           e.description.toLowerCase().includes(q) ||
           e.type.toLowerCase().includes(q)
    );

    const notices = COLLEGE_NOTICES.filter(
      n => n.title.toLowerCase().includes(q) ||
           n.category.toLowerCase().includes(q)
    );

    return { courses, faculty, events, notices };
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, faculty members, events, circulars..."
            className="w-full text-base bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results / Suggestion Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm">Type any department name, professor, program or event.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['Computer Science', 'Robotics', 'Scholarships', 'Placements', 'MBA'].map(item => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="text-xs px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Courses Match */}
              {results?.courses && results.courses.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Academic Programs ({results.courses.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.courses.map(course => (
                      <div
                        key={course.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          openCourseModal(course.id);
                        }}
                        className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between border border-transparent hover:border-slate-200 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-amber-600">
                            {course.name} ({course.degree})
                          </div>
                          <div className="text-xs text-slate-500">
                            {course.duration} · {course.seats} Seats Available
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty Match */}
              {results?.faculty && results.faculty.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <User className="w-3.5 h-3.5" />
                    <span>Faculty & Professors ({results.faculty.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.faculty.map(f => (
                      <div
                        key={f.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigate('/faculty');
                        }}
                        className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between border border-transparent hover:border-slate-200 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-amber-600">
                            {f.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {f.designation} · {f.department}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Events Match */}
              {results?.events && results.events.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Campus Events & Symposiums ({results.events.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.events.map(ev => (
                      <div
                        key={ev.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSelectedEvent(ev);
                        }}
                        className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between border border-transparent hover:border-slate-200 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-amber-600">
                            {ev.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {ev.date} · {ev.venue}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notices Match */}
              {results?.notices && results.notices.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Circulars & Notices ({results.notices.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.notices.map(n => (
                      <div
                        key={n.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigate('/news-events');
                        }}
                        className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between border border-transparent hover:border-slate-200 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900">
                            {n.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {n.category} · {n.date}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results && 
               results.courses.length === 0 && 
               results.faculty.length === 0 && 
               results.events.length === 0 && 
               results.notices.length === 0 && (
                <div className="py-8 text-center text-slate-500 text-sm">
                  No matching results found for "{query}". Try checking our courses or admissions page.
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Press ESC or click outside to dismiss</span>
          <span>ABC College of Technology Portal</span>
        </div>
      </div>
    </div>
  );
};
