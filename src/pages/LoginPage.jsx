import React, { useState } from 'react';
import SigniaLogo from '../components/SigniaLogo';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess({
      name: 'Rian Adiputra',
      email: email || 'demo@signia.id',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop',
      bio: 'Pengguna umum yang tertarik belajar bahasa isyarat untuk berkomunikasi dengan teman tuli.'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      
      {/* Background Ambient Mesh Light Spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/25 to-sky-300/20 blur-[120px] animate-mesh-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-indigo-400/20 to-blue-300/15 blur-[100px] animate-mesh-2" />
      </div>

      {/* Floating Liquid Glass Card */}
      <div className="w-full max-w-[440px] liquid-glass rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 border border-white/80 shadow-2xl relative z-10">
        
        {/* Header Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <SigniaLogo size={68} showText={false} className="mb-4 drop-shadow-md" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Masuk ke SIGNIA
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
            Jembatan komunikasi digital teman tuli dan dengar
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Email atau Username
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Masukkan teks..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-primary-500 focus:outline-none transition-all duration-200 shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Kata Sandi
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan teks..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-primary-500 focus:outline-none transition-all duration-200 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium">
              <input type="checkbox" className="rounded border-slate-300 text-primary-500 focus:ring-primary-500 w-4 h-4" />
              Ingat saya
            </label>
            <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-primary-600 font-bold hover:text-primary-700">
              Lupa sandi?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 liquid-btn-primary text-white font-semibold rounded-2xl shadow-lg active:scale-98 transition-all"
          >
            Masuk
          </button>
        </form>

        {/* Subtle Demo Credentials Info */}
        <div className="mt-6 text-center text-xs text-slate-500 bg-slate-100/70 backdrop-blur-sm py-2.5 px-4 rounded-xl border border-slate-200/60 shadow-xs">
          <p className="font-medium">
            <span className="font-semibold text-slate-700">Username:</span> demo &nbsp;|&nbsp; <span className="font-semibold text-slate-700">Password:</span> demo123
          </p>
        </div>

        {/* Register Option */}
        <p className="text-center text-xs sm:text-sm text-slate-600 font-medium mt-6">
          Belum punya akun?{' '}
          <a href="#register" onClick={(e) => e.preventDefault()} className="text-primary-600 font-bold hover:text-primary-700">
            Daftar Sekarang
          </a>
        </p>

      </div>
    </div>
  );
}
