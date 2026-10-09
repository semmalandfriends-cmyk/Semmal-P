import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  FileText, 
  Download, 
  Filter, 
  Search, 
  Sparkles, 
  ArrowRight,
  Ticket
} from 'lucide-react';
import { UPCOMING_EVENTS, COLLEGE_NOTICES } from '../data/mockData';
import { usePortal } from '../context/PortalContext';

export const NewsEventsPage: React.FC = () => {
  const { setSelectedEvent } = usePortal();
  const [selectedEventType, setSelectedEventType] = useState<string>('all');
  const [noticeSearch, setNoticeSearch] = useState<string>('');

  const filteredEvents = useMemo(() => {
    if (selectedEventType === 'all') return UPCOMING_EVENTS;
    return UPCOMING_EVENTS.filter(e => e.type === selectedEventType);
  }, [selectedEventType]);

  const filteredNotices = useMemo(() => {
    if (!noticeSearch.trim()) return COLLEGE_NOTICES;
    const q = noticeSearch.toLowerCase().trim();
    return COLLEGE_NOTICES.filter(
      n => n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
    );
  }, [noticeSearch]);

  return (
    <div className="space-y-16 py-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              Campus Happenings & Announcements
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              Symposiums, Cultural Festivals & Official Circulars
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Stay up to date with national hackathons, inter-collegiate athletic meets, distinguished guest lectures, and academic council circulars.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming College Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              Live & Scheduled
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Upcoming College Events & Symposiums
            </h2>
          </div>

          {/* Event Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg">
            {['all', 'symposium', 'workshop', 'cultural', 'sports', 'seminar'].map(type => (
              <button
                key={type}
                onClick={() => setSelectedEventType(type)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors capitalize ${
                  selectedEventType === type
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type === 'all' ? 'All Events' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-700 font-bold uppercase px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200">
                    {event.type}
                  </span>
                  <span className="text-slate-500 font-medium">
                    {event.fee}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {event.description}
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span><strong>Date:</strong> {event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span><strong>Time:</strong> {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate"><strong>Venue:</strong> {event.venue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {event.seatsAvailable} seats open
                </span>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Ticket className="w-3.5 h-3.5 text-amber-400" />
                  <span>View & RSVP</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Notices, Circulars & Announcements Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              Official Bulletin
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Latest Notices, Circulars & Examination Schedules
            </h2>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search notices..."
              value={noticeSearch}
              onChange={(e) => setNoticeSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-slate-900"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
            >
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono font-semibold text-[11px]">
                    {notice.category}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500 font-mono">{notice.date}</span>
                  {notice.isUrgent && (
                    <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-bold uppercase font-mono">
                      Urgent Action Required
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {notice.title}
                </h4>

                <span className="text-xs text-slate-400 font-mono block">
                  Document Reference: {notice.pdfRef}
                </span>
              </div>

              <button
                onClick={() => alert(`Downloaded circular: ${notice.pdfRef} (${notice.fileSize})`)}
                className="px-4 py-2 text-xs font-semibold text-slate-900 hover:text-white bg-slate-100 hover:bg-slate-900 border border-slate-200 rounded-lg flex items-center gap-2 self-start md:self-center shrink-0 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-amber-600" />
                <span>Download Circular ({notice.fileSize})</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
