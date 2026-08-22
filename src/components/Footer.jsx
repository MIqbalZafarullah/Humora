import React from 'react';
import HumoraLogo from './HumoraLogo';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-[#0c4a3e]/10 mt-auto py-10 pb-28 md:pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <HumoraLogo size={32} textClassName="text-xl font-serif font-bold text-[#0c4a3e]" />
            <p className="text-xs text-slate-500 text-center md:text-left font-medium">
              Platform Digital Inklusif untuk Menjembatani Komunikasi Melalui Bahasa Isyarat.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#0c4a3e]/80 font-semibold">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0c4a3e] transition-colors">Beranda</button>
            <button onClick={() => onNavigate('kamus')} className="hover:text-[#0c4a3e] transition-colors">Smart Dictionary</button>
            <button onClick={() => onNavigate('penerjemah')} className="hover:text-[#0c4a3e] transition-colors">Live Interpreter</button>
            <button onClick={() => onNavigate('forum')} className="hover:text-[#0c4a3e] transition-colors">Inclusive Community</button>
          </div>
        </div>
        
        <div className="border-t border-slate-200/60 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Humora Hub. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#0c4a3e] bg-[#d9f99d] px-4 py-1.5 rounded-full border border-[#bef264] font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0c4a3e] animate-ping"></span>
            Humora Prototype Mode
          </div>
        </div>
      </div>
    </footer>
  );
}
