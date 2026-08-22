import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Settings, 
  HelpCircle, 
  Info, 
  Moon, 
  Sun,
  Shield,
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function SettingsPage({ onNavigate, onLogoutClick, showToast }) {
  const [darkMode, setDarkMode] = useState(false);
  const [cameraQuality, setCameraQuality] = useState('HD (720p)');
  const [speechLanguage, setSpeechLanguage] = useState('Bahasa Indonesia');

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
    showToast(`Tema disimulasikan ke: ${!darkMode ? 'Gelap' : 'Terang'}`);
  };

  const handleSaveSettings = () => {
    showToast('Preferensi berhasil disimpan!');
  };

  return (
    <div className="space-y-8">
      {/* Header Back Button */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onNavigate('home')}
          className="p-2.5 rounded-2xl liquid-glass text-[#0c4a3e] hover:bg-white transition-all duration-200 active:scale-95 shadow-xs"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#0c4a3e]">
            Pengaturan & Bantuan
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Sesuaikan preferensi aplikasi, lihat panduan, dan informasi sistem.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: General Settings Forms */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Account Preferences Card */}
          <div className="liquid-glass rounded-[36px] border border-white/90 p-6 md:p-8 shadow-2xl space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#0c4a3e] flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#0d9488]" />
              Preferensi Akun & Sensor
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#0c4a3e]/70 uppercase tracking-wider mb-2">
                  Resolusi Kamera AI (Simulasi)
                </label>
                <select
                  value={cameraQuality}
                  onChange={(e) => {
                    setCameraQuality(e.target.value);
                    showToast(`Kualitas kamera diset: ${e.target.value}`);
                  }}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-[#0c4a3e] focus:outline-none transition-all duration-200"
                >
                  <option value="SD (480p)">SD (480p) - Hemat Data</option>
                  <option value="HD (720p)">HD (720p) - Rekomendasi</option>
                  <option value="FHD (1080p)">Full HD (1080p) - Presisi Tinggi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0c4a3e]/70 uppercase tracking-wider mb-2">
                  Suara Baca Teks (TTS)
                </label>
                <select
                  value={speechLanguage}
                  onChange={(e) => {
                    setSpeechLanguage(e.target.value);
                    showToast(`Suara diset: ${e.target.value}`);
                  }}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-[#0c4a3e] focus:outline-none transition-all duration-200"
                >
                  <option value="Bahasa Indonesia">Bahasa Indonesia (Default)</option>
                  <option value="English (US)">English (US)</option>
                </select>
              </div>
            </div>

            {/* Theme Toggle option */}
            <div className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xs">
              <div className="flex items-center gap-3">
                {darkMode ? <Moon className="w-5 h-5 text-slate-700" /> : <Sun className="w-5 h-5 text-amber-500" />}
                <div>
                  <span className="block text-sm font-bold text-slate-900">Mode Tampilan Gelap</span>
                  <span className="block text-xs text-slate-500 font-medium">Simulasikan penampilan malam hari</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleToggleTheme}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  darkMode ? 'bg-[#0c4a3e]' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    darkMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSaveSettings}
                className="px-6 py-2.5 rounded-xl liquid-btn-primary text-white font-bold text-sm shadow-md"
              >
                Simpan Pengaturan
              </button>
            </div>

          </div>

          {/* Help Center Card */}
          <div className="liquid-glass rounded-[36px] border border-white/90 p-6 md:p-8 shadow-2xl space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#0c4a3e] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0d9488]" />
              Pusat Bantuan & Panduan
            </h3>

            <div className="divide-y divide-slate-200/60">
              {[
                { q: 'Bagaimana cara menggunakan penerjemah isyarat?', a: 'Pilih tab Isyarat -> Teks, nyalakan kamera, dan posisikan tubuh Anda menghadap penuh ke kamera agar sendi jari terdeteksi secara utuh.' },
                { q: 'Apakah ada biaya menggunakan Humora?', a: 'Tidak. Humora dikembangkan sebagai platform inklusif gratis guna menjembatani kesetaraan komunikasi.' },
                { q: 'Bagaimana kontribusi menambahkan kata di kamus?', a: 'Anda dapat mengirimkan usulan rekaman video gerakan isyarat baru melalui menu Kontak Kami.' }
              ].map((faq, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1">
                  <h4 className="text-sm font-bold text-slate-800 flex items-center justify-between group cursor-pointer">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0c4a3e] transition-colors" />
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: About & Logout Danger Card */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* About Section Card */}
          <div className="liquid-glass rounded-[36px] border border-white/90 p-6 md:p-8 shadow-2xl space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#0c4a3e] flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-400" />
              Tentang Platform
            </h3>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-medium">
              <p>
                <strong className="text-slate-900">Humora v1.0.0-organic</strong>
              </p>
              <p>
                Humora adalah inisiatif sosial berbasis teknologi digital untuk memberikan media komunikasi tanpa hambatan bagi penyandang disabilitas tuli.
              </p>
              <p>
                Menggabungkan sensor deteksi visual kamera dan audio speech recognizer untuk kemudahan komunikasi sehari-hari.
              </p>
            </div>
          </div>

          {/* Logout Trigger Danger Card */}
          <div className="bg-red-500/10 backdrop-blur-md rounded-[36px] border border-red-200/60 p-6 md:p-8 space-y-4">
            <h3 className="text-base font-bold text-red-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              Sesi & Keamanan
            </h3>
            
            <p className="text-xs text-red-700 leading-relaxed font-medium">
              Jika Anda menggunakan komputer bersama, pastikan Anda mengeluarkan sesi akun Anda agar privasi Anda terlindungi.
            </p>
            
            <button
              onClick={onLogoutClick}
              className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-red-600/20 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              Keluar Sekarang
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
