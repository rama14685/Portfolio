import React, { useState, useEffect } from 'react';
import { Play, Terminal, Code, Shield, Wrench, Calendar, Swords } from 'lucide-react';
import { soundFx } from '../lib/soundEffects';

export default function HeroSection() {
  const fullText = "Halo! Saya Rama Eka S. Saya berfokus di bidang IT Support, Web Developer, Cyber Security, dan Event Freelancer. Selamat datang di portofolio retro saya!";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [monsterHp, setMonsterHp] = useState(85);
  const [isAttacking, setIsAttacking] = useState(false);
  const [combatLog, setCombatLog] = useState("Seekor monster hutan muncul! Tekan ATTACK!");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleAttack = () => {
    soundFx.playCoin();
    setIsAttacking(true);
    const damage = Math.floor(Math.random() * 15) + 10;
    const newHp = Math.max(0, monsterHp - damage);
    setMonsterHp(newHp);

    if (newHp === 0) {
      soundFx.playPowerup();
      setCombatLog(`⚔️ CRITICAL HIT! ${damage} DMG! Monster Hutan berhasil dikalahkan! (+100 XP)`);
      setTimeout(() => setMonsterHp(100), 3000);
    } else {
      setCombatLog(`⚔️ Serangan Rama Eka S. menghasilkan ${damage} DMG pada Monster Hutan!`);
    }

    setTimeout(() => setIsAttacking(false), 400);
  };

  const handleStart = () => {
    soundFx.playPowerup();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Main Hero Card Container */}
        <div className="pixel-box p-6 md:p-10 relative overflow-hidden">
          
          {/* Top Title Bar */}
          <div className="flex items-center justify-between border-b-4 border-[#3c3166] pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full inline-block" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block" />
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block" />
              <span className="font-press text-xs text-purple-300 ml-2">PROFIL // RAMA EKA S.</span>
            </div>
            <div className="font-press text-xs text-yellow-400 animate-pulse">
              ★ BATTLE ACTIVE ★
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Character Avatar Box with User Photo */}
            <div className="flex flex-col items-center justify-center">
              <div 
                onClick={() => soundFx.playCoin()}
                className="pixel-box-yellow p-2 w-52 h-64 flex flex-col items-center justify-between relative group cursor-pointer overflow-hidden"
              >
                <div className="w-full h-48 border-2 border-black overflow-hidden bg-black relative">
                  <img
                    src="./avatar.jpg"
                    alt="Rama Eka S."
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      isAttacking ? 'scale-110 translate-x-2' : 'group-hover:scale-105'
                    }`}
                  />
                  <div className="absolute top-1 left-1 bg-yellow-400 text-black font-press text-[8px] px-1.5 py-0.5 border border-black font-bold">
                    P1
                  </div>
                </div>
                <div className="font-press text-[10px] bg-black text-yellow-400 px-2 py-1 border border-yellow-500 w-full text-center mt-1">
                  RAMA EKA S.
                </div>
              </div>
              <div className="mt-3 font-press text-xs text-slate-300 flex items-center gap-2">
                <span className="text-green-400">STATUS:</span> READY FOR WORK
              </div>
            </div>

            {/* RPG Dialogue Box */}
            <div className="md:col-span-2 flex flex-col justify-between">
              
              {/* Retro Speech Box */}
              <div className="bg-black border-4 border-white p-5 mb-6 relative min-h-[140px] shadow-[4px_4px_0_0_#000]">
                <div className="font-press text-xs text-yellow-400 mb-2 flex items-center justify-between">
                  <span>[DIALOG PERSONAL]</span>
                  <span className="text-slate-500 text-[10px]">RAMA EKA S.</span>
                </div>
                <p className="font-vt text-xl md:text-2xl text-green-400 leading-relaxed">
                  "{displayedText}"
                  {!isTypingDone && <span className="inline-block w-2 h-5 bg-green-400 ml-1 pixel-blink" />}
                </p>
              </div>

              {/* 4 Core Focus Badges */}
              <div className="flex flex-wrap gap-2 mb-6 font-press text-[10px]">
                <span className="bg-blue-900/80 border border-blue-400 text-blue-200 px-2.5 py-1.5 flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5 text-blue-400" /> IT SUPPORT
                </span>
                <span className="bg-purple-900/80 border border-purple-400 text-purple-200 px-2.5 py-1.5 flex items-center gap-1">
                  <Code className="w-3.5 h-3.5 text-purple-400" /> WEB DEV
                </span>
                <span className="bg-emerald-900/80 border border-emerald-400 text-emerald-200 px-2.5 py-1.5 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> CYBER SECURITY
                </span>
                <span className="bg-amber-900/80 border border-amber-400 text-amber-200 px-2.5 py-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> EVENT FREELANCER
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleStart}
                  className="pixel-btn pixel-btn-yellow text-xs font-press py-3 px-5 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-black" /> LIHAT PROYEK
                </button>

                <a
                  href="#contact"
                  onClick={() => soundFx.playBlip()}
                  className="pixel-btn text-xs font-press py-3 px-5 flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4" /> HUBUNGI SAYA
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Interactive Pixel Battle Arena Banner */}
        <div className="pixel-box-emerald p-6 relative overflow-hidden bg-[#091a13]/90">
          <div className="flex items-center justify-between border-b-2 border-emerald-500/40 pb-3 mb-4">
            <div className="font-press text-xs text-emerald-300 flex items-center gap-2">
              <Swords className="w-4 h-4 text-emerald-400" /> BATTLE SCENE 1: HUTAN MISTERIUS
            </div>
            <div className="font-press text-[10px] text-yellow-400">
              AREA 1/5
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Player Side */}
            <div className="bg-black/60 border-2 border-emerald-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-4xl pixel-float">🗡️</div>
                <div>
                  <div className="font-press text-xs text-yellow-300">RAMA EKA S. (KESATRIA)</div>
                  <div className="font-press text-[9px] text-green-400 mt-1">HP: 100/100</div>
                </div>
              </div>
              <button
                onClick={handleAttack}
                className="pixel-btn pixel-btn-red py-2 px-3 text-[10px] font-press flex items-center gap-1 active:scale-95"
              >
                <Swords className="w-3.5 h-3.5" /> ATTACK!
              </button>
            </div>

            {/* Monster Side */}
            <div className="bg-black/60 border-2 border-red-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`text-4xl ${isAttacking ? 'animate-bounce text-red-500' : 'pixel-float'}`}>
                  🐉
                </div>
                <div>
                  <div className="font-press text-xs text-red-400">MONSTER HUTAN</div>
                  <div className="font-press text-[9px] text-slate-300 mt-1">HP: {monsterHp}/100</div>
                  <div className="pixel-bar-bg w-32 mt-1">
                    <div className="pixel-bar-fill-hp bg-red-500" style={{ width: `${monsterHp}%` }} />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Combat Log */}
          <div className="mt-4 bg-black p-3 border border-emerald-600/60 font-vt text-lg text-emerald-300 text-center">
            {combatLog}
          </div>

        </div>

      </div>
    </section>
  );
}
