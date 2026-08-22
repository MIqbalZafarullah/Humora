import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Copy, 
  Check, 
  Info
} from 'lucide-react';

export default function FeatureDetectionPage({ onNavigate, showToast }) {
  const [activeTab, setActiveTab] = useState('suara'); // suara, gerakan
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // Translation text results
  const [voiceResult, setVoiceResult] = useState('');
  const [gestureResult, setGestureResult] = useState('');
  
  // Indicators
  const [voiceStatus, setVoiceStatus] = useState('Siap merekam');
  const [gestureStatus, setGestureStatus] = useState('Kamera tidak aktif');

  // Trigger copy to clipboard
  const handleCopy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    showToast('Teks berhasil disalin!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Simulate Speech to Text
  useEffect(() => {
    let timer;
    if (isRecording) {
      setVoiceStatus('Mendengarkan suara...');
      setVoiceResult('Mendeteksi...');
      
      const phrases = [
        'Halo, selamat pagi rekan semua.',
        'Terima kasih banyak atas bantuan Anda hari ini.',
        'Bagaimana saya bisa menuju ke stasiun terdekat?',
        'Senang sekali bisa belajar bahasa isyarat bersama Anda.'
      ];
      
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      
      timer = setTimeout(() => {
        setVoiceResult(randomPhrase);
        setVoiceStatus('Selesai mendeteksi');
        setIsRecording(false);
        showToast('Terjemahan suara selesai!');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isRecording]);

  // Simulate Gesture to Text
  const triggerMockGesture = (gestureName, translationText) => {
    if (!isCameraOn) {
      showToast('Nyalakan kamera terlebih dahulu!');
      return;
    }
    setGestureStatus(`Menganalisis gerakan: ${gestureName}...`);
    setGestureResult('Mendeteksi...');
    
    setTimeout(() => {
      setGestureResult(translationText);
      setGestureStatus('Deteksi selesai');
      showToast(`Berhasil mendeteksi gerakan: "${gestureName}"`);
    }, 1500);
  };

  // Turn camera on/off
  const toggleCamera = () => {
    if (isCameraOn) {
      setIsCameraOn(false);
      setGestureResult('');
      setGestureStatus('Kamera tidak aktif');
    } else {
      setIsCameraOn(true);
      setGestureStatus('Kamera aktif. Siap mendeteksi gerakan.');
      setGestureResult('Silakan lakukan gerakan di depan kamera atau gunakan tombol simulasi di bawah.');
    }
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
            Live Interpreter
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Terjemahkan komunikasi verbal ke teks, atau bahasa isyarat ke teks.
          </p>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center">
        <div className="liquid-glass p-1.5 rounded-2xl flex max-w-md w-full shadow-lg border border-white/90">
          <button
            onClick={() => setActiveTab('suara')}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'suara'
                ? 'bg-[#0c4a3e] text-[#d9f99d] shadow-md scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mic className="w-4 h-4" />
            Suara ➔ Teks
          </button>
          <button
            onClick={() => setActiveTab('gerakan')}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'gerakan'
                ? 'bg-[#0c4a3e] text-[#d9f99d] shadow-md scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Video className="w-4 h-4" />
            Isyarat ➔ Teks
          </button>
        </div>
      </div>

      {/* Translator Workspaces */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Viewports */}
        <div className="lg:col-span-7">
          
          {/* TAB A: Suara to Teks Workspace */}
          {activeTab === 'suara' && (
            <div className="liquid-glass rounded-[36px] border border-white/90 p-8 shadow-2xl text-center space-y-8">
              <h3 className="text-xl font-serif font-bold text-[#0c4a3e]">
                Live Interpreter (Suara ke Teks)
              </h3>
              
              {/* Mic Icon & Wave Visualizer Container */}
              <div className="h-60 bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/80 flex flex-col items-center justify-center p-6 relative overflow-hidden shadow-inner">
                {isRecording ? (
                  /* Animated Waveform */
                  <div className="flex items-center gap-2.5 h-20">
                    <div className="w-2.5 bg-[#0c4a3e] rounded-full animate-wave-1 h-12"></div>
                    <div className="w-2.5 bg-[#2dd4bf] rounded-full animate-wave-2 h-16"></div>
                    <div className="w-2.5 bg-[#0d9488] rounded-full animate-wave-3 h-20"></div>
                    <div className="w-2.5 bg-[#f59e0b] rounded-full animate-wave-4 h-14"></div>
                    <div className="w-2.5 bg-[#14b8a6] rounded-full animate-wave-5 h-8"></div>
                  </div>
                ) : (
                  /* Idle microphone icon */
                  <div className="w-20 h-20 bg-emerald-50/80 rounded-full flex items-center justify-center border border-emerald-200/60 text-[#0c4a3e] shadow-xs">
                    <Mic className="w-10 h-10" />
                  </div>
                )}
                
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mt-6">
                  Status: {voiceStatus}
                </span>
              </div>

              {/* Record Button trigger */}
              <div className="flex justify-center">
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all duration-200 shadow-lg ${
                    isRecording
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/20 active:scale-95'
                      : 'liquid-btn-orange text-white active:scale-95'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <MicOff className="w-4 h-4" />
                      Hentikan Merekam
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      Mulai Merekam Suara
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* TAB B: Gerakan to Teks Workspace */}
          {activeTab === 'gerakan' && (
            <div className="liquid-glass rounded-[36px] border border-white/90 p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-[#0c4a3e]">
                  Live Interpreter (Bahasa Isyarat ke Teks)
                </h3>
                <button
                  onClick={toggleCamera}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
                    isCameraOn
                      ? 'bg-red-50 text-red-600 border border-red-200/60'
                      : 'glass-pill-lime text-[#0c4a3e]'
                  }`}
                >
                  {isCameraOn ? (
                    <>
                      <VideoOff className="w-3.5 h-3.5" />
                      Matikan Kamera
                    </>
                  ) : (
                    <>
                      <Video className="w-3.5 h-3.5" />
                      Nyalakan Kamera
                    </>
                  )}
                </button>
              </div>

              {/* Camera view screen simulation */}
              <div className="relative aspect-[16/10] bg-[#062c25] rounded-3xl overflow-hidden flex items-center justify-center border border-emerald-950 shadow-inner">
                {isCameraOn ? (
                  <>
                    <div className="absolute inset-0 bg-[#062c25] flex items-center justify-center">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c4a3e_1px,transparent_1px),linear-gradient(to_bottom,#0c4a3e_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
                      
                      {/* Viewfinder brackets */}
                      <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[#2dd4bf]/70"></div>
                      <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[#2dd4bf]/70"></div>
                      <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[#2dd4bf]/70"></div>
                      <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[#2dd4bf]/70"></div>
                      
                      {/* Skeleton overlay */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path d="M 640,400 L 640,320 M 640,320 L 620,270 L 610,230 M 640,320 L 650,260 L 660,220 M 640,320 L 680,280 M 640,400 L 590,390 L 550,380" 
                          stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9" />
                        <circle cx="640" cy="400" r="8" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="640" cy="320" r="6" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="620" cy="270" r="6" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="610" cy="230" r="6" fill="#2dd4bf" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="650" cy="260" r="6" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="660" cy="220" r="6" fill="#2dd4bf" stroke="#ffffff" strokeWidth="2" />
                      </svg>

                      <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#062c25]/80 px-3.5 py-1.5 rounded-full backdrop-blur-md text-[10px] text-[#2dd4bf] font-bold border border-[#0c4a3e]">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                        LIVE HUMORA AI CAMERA
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-emerald-200/60">
                    <VideoOff className="w-12 h-12 text-emerald-300/40" />
                    <span className="text-sm font-bold text-white">Kamera Dinonaktifkan</span>
                    <span className="text-xs text-emerald-100/70 max-w-xs text-center leading-relaxed font-medium">
                      Aktifkan kamera untuk mensimulasikan pendeteksian gerakan isyarat.
                    </span>
                  </div>
                )}
              </div>

              {/* Presets simulator triggers */}
              {isCameraOn && (
                <div className="space-y-3">
                  <span className="block text-xs font-bold text-[#0c4a3e]/70 uppercase tracking-wider">
                    Simulasi Gestur (Picu Isyarat):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => triggerMockGesture('Lambaian Tangan', 'Halo')}
                      className="px-4 py-2 glass-pill hover:bg-[#d9f99d] text-xs font-bold text-[#0c4a3e] transition-all duration-200 active:scale-95"
                    >
                      👋 Lambaikan Tangan (Halo)
                    </button>
                    <button
                      onClick={() => triggerMockGesture('Sentuh Dagu', 'Terima Kasih')}
                      className="px-4 py-2 glass-pill hover:bg-[#d9f99d] text-xs font-bold text-[#0c4a3e] transition-all duration-200 active:scale-95"
                    >
                      🙏 Sentuh Dagu (Terima Kasih)
                    </button>
                    <button
                      onClick={() => triggerMockGesture('Ujung Telunjuk Ke Dada', 'Saya')}
                      className="px-4 py-2 glass-pill hover:bg-[#d9f99d] text-xs font-bold text-[#0c4a3e] transition-all duration-200 active:scale-95"
                    >
                      ☝️ Telunjuk Ke Dada (Saya)
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Translation Output Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="liquid-glass rounded-[36px] border border-white/90 p-6 md:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-serif font-bold text-[#0c4a3e]">
                Hasil Terjemahan Teks
              </h4>
              
              <button
                onClick={() => handleCopy(activeTab === 'suara' ? voiceResult : gestureResult)}
                disabled={!(activeTab === 'suara' ? voiceResult : gestureResult)}
                className="p-2.5 glass-pill hover:bg-white disabled:opacity-40 text-[#0c4a3e] transition-all duration-200 active:scale-95"
                title="Salin Hasil Teks"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Teks Output viewport */}
            <div className="min-h-48 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/70 p-6 flex flex-col justify-between shadow-inner">
              <div>
                {activeTab === 'suara' ? (
                  voiceResult ? (
                    <p className="text-lg font-bold text-slate-900 leading-relaxed animate-in fade-in duration-300">
                      "{voiceResult}"
                    </p>
                  ) : (
                    <p className="text-sm text-slate-500 italic font-medium">
                      Belum ada suara direkam. Tekan "Mulai Merekam Suara" untuk mensimulasikan masukan verbal.
                    </p>
                  )
                ) : (
                  gestureResult ? (
                    <p className="text-lg font-bold text-slate-900 leading-relaxed animate-in fade-in duration-300">
                      "{gestureResult}"
                    </p>
                  ) : (
                    <p className="text-sm text-slate-500 italic font-medium">
                      Kamera mati atau belum ada gestur terdeteksi. Tekan "Nyalakan Kamera" dan pilih tombol gestur di samping untuk simulasi.
                    </p>
                  )
                )}
              </div>

              {/* Status footer info */}
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-4 border-t border-slate-200/60 mt-4">
                Status: {activeTab === 'suara' ? voiceStatus : gestureStatus}
              </div>
            </div>

            {/* Info notice */}
            <div className="bg-[#d9f99d]/50 border border-[#bef264] text-[#0c4a3e] rounded-2xl p-4 text-xs leading-relaxed flex items-start gap-3 backdrop-blur-md">
              <Info className="w-4 h-4 text-[#0c4a3e] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Info Humora Prototype:</span> Halaman ini disimulasikan untuk kebutuhan presentasi antarmuka. Tidak ada mikrofon atau kamera yang benar-benar dikirimkan ke model AI eksternal.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
