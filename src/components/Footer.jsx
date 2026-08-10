import React from 'react';
import SigniaLogo from './SigniaLogo';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto py-10 pb-28 md:pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <SigniaLogo size={28} textClassName="text-lg font-bold text-slate-800" />
            <p className="text-xs text-slate-400 text-center md:text-left">
              Platform Digital untuk Menjembatani Komunikasi Melalui Bahasa Isyarat.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-primary-500 transition-colors">Beranda</button>
            <button onClick={() => onNavigate('kamus')} className="hover:text-primary-500 transition-colors">Kamus BISINDO & SIBI</button>
            <button onClick={() => onNavigate('penerjemah')} className="hover:text-primary-500 transition-colors">Penerjemah Real-Time</button>
            <button onClick={() => onNavigate('forum')} className="hover:text-primary-500 transition-colors">Forum Komunitas</button>
          </div>
        </div>
        
        <div className="border-t border-slate-100 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} SIGNIA Hub. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-xs text-primary-400 bg-primary-50/50 px-3.5 py-1.5 rounded-full border border-primary-100/50">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping"></span>
            Prototype Mode
          </div>
        </div>
      </div>
    </footer>
  );
}
