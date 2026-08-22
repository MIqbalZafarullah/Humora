import React from 'react';
import { 
  BookOpen, 
  Languages, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import HumoraLogo from '../components/HumoraLogo';

export default function HomePage({ currentUser, onNavigate }) {
  const features = [
    {
      id: 'kamus',
      title: 'Smart Dictionary',
      description: 'Cari kata atau frasa dan saksikan representasi bahasa isyarat visual secara instan menggunakan standardisasi BISINDO dan SIBI.',
      icon: BookOpen,
      color: 'bg-[#d9f99d] text-[#0c4a3e] border-[#bef264]',
      badge: 'Kosakata Terlengkap',
      details: ['BISINDO & SIBI', '5,000+ Kosakata', 'Ilustrasi Visual HD']
    },
    {
      id: 'penerjemah',
      title: 'Live Interpreter',
      description: 'Simulasi komunikasi dua arah yang lancar. Terjemahkan suara ke teks, serta gerakan tangan isyarat Anda langsung menjadi teks.',
      icon: Languages,
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-200',
      badge: 'Teknologi AI Simulasi',
      details: ['Suara ➔ Teks', 'Isyarat ➔ Teks', 'Respons < 50ms']
    },
    {
      id: 'forum',
      title: 'Inclusive Community',
      description: 'Ruang interaksi inklusif untuk berdiskusi, bertanya, berbagi pengalaman hidup, dan terhubung dengan sesama teman tuli dan dengar.',
      icon: MessageSquare,
      color: 'bg-amber-500/10 text-amber-700 border-amber-200',
      badge: 'Interaktif Inklusif',
      details: ['Diskusi Terbuka', 'Kategori Topik', 'Tanya Jawab Ahli']
    }
  ];

  return (
    <div className="space-y-12">
      {/* Welcome Hero Banner inspired by Helixora reference design */}
      <section className="relative rounded-[40px] overflow-hidden bg-[#0c4a3e] text-[#faf7f2] p-8 sm:p-12 md:p-14 shadow-2xl border border-white/10">
        {/* Glow Ambient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2dd4bf]/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f59e0b]/15 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="relative max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d9f99d] text-[#0c4a3e] text-xs font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0c4a3e]" />
            Membangun Inklusi & Kesetaraan
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif leading-tight font-normal">
            Halo, <span className="italic font-normal underline decoration-[#d9f99d] decoration-2 underline-offset-4">{currentUser?.name || 'Rian'}</span>! <br />
            Selamat Datang di Humora.
          </h1>

          <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            Humora hadir sebagai identitas dan platform digital baru untuk meruntuhkan batasan komunikasi. Kami menyediakan alat Live Interpreter, Smart Dictionary yang komprehensif, serta Inclusive Community yang hangat untuk menghubungkan teman tuli dan dengar.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onNavigate('penerjemah')}
              className="px-7 py-3.5 rounded-2xl liquid-btn-orange text-white font-bold text-sm flex items-center gap-2.5 shadow-lg active:scale-95"
            >
              Coba Live Interpreter
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => onNavigate('kamus')}
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-md"
            >
              Jelajahi Kamus
            </button>
          </div>
        </div>
      </section>

      {/* Overview Statistics Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Kosakata Terindeks', value: '5,420 Kata', desc: 'Dialek BISINDO & SIBI', icon: BookOpen },
          { label: 'Simulasi Penerjemahan', value: '98.6% Akurasi', desc: 'Berdasarkan model latih', icon: Languages },
          { label: 'Teman Komunitas', value: '2,840 Anggota', desc: 'Saling berinteraksi aktif', icon: MessageSquare }
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div 
              key={idx} 
              className="liquid-glass rounded-3xl p-6 border border-white/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0c4a3e]/10 text-[#0c4a3e] flex items-center justify-center border border-[#0c4a3e]/20 shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                <span className="block text-2xl font-bold text-[#0c4a3e] mt-0.5">{stat.value}</span>
                <span className="block text-xs text-slate-500 mt-0.5 font-medium">{stat.desc}</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Features Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#0c4a3e]">
              Pilar Fitur Utama Humora
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              Pilih layanan di bawah ini untuk memulai interaksi.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.id}
                className="group relative liquid-glass rounded-[36px] p-8 flex flex-col justify-between hover:border-[#0c4a3e]/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold tracking-wider text-[#0c4a3e] uppercase px-3 py-1 rounded-full glass-pill-lime">
                      {feat.badge}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feat.color} shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-serif font-bold text-[#0c4a3e] group-hover:text-teal-700 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">
                    {feat.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mt-6 space-y-2 border-t border-slate-200/60 pt-5">
                    {feat.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onNavigate(feat.id)}
                  className="mt-8 w-full py-3.5 rounded-2xl liquid-btn-primary text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  Buka Fitur
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
