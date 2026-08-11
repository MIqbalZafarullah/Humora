import React from 'react';
import SigniaLogo from './SigniaLogo';
import { 
  Home, 
  BookOpen, 
  Languages, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function Navbar({ activePage, onNavigate, onLogoutClick }) {
  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'kamus', label: 'Smart Dictionary', icon: BookOpen },
    { id: 'penerjemah', label: 'Live Interpreter', icon: Languages },
    { id: 'forum', label: 'Inclusive Community', icon: MessageSquare },
    { id: 'profil', label: 'Profil', icon: User },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
  ];

  return (
    <>
      {/* Desktop macOS-Style Liquid Glass Navbar */}
      <header className="sticky top-0 z-40 w-full px-6 lg:px-8 py-3 hidden md:block">
        <div className="max-w-7xl mx-auto h-16 px-6 rounded-2xl liquid-glass glass-border-specular flex items-center justify-between transition-all duration-300">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-10">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <SigniaLogo size={34} />
            </button>
            
            {/* Desktop Liquid Navigation Pills */}
            <nav className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-md shadow-primary-500/25 scale-[1.02]' 
                        : 'text-slate-600 hover:text-primary-600 hover:bg-white/80'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Logout Liquid Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onLogoutClick}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50/60 hover:bg-red-100/80 text-red-600 border border-red-200/50 text-xs font-bold transition-all duration-200 active:scale-95 shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              Keluar
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sticky Top Liquid Glass Header */}
      <header className="sticky top-0 z-40 w-full px-4 py-2 md:hidden">
        <div className="h-14 px-5 rounded-2xl liquid-glass flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="flex items-center">
            <SigniaLogo size={28} textClassName="text-base font-bold tracking-tight text-slate-900" />
          </button>
          
          <button
            onClick={onLogoutClick}
            className="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50/80 transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Bottom Liquid Navigation Bar */}
      <nav className="fixed bottom-3 left-2 right-2 z-40 md:hidden">
        <div className="h-16 rounded-2xl liquid-glass grid grid-cols-6 items-center px-1 border border-white/80 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 transition-all duration-200 py-1 ${
                  isActive ? 'text-primary-600 font-bold scale-105' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="text-[9px] leading-none tracking-tighter text-center truncate max-w-full px-0.5">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
