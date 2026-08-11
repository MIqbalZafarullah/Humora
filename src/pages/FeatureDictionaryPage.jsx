import React, { useState } from 'react';
import { 
  Search, 
  Volume2, 
  ArrowLeft, 
  Info,
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle
} from 'lucide-react';

function HandGestureVisual({ word }) {
  switch (word) {
    case 'Selamat Pagi':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          <defs>
            <linearGradient id="gradPagi" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Sun / Rising Horizon */}
          <path d="M 30 130 Q 100 70 170 130" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="100" cy="120" r="40" fill="url(#gradPagi)" />
          {/* Rising Motion Arrow */}
          <path d="M 100 110 L 100 45" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4 4" className="animate-pulse" />
          <polygon points="100,35 93,48 107,48" fill="#38bdf8" />
          {/* Hand Silhouette */}
          <g transform="translate(65, 55)">
            <path d="M 20 50 C 20 30 35 25 35 25 C 35 25 40 10 48 12 C 55 14 52 28 52 28 C 52 28 60 18 67 22 C 73 26 66 36 66 36 C 66 36 73 32 76 38 C 79 44 70 48 65 52 L 40 65 C 30 65 20 60 20 50 Z" 
                  fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
            {/* OK Circle Gesture detail */}
            <circle cx="30" cy="40" r="10" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
          </g>
          <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">
            Gerakan Tangan Naik (Matahari Terbit)
          </text>
        </svg>
      );
    case 'Darurat':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          {/* Warning pulse circles */}
          <circle cx="100" cy="70" r="55" fill="#ef4444" fillOpacity="0.1" className="animate-ping" />
          <circle cx="100" cy="70" r="40" fill="#f87171" fillOpacity="0.2" />
          {/* Crossed Arms X shape */}
          <g stroke="#f87171" strokeWidth="12" strokeLinecap="round">
            <line x1="50" y1="110" x2="150" y2="30" />
            <line x1="150" y1="110" x2="50" y2="30" />
          </g>
          {/* Fists / Open Hand Overlay */}
          <circle cx="150" cy="30" r="14" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
          <circle cx="50" cy="30" r="14" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
          <text x="100" y="152" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">
            Silang Pergelangan (Huruf X Darurat)
          </text>
        </svg>
      );
    case 'Halo':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          {/* Waving Arcs */}
          <path d="M 135 40 Q 155 60 135 80" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M 145 30 Q 170 60 145 90" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
          {/* Raised Palm */}
          <g transform="translate(60, 30)">
            {/* Palm & Fingers */}
            <path d="M 30 80 L 30 45 C 30 35 40 35 40 45 L 40 25 C 40 15 50 15 50 25 L 50 20 C 50 10 60 10 60 20 L 60 28 C 60 18 70 18 70 28 L 70 60 C 70 75 55 90 35 90 Z" 
                  fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
            {/* Thumb */}
            <path d="M 30 65 C 20 60 15 50 20 40 C 25 35 30 45 30 55 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
          </g>
          <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">
            Lambaian Telapak Tangan Sejajar Pelipis
          </text>
        </svg>
      );
    case 'Terima Kasih':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          {/* Chin Profile Indicator */}
          <path d="M 50 30 Q 50 70 70 85" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
          <circle cx="50" cy="30" r="10" fill="#94a3b8" />
          {/* Motion Arrow Forward & Down */}
          <path d="M 75 60 Q 110 60 140 90" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeDasharray="4 4" className="animate-pulse" />
          <polygon points="145,95 133,93 140,81" fill="#38bdf8" />
          {/* Hand Silhouette */}
          <g transform="translate(70, 45)">
            <path d="M 10 20 Q 35 10 50 20 Q 55 35 40 45 Q 20 45 10 30 Z" fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
          </g>
          <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">
            Sentuh Dagu lalu Gerakkan ke Depan
          </text>
        </svg>
      );
    case 'Tolong':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          {/* Two joined hands / prayer gesture */}
          <g transform="translate(65, 25)">
            {/* Left Palm */}
            <path d="M 35 85 L 35 25 C 35 15 25 20 25 30 L 25 75 Z" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
            {/* Right Palm */}
            <path d="M 35 85 L 35 25 C 35 15 45 20 45 30 L 45 75 Z" fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
            {/* Wrist joint */}
            <rect x="23" y="75" width="24" height="15" rx="4" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1" />
          </g>
          {/* Downward Motion Arrows */}
          <path d="M 100 100 L 100 125" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 3" />
          <polygon points="100,132 94,122 106,122" fill="#38bdf8" />
          <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">
            Dua Telapak Katup di Depan Dada
          </text>
        </svg>
      );
    case 'Maaf':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          {/* Circular Rotation Arrow on Chest */}
          <path d="M 100 35 A 35 35 0 1 1 65 70" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4 4" />
          <polygon points="65,60 60,74 74,72" fill="#38bdf8" />
          {/* Fist Icon */}
          <g transform="translate(80, 50)">
            <rect x="0" y="0" width="40" height="35" rx="10" fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
            <path d="M 5 10 L 35 10 M 5 18 L 35 18 M 5 26 L 35 26" stroke="#ffffff" strokeWidth="2" />
          </g>
          <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">
            Genggaman Putar Searah Jarum Jam di Dada
          </text>
        </svg>
      );
    case 'Saya':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          {/* Torso/Chest Outline */}
          <path d="M 60 120 C 60 80 140 80 140 120" fill="none" stroke="#475569" strokeWidth="3" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="6" fill="#38bdf8" />
          {/* Pointing Index Finger Hand */}
          <g transform="translate(85, 30)">
            {/* Extended Index Finger pointing down to chest */}
            <rect x="10" y="0" width="10" height="45" rx="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
            <rect x="0" y="35" width="30" height="25" rx="8" fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
          </g>
          {/* Downward Arrow */}
          <path d="M 100 65 L 100 90" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 3" />
          <polygon points="100,96 94,86 106,86" fill="#38bdf8" />
          <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">
            Jari Telunjuk Menunjuk ke Dada Sendiri
          </text>
        </svg>
      );
    case 'Kamu':
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          {/* Pointing Forward Arrow */}
          <path d="M 100 80 L 100 35" stroke="#38bdf8" strokeWidth="3.5" strokeDasharray="4 4" className="animate-pulse" />
          <polygon points="100,25 93,38 107,38" fill="#38bdf8" />
          {/* Pointing Hand */}
          <g transform="translate(85, 65)">
            <rect x="10" y="0" width="10" height="40" rx="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
            <rect x="0" y="25" width="30" height="25" rx="8" fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
          </g>
          <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">
            Jari Telunjuk Menunjuk Lurus ke Depan
          </text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 160" className="w-full h-40 max-w-[240px] mx-auto">
          <circle cx="100" cy="70" r="35" fill="#3b82f6" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
          <g transform="translate(85, 45)">
            <path d="M 15 50 L 15 20 C 15 10 25 10 25 20 L 25 45 Z" fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
          </g>
          <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">
            Ilustrasi Isyarat Bahasa Tangan
          </text>
        </svg>
      );
  }
}

