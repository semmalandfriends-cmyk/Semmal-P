import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { usePortal } from '../../context/PortalContext';

export const NotificationToast: React.FC = () => {
  const { notificationMessage, clearNotification } = usePortal();

  useEffect(() => {
    if (!notificationMessage) return;
    const timer = setTimeout(() => {
      clearNotification();
    }, 5000);
    return () => clearTimeout(timer);
  }, [notificationMessage, clearNotification]);

  if (!notificationMessage) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-md bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
      <div className="flex-1 text-xs leading-relaxed text-slate-200">
        {notificationMessage}
      </div>
      <button
        onClick={clearNotification}
        className="text-slate-400 hover:text-white transition-colors p-0.5"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
