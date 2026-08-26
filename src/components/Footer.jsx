import React from 'react';
import { ChevronUp, Github, Heart, ShieldCheck, AlertTriangle } from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import { soundFx } from '../lib/soundEffects';

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playPowerup();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090714] border-t-4 border-[#3c3166] py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Status */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-press text-xs text-yellow-400 flex items-center gap-2">
            <span>🎮 RAMA EKA S. PORTFOLIO</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 font-vt text-sm">HAK CIPTA DILINDUNGI</span>
          </div>

          {/* Supabase Connection Status Badge */}
          <div className="flex items-center gap-2 mt-1">
            <span className="font-press text-[9px] text-slate-400">DATABASE STATUS:</span>
            {isSupabaseConfigured ? (
              <span className="inline-flex items-center gap-1 font-press text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-500 px-2 py-0.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> SUPABASE CONNECTED 🟢
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 font-press text-[9px] bg-amber-950 text-amber-400 border border-amber-500 px-2 py-0.5" title="Koneksi Supabase belum diisi di .env. Menggunakan Mock Data.">
                <AlertTriangle className="w-3 h-3 text-amber-400" /> MOCK MODE 🟡
              </span>
            )}
          </div>
        </div>

        {/* Center: Credits */}
        <div className="font-vt text-lg text-slate-400 flex items-center gap-1 text-center">
          Dibuat dengan <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> oleh Rama Eka S.
        </div>

        {/* Right: Scroll to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rama14685/Portfolio"
            target="_blank"
            rel="noreferrer"
            onClick={() => soundFx.playBlip()}
            className="pixel-btn py-2 px-3 text-xs"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="pixel-btn pixel-btn-yellow py-2 px-3 text-xs flex items-center gap-1"
            title="Kembali ke Atas"
          >
            <ChevronUp className="w-4 h-4" /> ATAS
          </button>
        </div>

      </div>
    </footer>
  );
}
