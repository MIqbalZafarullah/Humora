import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  BookOpen, 
  Languages, 
  Edit, 
  Save, 
  X,
  FileText
} from 'lucide-react';

export default function ProfilePage({ currentUser, setCurrentUser, onNavigate, showToast }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [bio, setBio] = useState(currentUser.bio);

  const handleSave = (e) => {
    e.preventDefault();
    setCurrentUser({
      ...currentUser,
      name,
      email,
      bio
    });
    setIsEditing(false);
    showToast('Profil Anda berhasil diperbarui!');
  };

  const handleCancel = () => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setBio(currentUser.bio);
    setIsEditing(false);
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
            Profil Pengguna
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Kelola data diri, bio, dan pantau aktivitas kontribusi Anda.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Avatar and Info Card */}
        <div className="lg:col-span-8 liquid-glass rounded-[36px] border border-white/80 p-6 md:p-8 shadow-2xl space-y-6">
          {!isEditing ? (
            /* View Mode */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Avatar Photo */}
                <div className="relative group">
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] object-cover border-4 border-white/80 shadow-md"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold cursor-pointer backdrop-blur-xs">
                    Ubah Foto
                  </div>
                </div>

                {/* Name & Bio */}
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-950">{currentUser.name}</h3>
                      <p className="text-sm font-semibold text-primary-600 mt-0.5">Pengguna Dengarkan & Isyarat</p>
                    </div>
                    
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2.5 rounded-xl glass-pill text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-white transition-all duration-200 active:scale-95 self-center sm:self-start"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      Edit Profil
                    </button>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed pt-2 font-medium">
                    {currentUser.bio || 'Belum menulis bio singkat.'}
                  </p>
                </div>
              </div>

              {/* Personal Details List */}
              <div className="border-t border-slate-200/50 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-400">Email:</span>
                  <span className="font-semibold">{currentUser.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <User className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-400">Peran Akun:</span>
                  <span className="px-2.5 py-0.5 glass-pill text-slate-700 font-bold text-xs">Umum</span>
                </div>
              </div>
            </div>
          ) : (
            /* Edit Mode Form */
            <form onSubmit={handleSave} className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                <h3 className="text-lg font-bold text-slate-900">Ubah Data Profil</h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="p-2 rounded-xl glass-pill text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-primary-500 focus:outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-primary-500 focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Bio Singkat
                </label>
                <textarea
                  rows="4"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-primary-500 focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-200/50 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-5 py-2.5 rounded-xl glass-pill text-slate-700 font-bold text-sm transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl liquid-btn-primary text-white font-bold text-sm shadow-md flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  Simpan Perubahan
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Side: Simple Stats Activity Card */}
        <div className="lg:col-span-4 liquid-glass rounded-[36px] border border-white/80 p-6 md:p-8 shadow-2xl space-y-6">
          <h4 className="text-base font-bold text-slate-800">
            Aktivitas Platform
          </h4>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/50 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center border border-blue-200/40">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400">Inclusive Community</span>
                <span className="block text-lg font-bold text-slate-800 mt-0.5">1 Postingan</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/50 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center border border-indigo-200/40">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400">Smart Dictionary</span>
                <span className="block text-lg font-bold text-slate-800 mt-0.5">12 Kata</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/50 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-200/40">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400">Live Interpreter</span>
                <span className="block text-lg font-bold text-slate-800 mt-0.5">24 Sesi</span>
              </div>
            </div>
          </div>

          <div className="bg-primary-500/10 backdrop-blur-md rounded-2xl p-4 border border-primary-200/50 text-center">
            <span className="block text-xs text-primary-600 font-bold">Level Kontribusi</span>
            <span className="block text-lg font-bold text-primary-800 mt-0.5">Pemula Aktif</span>
          </div>

        </div>

      </div>
    </div>
  );
}
