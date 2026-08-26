import React, { useState } from 'react';
import { Box, X, Swords } from 'lucide-react';
import { soundFx } from '../lib/soundEffects';

const SKILLS = [
  {
    id: 'react',
    name: 'React JS',
    icon: '⚛️',
    rarity: 'LEGENDARY',
    type: 'Frontend Web',
    level: 95,
    description: 'Framework utama dalam membangun interface Single Page Application (SPA) yang cepat, modular, dan responsif.',
    boost: '+95 UI/UX Mastery'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    icon: '⚡',
    rarity: 'MYTHIC',
    type: 'Backend Database',
    level: 90,
    description: 'Platform Backend-as-a-Service PostgreSQL untuk database real-time, otentikasi user, dan penyimpanan berkas.',
    boost: '+90 Realtime Speed'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: '🎨',
    rarity: 'EPIC',
    type: 'UI Styling',
    level: 95,
    description: 'Framework CSS utility-first untuk pembuatan desain web modern, responsif, dan custom pixel styling.',
    boost: '+95 Styling Speed'
  },
  {
    id: 'vite',
    name: 'Vite Bundler',
    icon: '🚀',
    rarity: 'EPIC',
    type: 'Build Tool',
    level: 92,
    description: 'Frontend build tool berkecepatan tinggi dengan HMR presisi dan bundler optimal untuk hosting statis.',
    boost: '+92 Build Velocity'
  },
  {
    id: 'laravel',
    name: 'Laravel PHP',
    icon: '🔴',
    rarity: 'RARE',
    type: 'Backend Framework',
    level: 88,
    description: 'Framework PHP ekosistem lengkap untuk perancangan RESTful API, ORM Eloquent, dan arsitektur backend.',
    boost: '+88 Enterprise Power'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: '🐙',
    rarity: 'LEGENDARY',
    type: 'Version Control',
    level: 92,
    description: 'Sistem pengontrol versi untuk manajemen kode, kolaborasi tim, dan CI/CD deployment via GitHub Actions.',
    boost: '+92 Code Protection'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    icon: '📜',
    rarity: 'LEGENDARY',
    type: 'Core Language',
    level: 96,
    description: 'Bahasa pemrograman fundamental untuk manipulasi DOM, Async/Await, Web API, dan logika aplikasi web.',
    boost: '+96 Core Logic'
  },
  {
    id: 'sql',
    name: 'PostgreSQL & SQL',
    icon: '💎',
    rarity: 'EPIC',
    type: 'Database Relaksional',
    level: 89,
    description: 'Perancangan skema relasional, optimasi kueri tabel, dan pengelolaan data yang aman dan terstruktur.',
    boost: '+89 Data Integrity'
  }
];

