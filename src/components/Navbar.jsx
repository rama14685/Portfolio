import React, { useState } from 'react';
import { Volume2, VolumeX, Monitor, Menu, X, Coins, Sparkles } from 'lucide-react';
import { soundFx } from '../lib/soundEffects';

export default function Navbar({ crtEnabled, setCrtEnabled, soundMuted, setSoundMuted }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    soundFx.playBlip();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const isMuted = soundFx.toggleMute();
    setSoundMuted(isMuted);
    if (!isMuted) soundFx.playCoin();
  };

  const toggleCrt = () => {
    soundFx.playBlip();
    setCrtEnabled(!crtEnabled);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0d0b18]/90 backdrop-blur border-b-4 border-[#3c3166] px-4 py-3 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo / Player Status */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-yellow-400 border-2 border-black flex items-center justify-center font-press text-black font-bold shadow-[2px_2px_0_0_#000] group-hover:scale-105 transition-transform">
            P1
          </div>
          <div>
            <div className="font-press text-xs text-yellow-400 flex items-center gap-1">
              <span>PLAYER 1</span>
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            </div>
            <div className="text-xs text-slate-400 font-vt tracking-wider">
              LVL 99 FULLSTACK DEVELOPER
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-press text-xs">
          <button 
            onClick={() => handleNavClick('stats')} 
            className="text-slate-300 hover:text-yellow-400 transition-colors flex items-center gap-1"
          >
            [STATS]
          </button>
          <button 
            onClick={() => handleNavClick('projects')} 
            className="text-slate-300 hover:text-yellow-400 transition-colors flex items-center gap-1"
          >
            [QUESTS]
          </button>
          <button 
            onClick={() => handleNavClick('guestbook')} 
            className="text-slate-300 hover:text-yellow-400 transition-colors flex items-center gap-1"
          >
            [SAVE POINT]
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-slate-300 hover:text-yellow-400 transition-colors flex items-center gap-1"
          >
            [TRANSMIT]
          </button>
        </nav>

        {/* Retro Controls & HUD */}
        <div className="flex items-center gap-3">
          
          {/* Coins Badge */}
          <div className="hidden sm:flex items-center gap-1 bg-black/60 border-2 border-yellow-500/50 px-2 py-1 text-xs font-press text-yellow-400">
            <Coins className="w-4 h-4 text-yellow-400 animate-bounce" />
            <span>x99</span>
          </div>

          {/* CRT Toggle */}
          <button
            onClick={toggleCrt}
            title={crtEnabled ? "Disable CRT Effect" : "Enable CRT Effect"}
            className={`p-2 border-2 border-black font-press text-xs ${
              crtEnabled ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'
            } shadow-[2px_2px_0_0_#000] active:translate-y-1`}
          >
            <Monitor className="w-4 h-4" />
          </button>

          {/* Mute Toggle */}
          <button
            onClick={toggleSound}
            title={soundMuted ? "Unmute Audio" : "Mute Audio"}
            className={`p-2 border-2 border-black font-press text-xs ${
              !soundMuted ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
            } shadow-[2px_2px_0_0_#000] active:translate-y-1`}
          >
            {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundFx.playBlip();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 bg-slate-800 border-2 border-black text-white shadow-[2px_2px_0_0_#000]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#16122b] border-4 border-[#4a3e7d] flex flex-col gap-3 font-press text-xs">
          <button 
            onClick={() => handleNavClick('stats')}
            className="text-left py-2 px-3 hover:bg-purple-900/50 text-yellow-400 border-l-4 border-yellow-400"
          >
            ⚔️ [STATS] Character Status
          </button>
          <button 
            onClick={() => handleNavClick('projects')}
            className="text-left py-2 px-3 hover:bg-purple-900/50 text-emerald-400 border-l-4 border-emerald-400"
          >
            📜 [QUESTS] Project Showcase
          </button>
          <button 
            onClick={() => handleNavClick('guestbook')}
            className="text-left py-2 px-3 hover:bg-purple-900/50 text-pink-400 border-l-4 border-pink-400"
          >
            💾 [SAVE POINT] Guestbook
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="text-left py-2 px-3 hover:bg-purple-900/50 text-cyan-400 border-l-4 border-cyan-400"
          >
            📡 [TRANSMIT] Contact Terminal
          </button>
        </div>
      )}
    </header>
  );
}
