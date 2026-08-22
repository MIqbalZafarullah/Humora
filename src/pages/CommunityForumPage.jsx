import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MessageSquare, 
  ThumbsUp, 
  Share2, 
  Plus, 
  X, 
  MessageCircle,
  Eye
} from 'lucide-react';

export default function CommunityForumPage({ onNavigate, showToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New post fields
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('Diskusi');

  // Dummy posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah Devina',
      role: 'Dengar (Belajar Isyarat)',
      time: '2 jam yang lalu',
      title: 'Tips Cepat Belajar Alfabet BISINDO untuk Pemula!',
      content: 'Halo teman-teman Humora! Saya baru belajar BISINDO selama sebulan ini dan ingin membagikan tips menghafal alfabet tangan. Kuncinya adalah melatih jari Anda di depan cermin selama 10 menit setiap pagi. Cermin membantu memastikan bentuk tangan kita sudah akurat!',
      category: 'Belajar',
      comments: 15,
      likes: 48,
      views: 120
    },
    {
      id: 2,
      author: 'Ahmad Fauzi',
      role: 'Teman Tuli',
      time: '5 jam yang lalu',
      title: 'Pertemuan Rutin Komunitas Isyarat Jabodetabek Bulan Ini',
      content: 'Kabar gembira! Bulan ini kita akan mengadakan kopi darat (kopdar) lagi di Taman Suropati hari Minggu besok jam 15.00 WIB. Terbuka bagi siapa saja, baik teman tuli maupun teman dengar yang mau belajar isyarat langsung. Mari merapat!',
      category: 'Kegiatan',
      comments: 8,
      likes: 24,
      views: 89
    },
    {
      id: 3,
      author: 'Putri Amalia',
      role: 'Relawan & JBI',
      time: '1 hari yang lalu',
      title: 'Bagaimana Pengalaman Kalian Mengenai Aksesibilitas di Tempat Umum?',
      content: 'Hai kawan-kawan Humora. Saya sedang melakukan survei kecil mengenai sarana publik ramah disabilitas di Jakarta. Boleh dong bagikan pengalaman atau masukan kalian mengenai hal yang paling darurat perlu dibenahi di stasiun kereta atau halte bis kita?',
      category: 'Aksesibilitas',
      comments: 32,
      likes: 96,
      views: 310
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        showToast(`Menyukai postingan dari: ${p.author}`);
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    }));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newPost = {
      id: Date.now(),
      author: 'Rian Adiputra',
      role: 'Dengar (Belajar Isyarat)',
      time: 'Baru saja',
      title: newTitle,
      content: newContent,
      category: newCategory,
      comments: 0,
      likes: 0,
      views: 1
    };

    setPosts([newPost, ...posts]);
    setIsModalOpen(false);
    setNewTitle('');
    setNewContent('');
    showToast('Postingan Anda berhasil diterbitkan!');
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'Semua' || post.category === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-8">
      {/* Header & Write Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="p-2.5 rounded-2xl liquid-glass text-[#0c4a3e] hover:bg-white transition-all duration-200 active:scale-95 shadow-xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#0c4a3e]">
              Inclusive Community
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Diskusikan, bagikan cerita, dan jalin relasi inklusif bersama teman tuli dan dengar.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 px-6 py-3.5 liquid-btn-primary text-white font-semibold text-sm rounded-2xl shadow-lg self-start sm:self-center active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Buat Postingan
        </button>
      </div>

      {/* Search & Tags Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari postingan di Inclusive Community..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-[#0c4a3e] focus:outline-none shadow-xs transition-all duration-200"
          />
        </div>

        <div className="lg:col-span-4 flex overflow-x-auto gap-2 scrollbar-none pb-2 lg:pb-0">
          {['Semua', 'Belajar', 'Kegiatan', 'Aksesibilitas'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-[#0c4a3e] text-[#d9f99d] shadow-md'
                  : 'glass-pill text-slate-700 hover:border-slate-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="liquid-glass rounded-[36px] p-6 md:p-8 border border-white/90 shadow-xl hover:border-[#0c4a3e]/30 transition-all duration-300 space-y-4 hover:-translate-y-0.5"
            >
              {/* Post Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0c4a3e] text-[#d9f99d] font-serif font-bold text-base flex items-center justify-center border border-[#0c4a3e]/20">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900">{post.author}</span>
                    <span className="block text-[11px] font-semibold text-slate-500 mt-0.5">{post.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {post.time}
                  </span>
                  <span className="px-2.5 py-1 glass-pill-lime text-[10px] font-bold rounded-lg uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Title & Body */}
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-[#0c4a3e] hover:text-teal-700 cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed line-clamp-3 font-medium">
                  {post.content}
                </p>
              </div>

              {/* Interaction Buttons (Icons + Counts Only for Mobile Space Optimization) */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 text-slate-500 text-xs font-semibold">
                <div className="flex items-center gap-3 sm:gap-6">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1.5 hover:text-[#0c4a3e] transition-colors active:scale-95 py-1 px-2.5 rounded-lg hover:bg-emerald-50"
                    title="Suka"
                  >
                    <ThumbsUp className="w-4 h-4 text-[#0c4a3e]" />
                    <span>{post.likes}</span>
                  </button>
                  
                  <button 
                    onClick={() => showToast('Membuka halaman detail komentar (simulasi)')}
                    className="flex items-center gap-1.5 hover:text-[#0c4a3e] transition-colors active:scale-95 py-1 px-2.5 rounded-lg hover:bg-emerald-50"
                    title="Komentar"
                  >
                    <MessageCircle className="w-4 h-4 text-slate-400" />
                    <span>{post.comments}</span>
                  </button>
                  
                  <span className="flex items-center gap-1.5 text-slate-400 py-1 px-2" title="Dilihat">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </span>
                </div>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(post.title);
                    showToast('Link postingan berhasil disalin!');
                  }}
                  className="flex items-center gap-1.5 hover:text-[#0c4a3e] transition-colors active:scale-95 py-1 px-2 rounded-lg hover:bg-emerald-50 text-slate-400"
                  title="Bagikan"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

            </article>
          ))
        ) : (
          <div className="liquid-glass rounded-3xl p-12 text-center flex flex-col items-center justify-center">
            <MessageSquare className="w-12 h-12 text-slate-300 mb-3" />
            <p className="text-sm font-bold text-[#0c4a3e]">
              Tidak ada diskusi komunitas ditemukan
            </p>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Coba gunakan kata kunci pencarian yang lain.
            </p>
          </div>
        )}
      </div>

      {/* Modal: Write Post */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#062c25]/40 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="relative liquid-glass rounded-[36px] p-6 md:p-8 max-w-lg w-full border border-white/90 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-serif font-bold text-[#0c4a3e] mb-6">
              Buat Postingan Baru
            </h3>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0c4a3e]/70 uppercase tracking-wider mb-2">
                  Judul Postingan
                </label>
                <input
                  type="text"
                  placeholder="Masukkan judul yang menarik..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-[#0c4a3e] focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0c4a3e]/70 uppercase tracking-wider mb-2">
                    Kategori
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-[#0c4a3e] focus:outline-none transition-all duration-200"
                  >
                    <option value="Belajar">Belajar</option>
                    <option value="Kegiatan">Kegiatan</option>
                    <option value="Aksesibilitas">Aksesibilitas</option>
                    <option value="Diskusi">Diskusi Umum</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0c4a3e]/70 uppercase tracking-wider mb-2">
                  Konten / Isi Postingan
                </label>
                <textarea
                  placeholder="Bagikan apa yang Anda pikirkan, ajukan pertanyaan, atau bagikan berita baru..."
                  rows="5"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl text-slate-900 text-sm focus:bg-white focus:border-[#0c4a3e] focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl glass-pill text-slate-700 font-bold text-sm transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl liquid-btn-primary text-white font-bold text-sm shadow-md"
                >
                  Terbitkan Postingan
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
