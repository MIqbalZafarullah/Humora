import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Volume2, 
  ArrowLeft, 
  Info,
  ChevronRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function FeatureDictionaryPage({ onNavigate, showToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDialect, setSelectedDialect] = useState('Semua'); // Semua, BISINDO, SIBI
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedWord, setSelectedWord] = useState(null);

  // Categories
  const categories = ['Semua', 'Percakapan', 'Kata Ganti', 'Ungkapan Harian', 'Darurat'];

  // Dummy vocabulary data
  const vocabularies = [
    {
      id: 1,
      word: 'Halo',
      dialect: 'BISINDO',
      category: 'Percakapan',
      description: 'Lambaikan tangan kanan ke arah depan sejajar dengan pelipis, telapak tangan menghadap ke depan, jari-jari rapat.',
      skeletonPoints: [
        { x: 50, y: 35 }, { x: 52, y: 33 }, { x: 55, y: 31 }, { x: 58, y: 30 },
        { x: 61, y: 31 }, { x: 63, y: 33 }, { x: 64, y: 36 }, { x: 63, y: 39 }
      ]
    },
    {
      id: 2,
      word: 'Terima Kasih',
      dialect: 'BISINDO',
      category: 'Ungkapan Harian',
      description: 'Sentuhkan ujung jari-jari tangan kanan (telapak menghadap ke dalam) ke dagu/bibir bawah, lalu gerakkan tangan ke depan dan bawah ke arah lawan bicara.',
      skeletonPoints: [
        { x: 50, y: 65 }, { x: 50, y: 60 }, { x: 50, y: 55 }, { x: 53, y: 53 },
        { x: 58, y: 55 }, { x: 62, y: 58 }, { x: 65, y: 62 }, { x: 67, y: 67 }
      ]
    },
    {
      id: 3,
      word: 'Tolong',
      dialect: 'SIBI',
      category: 'Percakapan',
      description: 'Katupkan kedua telapak tangan bersama-sama di depan dada (seperti gerakan berdoa) lalu gerakkan sedikit ke bawah.',
      skeletonPoints: [
        { x: 48, y: 70 }, { x: 52, y: 70 }, { x: 46, y: 65 }, { x: 54, y: 65 },
        { x: 47, y: 60 }, { x: 53, y: 60 }, { x: 50, y: 55 }, { x: 50, y: 50 }
      ]
    },
    {
      id: 4,
      word: 'Maaf',
      dialect: 'BISINDO',
      category: 'Ungkapan Harian',
      description: 'Genggam tangan kanan lalu letakkan di dada bagian kiri, putar tangan searah jarum jam dengan lembut di atas dada.',
      skeletonPoints: [
        { x: 40, y: 70 }, { x: 38, y: 68 }, { x: 36, y: 72 }, { x: 38, y: 75 },
        { x: 42, y: 74 }, { x: 44, y: 70 }, { x: 42, y: 66 }, { x: 39, y: 67 }
      ]
    },
    {
      id: 5,
      word: 'Saya',
      dialect: 'BISINDO',
      category: 'Kata Ganti',
      description: 'Arahkan jari telunjuk tangan kanan dan sentuhkan ujungnya dengan lembut ke tengah dada sendiri.',
      skeletonPoints: [
        { x: 50, y: 75 }, { x: 50, y: 70 }, { x: 50, y: 65 }
      ]
    },
    {
      id: 6,
      word: 'Kamu',
      dialect: 'SIBI',
      category: 'Kata Ganti',
      description: 'Arahkan jari telunjuk tangan kanan langsung ke depan menunjuk ke arah lawan bicara.',
      skeletonPoints: [
        { x: 50, y: 70 }, { x: 50, y: 60 }, { x: 50, y: 50 }, { x: 50, y: 40 }
      ]
    },
    {
      id: 7,
      word: 'Selamat Pagi',
      dialect: 'BISINDO',
      category: 'Percakapan',
      description: 'Sentuhkan ujung jari telunjuk dan jempol membentuk lingkaran (isyarat OK), gerakkan dari bawah dada ke atas sambil membuka telapak tangan menghadap ke atas melambangkan matahari terbit.',
      skeletonPoints: [
        { x: 40, y: 80 }, { x: 45, y: 75 }, { x: 50, y: 70 }, { x: 55, y: 62 },
        { x: 60, y: 55 }, { x: 65, y: 50 }
      ]
    },
    {
      id: 8,
      word: 'Darurat',
      dialect: 'SIBI',
      category: 'Darurat',
      description: 'Silangkan kedua pergelangan tangan di depan dada membentuk huruf X dengan telapak tangan mengepal kencang, lalu buka jari-jari dengan cepat.',
      skeletonPoints: [
        { x: 42, y: 68 }, { x: 58, y: 68 }, { x: 40, y: 60 }, { x: 60, y: 60 },
        { x: 45, y: 55 }, { x: 55, y: 55 }, { x: 35, y: 48 }, { x: 65, y: 48 }
      ]
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
            Kamus Digital BISINDO & SIBI
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Cari kata dan lihat representasi bahasa isyarat visual terstandardisasi.
          </p>
        </div>
      </div>

      {/* Main Grid: Search & Cards / Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Filter and Vocab Cards */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Search bar & Dialect Selector */}
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

          {/* Vocabulary Cards List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredVocab.length > 0 ? (
              filteredVocab.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedWord(item)}
                  className={`p-5 rounded-3xl border text-left transition-all duration-200 flex flex-col justify-between h-44 ${
                    selectedWord?.id === item.id
                      ? 'liquid-glass-blue border-primary-400 ring-2 ring-primary-500/20 scale-[1.01]'
                      : 'liquid-glass hover:border-slate-300 shadow-sm hover:-translate-y-1'
                  }`}
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                        item.dialect === 'BISINDO' 
                          ? 'bg-blue-500/10 text-blue-600 border border-blue-200/40' 
                          : 'bg-sky-500/10 text-sky-600 border border-sky-200/40'
                      }`}>
                        {item.dialect}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mt-4">
                      {item.word}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="w-full flex items-center justify-end text-xs font-bold text-primary-600 mt-2">
                    Lihat Isyarat
                    <ChevronRight className="w-4 h-4 ml-0.5" />
                  </div>
                </button>
              ))
            ) : (
              <div className="col-span-2 liquid-glass rounded-3xl p-10 text-center flex flex-col items-center justify-center">
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

        {/* Right Side: Detail Visualizer Pane */}
        <div className="lg:col-span-5">
          {selectedWord ? (
            <div className="liquid-glass rounded-[36px] border border-white/80 shadow-2xl overflow-hidden p-6 md:p-8 space-y-6">
              
              {/* Card Title */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">
                    Bahasa Isyarat Visual
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-900 mt-1">
                    {selectedWord.word}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => speakWord(selectedWord.word)}
                    className="p-3 glass-pill hover:bg-primary-50 hover:text-primary-600 text-slate-600 rounded-2xl transition-all duration-200 active:scale-95 shadow-sm"
                    title="Suarakan Kata"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <span className="px-3.5 py-1.5 glass-pill text-xs font-bold text-slate-700">
                    {selectedWord.dialect}
                  </span>
                </div>
              </div>

              {/* Visualizer Area (Simulation Box) */}
              <div className="relative aspect-[4/3] w-full bg-slate-950 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-800 shadow-inner">
                {/* Visualizer Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                
                {/* Landmark Skeletal Overlay */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* Connecting lines */}
                  {selectedWord.skeletonPoints.map((point, index) => {
                    if (index === 0) return null;
                    const prev = selectedWord.skeletonPoints[index - 1];
                    return (
                      <line
                        key={index}
                        x1={`${prev.x}%`}
                        y1={`${prev.y}%`}
                        x2={`${point.x}%`}
                        y2={`${point.y}%`}
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray="4"
                        className="animate-pulse"
                      />
                    );
                  })}
                  
                  {/* Tracking dots */}
                  {selectedWord.skeletonPoints.map((point, index) => (
                    <circle
                      key={index}
                      cx={`${point.x}%`}
                      cy={`${point.y}%`}
                      r="6"
                      fill={index === selectedWord.skeletonPoints.length - 1 ? '#06b6d4' : '#3b82f6'}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                  ))}
                </svg>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 font-semibold bg-slate-900/80 px-4 py-2.5 rounded-xl backdrop-blur-md border border-slate-700/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Skeletal Render
                  </span>
                  <span>Pose: Active</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-slate-200/60 shadow-sm">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-primary-500" />
                  Instruksi Gerakan
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedWord.description}
                </p>
              </div>

              <div className="text-[11px] text-center text-slate-500 glass-pill py-3 rounded-xl flex items-center justify-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                Data di atas merupakan simulasi visualisasi isyarat Liquid Glass.
              </div>

            </div>
          ) : (
            <div className="liquid-glass rounded-[36px] border border-dashed border-slate-300 p-12 text-center h-full flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-white/80 text-slate-400 flex items-center justify-center shadow-sm">
                <BookOpen className="w-8 h-8 text-primary-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">Detail Isyarat</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-[240px] mx-auto leading-relaxed font-medium">
                  Pilih salah satu kosakata di samping kiri untuk menampilkan visualisasi gerakan isyarat.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
