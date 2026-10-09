import React, { useState } from 'react';
import { 
  Building2, 
  Clock, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Compass, 
  ArrowRight,
  Wifi,
  Sparkles
} from 'lucide-react';
import { CAMPUS_FACILITIES, CAMPUS_IMAGES } from '../data/mockData';
import { CampusFacility } from '../types';

export const FacilitiesPage: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<CampusFacility | null>(null);

  return (
    <div className="space-y-16 py-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              Infrastructure & Living
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              45-Acre Smart Green Campus
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Designed to stimulate academic innovation, physical well-being, and community fellowship. Explore our research laboratories, Olympic athletic grounds, residential halls, and digital archives.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPUS_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Facility Image or Styled Gradient Header */}
                {facility.image ? (
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-amber-300 text-xs font-medium backdrop-blur-xs">
                      {facility.category}
                    </div>
                  </div>
                ) : (
                  <div className="h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 flex flex-col justify-between text-white relative">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                        {facility.category}
                      </span>
                      <h4 className="text-lg font-bold font-display text-white">
                        {facility.name}
                      </h4>
                    </div>
                  </div>
                )}

                {/* Details Body */}
                <div className="p-6 space-y-4">
                  {facility.image && (
                    <div>
                      <span className="text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider">
                        {facility.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                        {facility.name}
                      </h3>
                    </div>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {facility.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Strip */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] space-y-1 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span><strong>Timings:</strong> {facility.timings}</span>
                    </div>
                    {facility.capacity && (
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-600" />
                        <span><strong>Capacity:</strong> {facility.capacity}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedFacility(facility)}
                  className="w-full py-2.5 text-xs font-semibold text-slate-900 hover:text-amber-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Facility Policies & Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Details Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-amber-700 font-semibold uppercase">
                  {selectedFacility.category}
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  {selectedFacility.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="text-slate-400 hover:text-slate-800 p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedFacility.description}
            </p>

            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div className="font-semibold text-slate-900">Student Access Guidelines:</div>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Valid RFID Student/Faculty Smart ID card mandatory at all times.</li>
                <li>Equipment reservations must be submitted via the ERP Portal 24 hours prior.</li>
                <li>Emergency contact boxes and first-aid kits available at every building wing.</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedFacility(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Campus Map & Virtual Tour Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              Campus Visit
            </span>
            <h3 className="text-2xl font-bold font-display text-slate-900">
              Schedule an In-Person Campus Walkthrough
            </h3>
            <p className="text-sm text-slate-600">
              Guided tours operate every weekday at 10:00 AM and 2:30 PM. Prospective students and parents are welcome to tour laboratories, dormitories, and dining halls.
            </p>
          </div>

          <a
            href="/contact"
            className="px-6 py-3.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors shrink-0"
          >
            Book Guided Campus Visit
          </a>
        </div>
      </section>
    </div>
  );
};
