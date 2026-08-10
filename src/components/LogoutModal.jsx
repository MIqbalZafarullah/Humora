import React from 'react';
import { LogOut, X } from 'lucide-react';

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-premium border border-slate-100 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-5">
          <LogOut className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Konfirmasi Keluar
        </h3>
        
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          Apakah Anda yakin ingin keluar dari akun Anda? Sesi Anda akan berakhir dan Anda harus masuk kembali.
        </p>
        
        <div className="grid grid-cols-2 gap-3 w-full">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="w-full py-3 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}
