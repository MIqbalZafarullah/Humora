import React, { useState } from 'react';
import SigniaLogo from '../components/SigniaLogo';
import { Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess({
      name: 'Rian Adiputra',
      email: email || 'rian.adi@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop',
      bio: 'Pengguna umum yang tertarik belajar bahasa isyarat untuk berkomunikasi dengan teman tuli.'
    });
  };

  const handleDemoLogin = () => {
    onLoginSuccess({
      name: 'Rian Adiputra',
      email: 'rian.adi@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop',
      bio: 'Pengguna umum yang tertarik belajar bahasa isyarat untuk berkomunikasi dengan teman tuli.'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Ambient Mesh Light Spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/25 to-sky-300/20 blur-[120px] animate-mesh-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-indigo-400/20 to-blue-300/15 blur-[100px] animate-mesh-2" />
      </div>

      {/* Floating Liquid Glass Card */}
      <div className="w-full max-w-[480px] liquid-glass rounded-[36px] p-8 md:p-10 border border-white/80 shadow-2xl relative z-10">
        
        {/* Header Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <SigniaLogo size={68} showText={false} className="mb-4 drop-shadow-md" />
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Masuk ke SIGNIA
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-2">
            Jembatan komunikasi digital teman tuli dan dengar
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Email atau Username
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="rian.adi@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium">
              <input type="checkbox" className="rounded border-slate-300 text-primary-500 focus:ring-primary-500 w-4 h-4" />
              Ingat saya
            </label>
            <a href="#forgot" className="text-primary-600 font-bold hover:text-primary-700">
              Lupa sandi?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 liquid-btn-primary text-white font-semibold rounded-2xl shadow-lg"
          >
            Masuk
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8 text-center">
          <hr className="border-slate-200/60" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white/90 backdrop-blur-md text-xs font-bold text-slate-400 uppercase tracking-widest rounded-full">
            Atau
          </span>
        </div>

        {/* Demo Login Button */}
        <button
          onClick={handleDemoLogin}
          className="w-full py-3.5 bg-sky-50/80 hover:bg-sky-100/90 text-sky-700 font-bold rounded-2xl border border-sky-200/60 backdrop-blur-md transition-all duration-200 mb-6 flex items-center justify-center gap-2 shadow-sm active:scale-98"
        >
          <Sparkles className="w-4 h-4 text-sky-500" />
          Masuk Instan (1-Klik Demo)
        </button>

        {/* Register Option */}
        <p className="text-center text-sm text-slate-600 font-medium">
          Belum punya akun?{' '}
          <a href="#register" className="text-primary-600 font-bold hover:text-primary-700">
            Daftar Sekarang
          </a>
        </p>

      </div>
    </div>
  );
}
