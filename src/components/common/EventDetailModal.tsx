import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  CheckCircle2, 
  Ticket, 
  AlertCircle 
} from 'lucide-react';
import { usePortal } from '../../context/PortalContext';

export const EventDetailModal: React.FC = () => {
  const { selectedEvent, setSelectedEvent } = usePortal();
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [registeredTicket, setRegisteredTicket] = useState<string | null>(null);

  if (!selectedEvent) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail) return;
    const ticketId = `EVT-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegisteredTicket(ticketId);
  };

  const handleClose = () => {
    setSelectedEvent(null);
    setRegisteredTicket(null);
    setAttendeeName('');
    setAttendeeEmail('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
            {selectedEvent.type.toUpperCase()} · Registration Open
          </span>
          <h3 className="text-xl font-bold font-display text-white pr-6">
            {selectedEvent.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <Calendar className="w-4 h-4 text-amber-600" />
              <div>
                <span className="text-slate-500 block">Date</span>
                <span className="font-semibold text-slate-900">{selectedEvent.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <Clock className="w-4 h-4 text-amber-600" />
              <div>
                <span className="text-slate-500 block">Time</span>
                <span className="font-semibold text-slate-900">{selectedEvent.time}</span>
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <span className="text-slate-500 block">Venue</span>
                <span className="font-semibold text-slate-900">{selectedEvent.venue}</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Organizer / Speaker
            </span>
            <p className="text-xs text-slate-700 font-medium">
              {selectedEvent.speakerOrOrganizer}
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              About the Event
            </span>
            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedEvent.description}
            </p>
          </div>

          {/* Registration Section */}
          <div className="pt-2 border-t border-slate-200">
            {registeredTicket ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-950">
                  Registration Confirmed!
                </h4>
                <p className="text-xs text-emerald-800">
                  Your ticket has been generated. An invitation pass has been prepared for <strong className="font-semibold">{attendeeName}</strong>.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-emerald-300 font-mono text-xs font-bold text-emerald-900 mt-1">
                  <Ticket className="w-3.5 h-3.5 text-emerald-600" />
                  <span>PASS ID: {registeredTicket}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Reserve Free Attendee Seat ({selectedEvent.seatsAvailable} spots remaining)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className="px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-slate-900"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={attendeeEmail}
                    onChange={(e) => setAttendeeEmail(e.target.value)}
                    className="px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-slate-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
                >
                  Confirm Registration ({selectedEvent.fee})
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
