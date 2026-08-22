import React from 'react';
import HumoraLogo from './HumoraLogo';
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
      {/* Desktop macOS-Style Organic Liquid Glass Navbar */}
      <header className="sticky top-0 z-40 w-full px-6 lg:px-8 py-3.5 hidden md:block">
        <div className="max-w-7xl mx-auto h-16 px-6 rounded-2xl liquid-glass glass-border-specular flex items-center justify-between transition-all duration-300">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-10">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <HumoraLogo size={36} textClassName="text-2xl font-serif font-bold text-[#0c4a3e]" />
            </button>
            
            {/* Desktop Navigation Pills */}
            <nav className="flex items-center gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#0c4a3e] text-[#d9f99d] shadow-md shadow-[#0c4a3e]/20 scale-[1.02]' 
                        : 'text-[#0c4a3e]/70 hover:text-[#0c4a3e] hover:bg-white/80'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#d9f99d]' : 'text-[#0c4a3e]/60'}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Logout Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onLogoutClick}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/60 text-xs font-bold transition-all duration-200 active:scale-95 shadow-xs"
            >
              <LogOut className="w-4 h-4 text-amber-700" />
              Keluar
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sticky Top Header */}
      <header className="sticky top-0 z-40 w-full px-4 py-2 md:hidden">
        <div className="h-14 px-5 rounded-2xl liquid-glass flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="flex items-center">
            <HumoraLogo size={30} textClassName="text-xl font-serif font-bold text-[#0c4a3e]" />
          </button>
          
          <button
            onClick={onLogoutClick}
            className="p-2 rounded-xl text-slate-500 hover:text-amber-700 hover:bg-amber-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-3 left-2 right-2 z-40 md:hidden">
        <div className="h-16 rounded-2xl liquid-glass grid grid-cols-6 items-center px-1 border border-white/90 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 transition-all duration-200 py-1 ${
                  isActive ? 'text-[#0c4a3e] font-bold scale-105' : 'text-slate-400 hover:text-slate-600'
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
