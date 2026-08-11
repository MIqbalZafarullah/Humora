import React from 'react';
import { 
  BookOpen, 
  Languages, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

export default function HomePage({ currentUser, onNavigate }) {
  const features = [
    {
      id: 'kamus',
      title: 'Smart Dictionary',
      description: 'Cari kata atau frasa dan saksikan representasi bahasa isyarat visual secara instan menggunakan standardisasi BISINDO dan SIBI.',
      icon: BookOpen,
      color: 'bg-blue-500/10 text-blue-600 border-blue-200/50',
      badge: 'Kosakata Terlengkap',
      details: ['BISINDO & SIBI', '5,000+ Kosakata', 'Ilustrasi Visual HD']
    },
    {
      id: 'penerjemah',
      title: 'Live Interpreter',
      description: 'Simulasi komunikasi dua arah yang lancar. Terjemahkan suara ke teks, serta gerakan tangan isyarat Anda langsung menjadi teks.',
      icon: Languages,
      color: 'bg-sky-500/10 text-sky-600 border-sky-200/50',
      badge: 'Teknologi AI Simulasi',
      details: ['Suara ➔ Teks', 'Isyarat ➔ Teks', 'Respons < 50ms']
    },
    {
      id: 'forum',
      title: 'Inclusive Community',
      description: 'Ruang interaksi inklusif untuk berdiskusi, bertanya, berbagi pengalaman hidup, dan terhubung dengan sesama teman tuli dan dengar.',
      icon: MessageSquare,
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200/50',
      badge: 'Interaktif Inklusif',
      details: ['Diskusi Terbuka', 'Kategori Topik', 'Tanya Jawab Ahli']
    }
  ];

  return (
    <div className="space-y-12">
      {/* Welcome Hero Banner with Liquid Glass Accent */}
      <section className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 text-white p-8 md:p-12 shadow-2xl border border-white/20">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/25 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="relative max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-bold tracking-wider uppercase backdrop-blur-xl border border-white/25 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            Liquid Hub Experience
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Halo, {currentUser?.name || 'Rian'}! <br />
            Selamat Datang di SIGNIA.
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            SIGNIA hadir untuk meruntuhkan batasan komunikasi. Kami menyediakan alat Live Interpreter, Smart Dictionary yang komprehensif, dan Inclusive Community yang ramah untuk menghubungkan teman tuli dan dengar.
          </p>
        </div>
      </section>

      {/* Overview Statistics Cards (Liquid Glass Cards) */}
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
              className="liquid-glass rounded-3xl p-6 border border-white/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-500/10 text-primary-600 flex items-center justify-center border border-primary-200/50 shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                <span className="block text-2xl font-bold text-slate-900 mt-0.5">{stat.value}</span>
                <span className="block text-xs text-slate-400 mt-0.5 font-medium">{stat.desc}</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Features Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Pilar Fitur Utama SIGNIA
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              Pilih layanan di bawah ini untuk memulai interaksi.
            </p>
          </div>
        </div>

        {/* Feature Liquid Glass Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.id}
                className="group relative liquid-glass rounded-[36px] p-8 flex flex-col justify-between hover:border-primary-300 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase px-3 py-1 rounded-full glass-pill">
                      {feat.badge}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feat.color} shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-3 leading-relaxed font-medium">
                    {feat.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mt-6 space-y-2 border-t border-slate-200/50 pt-5">
                    {feat.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Liquid Glass CTA Button */}
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