export default function FeatureDictionaryPage({ onNavigate, showToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDialect, setSelectedDialect] = useState('Semua'); // Semua, BISINDO, SIBI
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [expandedWordId, setExpandedWordId] = useState(null);

  // Categories
  const categories = ['Semua', 'Percakapan', 'Kata Ganti', 'Ungkapan Harian', 'Darurat'];

  // Dummy vocabulary data
  const vocabularies = [
    {
      id: 1,
      word: 'Halo',
      dialect: 'BISINDO',
      category: 'Percakapan',
      description: 'Lambaikan tangan kanan ke arah depan sejajar dengan pelipis, telapak tangan menghadap ke depan, jari-jari rapat.'
    },
    {
      id: 2,
      word: 'Terima Kasih',
      dialect: 'BISINDO',
      category: 'Ungkapan Harian',
      description: 'Sentuhkan ujung jari-jari tangan kanan (telapak menghadap ke dalam) ke dagu/bibir bawah, lalu gerakkan tangan ke depan dan bawah ke arah lawan bicara.'
    },
    {
      id: 3,
      word: 'Tolong',
      dialect: 'SIBI',
      category: 'Percakapan',
      description: 'Katupkan kedua telapak tangan bersama-sama di depan dada (seperti gerakan berdoa) lalu gerakkan sedikit ke bawah.'
    },
    {
      id: 4,
      word: 'Maaf',
      dialect: 'BISINDO',
      category: 'Ungkapan Harian',
      description: 'Genggam tangan kanan lalu letakkan di dada bagian kiri, putar tangan searah jarum jam dengan lembut di atas dada.'
    },
    {
      id: 5,
      word: 'Saya',
      dialect: 'BISINDO',
      category: 'Kata Ganti',
      description: 'Arahkan jari telunjuk tangan kanan dan sentuhkan ujungnya dengan lembut ke tengah dada sendiri.'
    },
    {
      id: 6,
      word: 'Kamu',
      dialect: 'SIBI',
      category: 'Kata Ganti',
      description: 'Arahkan jari telunjuk tangan kanan langsung ke depan menunjuk ke arah lawan bicara.'
    },
    {
      id: 7,
      word: 'Selamat Pagi',
      dialect: 'BISINDO',
      category: 'Percakapan',
      description: 'Sentuhkan ujung jari telunjuk dan jempol membentuk lingkaran (isyarat OK), gerakkan dari bawah dada ke atas sambil membuka telapak tangan menghadap ke atas melambangkan matahari terbit.'
    },
    {
      id: 8,
      word: 'Darurat',
      dialect: 'SIBI',
      category: 'Darurat',
      description: 'Silangkan kedua pergelangan tangan di depan dada membentuk huruf X dengan telapak tangan mengepal kencang, lalu buka jari-jari dengan cepat.'
    }
  ];

  // Filter logic
  const filteredVocab = vocabularies.filter(item => {
    const matchesSearch = item.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDialect = selectedDialect === 'Semua' || item.dialect === selectedDialect;
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    
    return matchesSearch && matchesDialect && matchesCategory;
  });

  const speakWord = (word) => {
    showToast(`Membunyikan audio untuk kata: "${word}"`);
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'id-ID';
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleExpand = (id) => {
    setExpandedWordId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-8">
      {/* Header Back Button */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onNavigate('home')}
          className="p-2.5 rounded-2xl liquid-glass text-slate-600 hover:text-primary-600 hover:border-primary-200 transition-all duration-200 active:scale-95 shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Smart Dictionary
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Cari kata dan lihat representasi bahasa isyarat visual terstandardisasi.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="liquid-glass rounded-3xl p-6 border border-white/80 shadow-lg space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari kata atau frasa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-primary-500 focus:outline-none transition-all duration-200 shadow-sm"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Standar Bahasa Isyarat:
          </span>
          <div className="flex bg-slate-200/50 p-1 rounded-xl backdrop-blur-sm border border-slate-200/40">
            {['Semua', 'BISINDO', 'SIBI'].map((dialect) => (
              <button
                key={dialect}
                onClick={() => setSelectedDialect(dialect)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  selectedDialect === dialect
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {dialect}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Pill Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                : 'glass-pill text-slate-600 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Expandable Dictionary Tutorial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {filteredVocab.length > 0 ? (
          filteredVocab.map((item) => {
            const isExpanded = expandedWordId === item.id;
            return (
              <div 
                key={item.id}
                className={`rounded-[32px] border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'liquid-glass-blue border-primary-300 ring-2 ring-primary-500/20 shadow-xl' 
                    : 'liquid-glass border-white/80 hover:border-slate-300 shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Main Card Header */}
                <div className="p-6 md:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                      item.dialect === 'BISINDO' 
                        ? 'bg-blue-500/10 text-blue-600 border border-blue-200/40' 
                        : 'bg-sky-500/10 text-sky-600 border border-sky-200/40'
                    }`}>
                      {item.dialect}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {item.word}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Interactive Toggle Button */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className={`w-full py-3 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 ${
                      isExpanded
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-primary-50/80 hover:bg-primary-100 text-primary-700 border border-primary-200/60'
                    }`}
                  >
                    <span>{isExpanded ? 'Sembunyikan Isyarat' : 'Lihat Isyarat'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Inline Hand Sign Illustration Section */}
                {isExpanded && (
                  <div className="px-6 pb-7 pt-2 border-t border-primary-200/50 space-y-5 animate-in fade-in zoom-in-95 duration-200 bg-white/40 backdrop-blur-md">
                    
                    {/* Visualizer Frame with Hand Illustration */}
                    <div className="relative bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-4 overflow-hidden border border-slate-800 shadow-inner flex flex-col items-center justify-center">
                      
                      {/* Audio Button floating top-right */}
                      <button
                        onClick={() => speakWord(item.word)}
                        className="absolute top-3 right-3 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-md border border-white/20 transition-all active:scale-95 shadow-sm"
                        title="Suarakan Kata"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      {/* Top Label */}
                      <div className="w-full flex items-center justify-between text-[10px] text-sky-300 font-bold mb-2">
                        <span className="flex items-center gap-1.5 uppercase tracking-widest">
                          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                          Ilustrasi Gerakan Tangan
                        </span>
                      </div>

                      {/* SVG Hand Gesture Render */}
                      <HandGestureVisual word={item.word} />

                    </div>

                    {/* Step Instructions */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-slate-200/60 shadow-xs space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                        <Info className="w-4 h-4 text-primary-500" />
                        Instruksi Lengkap Gerakan:
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>

                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="col-span-1 md:col-span-2 liquid-glass rounded-3xl p-10 text-center flex flex-col items-center justify-center">
            <HelpCircle className="w-12 h-12 text-slate-300 mb-3" />
            <p className="text-sm font-bold text-slate-500">
              Tidak ada kosakata ditemukan
            </p>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Coba kata kunci pencarian lain atau pilih filter dialek yang berbeda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
