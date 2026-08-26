import React, { useState } from 'react';
import { Shield, Zap, Sparkles, Award, Box, X, ExternalLink } from 'lucide-react';
import { soundFx } from '../lib/soundEffects';

const SKILLS = [
  {
    id: 'react',
    name: 'React JS',
    icon: '⚛️',
    rarity: 'LEGENDARY',
    type: 'Frontend Magic',
    level: 95,
    description: 'Bintang utama dalam membangun interface SPA cepat, komponen modul re-usable, dan state management modern.',
    boost: '+95 UI/UX Mastery'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    icon: '⚡',
    rarity: 'MYTHIC',
    type: 'Backend Relic',
    level: 90,
    description: 'Database PostgreSQL BaaS untuk real-time query, otentikasi user, storage, dan Row Level Security (RLS).',
    boost: '+90 Realtime Speed'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: '🎨',
    rarity: 'EPIC',
    type: 'Armor Styling',
    level: 95,
    description: 'Utility-first CSS framework untuk styling piksel-presisi, kustomisasi tema retro, dan tata letak responsif.',
    boost: '+95 Styling Speed'
  },
  {
    id: 'vite',
    name: 'Vite Bundler',
    icon: '🚀',
    rarity: 'EPIC',
    type: 'Speed Boot',
    level: 92,
    description: 'Frontend build tool super cepat dengan Instant HMR dan bundler optimal untuk deployment GitHub Pages.',
    boost: '+92 Build Velocity'
  },
  {
    id: 'laravel',
    name: 'Laravel PHP',
    icon: '🔴',
    rarity: 'RARE',
    type: 'Backend Scroll',
    level: 88,
    description: 'Framework PHP ekosistem lengkap untuk API RESTful, Artisan CLI, Eloquent ORM, dan arsitektur MVC.',
    boost: '+88 Enterprise Power'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: '🐙',
    rarity: 'LEGENDARY',
    type: 'Shield of Revision',
    level: 92,
    description: 'Version control system untuk manajemen cabang repository, kolaborasi tim, dan CI/CD deployment via GitHub Actions.',
    boost: '+92 Code Protection'
  },
  {
    id: 'javascript',
    name: 'ES6+ JavaScript',
    icon: '📜',
    rarity: 'LEGENDARY',
    type: 'Core Magic',
    level: 96,
    description: 'Bahasa pemrograman fundamental untuk manipulasi DOM, Async/Await, Canvas WebGL, dan logika aplikasi.',
    boost: '+96 Core Logic'
  },
  {
    id: 'sql',
    name: 'PostgreSQL & SQL',
    icon: '💎',
    rarity: 'EPIC',
    type: 'Database Crystal',
    level: 89,
    description: 'Perancangan skema relasional, optimasi indeks tabel, fungsi agregat, dan transaksi database aman.',
    boost: '+89 Data Integrity'
  }
];

export default function StatsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openSkillModal = (skill) => {
    soundFx.playCoin();
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    soundFx.playBlip();
    setSelectedSkill(null);
  };

  return (
    <section id="stats" className="py-12 px-4 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-press text-2xl md:text-3xl text-yellow-400 mb-2 flex items-center justify-center gap-3">
          <span>⚔️</span> CHARACTER STATS <span>⚔️</span>
        </h2>
        <p className="font-vt text-xl text-slate-400">
          Attribute & Skill Inventory // Tap any item to inspect details
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Player Attribute Sheet */}
        <div className="pixel-box p-6 flex flex-col justify-between">
          <div>
            <div className="border-b-2 border-purple-500/40 pb-3 mb-4 flex items-center justify-between">
              <span className="font-press text-xs text-yellow-400">PLAYER STATUS</span>
              <span className="font-press text-[10px] bg-green-900 text-green-300 px-2 py-0.5 border border-green-500">LVL 99</span>
            </div>

            <div className="space-y-4 font-press text-xs">
              
              {/* HP Bar */}
              <div>
                <div className="flex justify-between mb-1 text-[10px]">
                  <span className="text-green-400">HP (Health Points)</span>
                  <span className="text-slate-300">9999 / 9999</span>
                </div>
                <div className="pixel-bar-bg">
                  <div className="pixel-bar-fill-hp" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* MP Bar */}
              <div>
                <div className="flex justify-between mb-1 text-[10px]">
                  <span className="text-sky-400">MP (Mana Points)</span>
                  <span className="text-slate-300">8888 / 8888</span>
                </div>
                <div className="pixel-bar-bg">
                  <div className="pixel-bar-fill-mp" style={{ width: '92%' }}></div>
                </div>
              </div>

              {/* EXP Bar */}
              <div>
                <div className="flex justify-between mb-1 text-[10px]">
                  <span className="text-yellow-400">EXP (Experience)</span>
                  <span className="text-slate-300">98% NEXT LEVEL</span>
                </div>
                <div className="pixel-bar-bg">
                  <div className="pixel-bar-fill-exp" style={{ width: '98%' }}></div>
                </div>
              </div>

            </div>

            {/* Character Base Stats Table */}
            <div className="mt-6 pt-4 border-t-2 border-purple-500/40 font-vt text-lg space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">STR (Frontend Power):</span>
                <span className="text-yellow-400 font-bold">96</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">INT (Backend Logic):</span>
                <span className="text-sky-400 font-bold">92</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">AGI (UI Responsiveness):</span>
                <span className="text-green-400 font-bold">95</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">LUK (Bug Resolution):</span>
                <span className="text-pink-400 font-bold">99</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-purple-950/60 border border-purple-500 text-center font-press text-[10px] text-purple-200">
            TITLE: MASTER FULLSTACK ADVENTURER
          </div>
        </div>

        {/* Right Column: Skill Inventory Grid */}
        <div className="lg:col-span-2 pixel-box p-6">
          <div className="border-b-2 border-purple-500/40 pb-3 mb-4 flex items-center justify-between">
            <span className="font-press text-xs text-yellow-400 flex items-center gap-2">
              <Box className="w-4 h-4 text-yellow-400" /> INVENTORY SLOTS (8/8)
            </span>
            <span className="font-vt text-sm text-slate-400">EQUIPPED SKILLS</span>
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
            <span>💡 Tip: Klik salah satu item inventaris di atas untuk melihat status dan efek bonusnya.</span>
          </div>
        </div>

      </div>

      {/* Retro Skill Inspect Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="pixel-box-yellow max-w-md w-full p-6 relative">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white border-2 border-black p-1 font-press text-xs hover:bg-red-700"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
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
                  Type: {selectedSkill.type}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="bg-black border-2 border-yellow-600 p-4 mb-4 font-vt text-lg text-slate-200">
              <p className="mb-3">{selectedSkill.description}</p>
              <div className="text-green-400 font-press text-xs flex items-center gap-2">
                <span>⚡ STAT BOOST:</span> {selectedSkill.boost}
              </div>
            </div>

            {/* Mastery Level Bar */}
            <div className="mb-4">
              <div className="flex justify-between font-press text-[10px] text-yellow-400 mb-1">
                <span>MASTERY LEVEL</span>
                <span>{selectedSkill.level}%</span>
              </div>
              <div className="pixel-bar-bg">
                <div className="pixel-bar-fill-exp" style={{ width: `${selectedSkill.level}%` }}></div>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="w-full pixel-btn pixel-btn-yellow py-2 font-press text-xs"
            >
              CLOSE INVENTORY
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