export default function StatsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [golemHp, setGolemHp] = useState(100);
  const [caveLog, setCaveLog] = useState("Kesatria memasuki gua bawah tanah! Monster Golem Gua menghadang!");

  const openSkillModal = (skill) => {
    soundFx.playCoin();
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    soundFx.playBlip();
    setSelectedSkill(null);
  };

  const handleCaveAttack = () => {
    soundFx.playCoin();
    const damage = Math.floor(Math.random() * 20) + 15;
    const newHp = Math.max(0, golemHp - damage);
    setGolemHp(newHp);

    if (newHp === 0) {
      soundFx.playPowerup();
      setCaveLog(`💥 CRITICAL STRIKE! ${damage} DMG! Golem Gua hancur lebur menjadi batu kristal! (+200 XP)`);
      setTimeout(() => setGolemHp(100), 3000);
    } else {
      setCaveLog(`⚔️ Serangan Teatrikal Kesatria menghantam Golem Gua sebesar ${damage} DMG!`);
    }
  };

  return (
    <section id="stats" className="py-12 px-4 max-w-5xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="font-press text-2xl md:text-3xl text-yellow-400 mb-2 flex items-center justify-center gap-3">
          <span>⚔️</span> KEAHLIAN & STATISTIK <span>⚔️</span>
        </h2>
        <p className="font-vt text-xl text-slate-400">
          Daftar Keahlian & Teknologi // Klik item untuk melihat detail
        </p>
      </div>

      {/* Interactive Underground Cave Battle Arena Banner */}
      <div className="pixel-box-pink p-6 relative overflow-hidden bg-[#1f0a20]/90">
        <div className="flex items-center justify-between border-b-2 border-pink-500/40 pb-3 mb-4">
          <div className="font-press text-xs text-pink-300 flex items-center gap-2">
            <Swords className="w-4 h-4 text-pink-400" /> BATTLE SCENE 2: GUA BAWAH TANAH
          </div>
          <div className="font-press text-[10px] text-yellow-400">
            AREA 2/5 (DUNGEON CAVE)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Player Side */}
          <div className="bg-black/60 border-2 border-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl pixel-float">🛡️</div>
              <div>
                <div className="font-press text-xs text-yellow-300">RAMA EKA S.</div>
                <div className="font-press text-[9px] text-purple-300 mt-1">STATUS: CAVE EXPLORER</div>
              </div>
            </div>
            <button
              onClick={handleCaveAttack}
              className="pixel-btn pixel-btn-yellow py-2 px-3 text-[10px] font-press flex items-center gap-1 active:scale-95"
            >
              <Swords className="w-3.5 h-3.5" /> ATTACK!
            </button>
          </div>

          {/* Cave Monster Side */}
          <div className="bg-black/60 border-2 border-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl pixel-float">🧌</div>
              <div>
                <div className="font-press text-xs text-purple-400">GOLEM GUA KRISTAL</div>
                <div className="font-press text-[9px] text-slate-300 mt-1">HP: {golemHp}/100</div>
                <div className="pixel-bar-bg w-32 mt-1">
                  <div className="pixel-bar-fill-hp bg-purple-500" style={{ width: `${golemHp}%` }} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Cave Combat Log */}
        <div className="mt-4 bg-black p-3 border border-purple-600/60 font-vt text-lg text-purple-300 text-center">
          {caveLog}
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Player Attribute Sheet */}
        <div className="pixel-box p-6 flex flex-col justify-between">
          <div>
            <div className="border-b-2 border-purple-500/40 pb-3 mb-4 flex items-center justify-between">
              <span className="font-press text-xs text-yellow-400">INFO DEVELOPER</span>
              <span className="font-press text-[10px] bg-green-900 text-green-300 px-2 py-0.5 border border-green-500">LVL 99</span>
            </div>

            <div className="space-y-4 font-press text-xs">
              
              {/* HP Bar */}
              <div>
                <div className="flex justify-between mb-1 text-[10px]">
                  <span className="text-green-400">Kesehatan (HP)</span>
                  <span className="text-slate-300">100% READY</span>
                </div>
                <div className="pixel-bar-bg">
                  <div className="pixel-bar-fill-hp" style={{ width: '100%' }} />
                </div>
              </div>

              {/* MP Bar */}
              <div>
                <div className="flex justify-between mb-1 text-[10px]">
                  <span className="text-sky-400">Kreativitas (MP)</span>
                  <span className="text-slate-300">95% FULL</span>
                </div>
                <div className="pixel-bar-bg">
                  <div className="pixel-bar-fill-mp" style={{ width: '95%' }} />
                </div>
              </div>

              {/* EXP Bar */}
              <div>
                <div className="flex justify-between mb-1 text-[10px]">
                  <span className="text-yellow-400">Pengalaman (EXP)</span>
                  <span className="text-slate-300">LEVEL 99</span>
                </div>
                <div className="pixel-bar-bg">
                  <div className="pixel-bar-fill-exp" style={{ width: '98%' }} />
                </div>
              </div>

            </div>

            {/* Base Stats Table */}
            <div className="mt-6 pt-4 border-t-2 border-purple-500/40 font-vt text-lg space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Frontend Power:</span>
                <span className="text-yellow-400 font-bold">96</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Backend Logic:</span>
                <span className="text-sky-400 font-bold">92</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">UI Responsiveness:</span>
                <span className="text-green-400 font-bold">95</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Troubleshooting:</span>
                <span className="text-pink-400 font-bold">99</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-purple-950/60 border border-purple-500 text-center font-press text-[10px] text-purple-200">
            NAMA: RAMA EKA S.
          </div>
        </div>

        {/* Right Column: Skill Inventory Grid */}
        <div className="lg:col-span-2 pixel-box p-6">
          <div className="border-b-2 border-purple-500/40 pb-3 mb-4 flex items-center justify-between">
            <span className="font-press text-xs text-yellow-400 flex items-center gap-2">
              <Box className="w-4 h-4 text-yellow-400" /> INVENTARIS SKILL (8/8)
            </span>
            <span className="font-vt text-sm text-slate-400">TEKNOLOGI DIKUASAI</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.id}
                onClick={() => openSkillModal(skill)}
                className="pixel-box-yellow p-3 flex flex-col items-center justify-between text-center cursor-pointer hover:scale-105 transition-transform group relative"
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">
                  {skill.icon}
                </div>
                <div className="font-press text-[10px] text-yellow-300 font-bold line-clamp-1">
                  {skill.name}
                </div>
                <div className="mt-1 text-[9px] font-press text-green-400 bg-black/80 px-1.5 py-0.5 rounded border border-green-500/50">
                  LVL {skill.level}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-black/50 border border-slate-700 p-4 font-vt text-lg text-slate-300 flex items-center justify-between">
            <span>💡 Klik salah satu item di atas untuk melihat penjelasan detail keahlian.</span>
          </div>
        </div>

      </div>

      {/* Skill Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="pixel-box-yellow max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white border-2 border-black p-1 font-press text-xs hover:bg-red-700"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl p-2 bg-black border-2 border-yellow-500">
                {selectedSkill.icon}
              </div>
              <div>
                <span className="font-press text-[9px] bg-purple-900 text-purple-300 px-2 py-0.5 border border-purple-400">
                  {selectedSkill.rarity}
                </span>
                <h3 className="font-press text-sm text-yellow-400 mt-1">
                  {selectedSkill.name}
                </h3>
                <p className="font-vt text-base text-slate-400">
                  Kategori: {selectedSkill.type}
                </p>
              </div>
            </div>

            <div className="bg-black border-2 border-yellow-600 p-4 mb-4 font-vt text-lg text-slate-200">
              <p className="mb-3">{selectedSkill.description}</p>
              <div className="text-green-400 font-press text-xs flex items-center gap-2">
                <span>⚡ EFEK SKILL:</span> {selectedSkill.boost}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between font-press text-[10px] text-yellow-400 mb-1">
                <span>TINGKAT PENGUASAAN</span>
                <span>{selectedSkill.level}%</span>
              </div>
              <div className="pixel-bar-bg">
                <div className="pixel-bar-fill-exp" style={{ width: `${selectedSkill.level}%` }} />
              </div>
            </div>

            <button
              onClick={closeModal}
              className="w-full pixel-btn pixel-btn-yellow py-2 font-press text-xs"
            >
              TUTUP POPUP
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
