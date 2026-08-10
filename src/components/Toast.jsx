import React, { useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3 px-5 py-4 bg-slate-900 text-white rounded-2xl shadow-premium max-w-sm animate-in slide-in-from-top-5 duration-300">
      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors ml-2"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
