import React, { useState } from 'react';
import { Box, X } from 'lucide-react';
import { soundFx } from '../lib/soundEffects';

const SKILLS = [
  {
    id: 'itsupport',
    name: 'IT Support & Helpdesk',
    icon: '🛠️',
    rarity: 'LEGENDARY',
    type: 'Hardware & OS Maintenance',
    level: 96,
    description: 'Troubleshooting hardware/software PC & laptop, perakitan & instalasi OS, maintenance perangkat periferal, dan manajemen IT helpdesk.',
    boost: '+96 System Reliability'
  },
  {
    id: 'webdev',
    name: 'Web Development',
    icon: '🌐',
    rarity: 'LEGENDARY',
    type: 'Frontend & Backend Web',
    level: 95,
    description: 'Pengembangan website modern, responsif, dan cepat menggunakan React, Laravel, Tailwind CSS, JavaScript, & Supabase.',
    boost: '+95 Fullstack Mastery'
  },
  {
    id: 'cybersecurity',
    name: 'Cyber Security',
    icon: '🛡️',
    rarity: 'MYTHIC',
    type: 'Security & Auditing',
    level: 92,
    description: 'Analisis keamanan sistem & jaringan, vulnerability assessment, system hardening, proteksi data, dan penanganan ancaman siber.',
    boost: '+92 Shield Defense'
  },
  {
    id: 'eventfreelancer',
    name: 'Event Freelancer',
    icon: '🎪',
    rarity: 'EPIC',
    type: 'Event Tech Operations',
    level: 94,
    description: 'Dukungan operasional teknis acara/event, manajemen tim lapangan, setup audio-visual (AV), & kelancaran jaringan di lokasi event.',
    boost: '+94 Event Coordination'
  },
  {
    id: 'networking',
    name: 'Jaringan & Networking',
    icon: '📡',
    rarity: 'EPIC',
    type: 'Infrastructure & Router',
    level: 90,
    description: 'Konfigurasi LAN/WLAN, router, switch, IP addressing, trouble shooting koneksi internet, dan keamanan jaringan lokal.',
    boost: '+90 Network Uptime'
  },
  {
    id: 'database',
    name: 'Database & Supabase',
    icon: '⚡',
    rarity: 'MYTHIC',
    type: 'Data Management',
    level: 90,
    description: 'Pengelolaan database relasional PostgreSQL, Supabase Backend-as-a-Service, kueri SQL, dan keamanan tabel RLS.',
    boost: '+90 Data Integrity'
  },
  {
    id: 'sysadmin',
    name: 'System Administration',
    icon: '💻',
    rarity: 'RARE',
    type: 'Operating Systems',
    level: 91,
    description: 'Pengelolaan OS Windows & Linux, backup/restore data penting, instalasi software berlisensi, dan optimasi performa perangkat.',
    boost: '+91 Performance Boost'
  },
  {
    id: 'git',
    name: 'Git & Deployment Tools',
    icon: '🐙',
    rarity: 'EPIC',
    type: 'DevOps & Tools',
    level: 92,
    description: 'Version control menggunakan Git/GitHub, otomatisasi build/deployment via GitHub Actions, serta manajemen repositori.',
    boost: '+92 Deployment Speed'
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
          <span>⚔️</span> KEAHLIAN & STATISTIK <span>⚔️</span>
        </h2>
        <p className="font-vt text-xl text-slate-400">
          Bidang Fokus: IT Support | Web Developer | Cyber Security | Event Freelancer
        </p>
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

            {/* Base Stats Table for 4 Focus Areas */}
            <div className="mt-6 pt-4 border-t-2 border-purple-500/40 font-vt text-lg space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">IT Support:</span>
                <span className="text-blue-400 font-bold">96 STAT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Web Development:</span>
                <span className="text-purple-400 font-bold">95 STAT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cyber Security:</span>
                <span className="text-green-400 font-bold">92 STAT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Event Operations:</span>
                <span className="text-amber-400 font-bold">94 STAT</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-purple-950/60 border border-purple-500 text-center font-press text-[10px] text-purple-200">
            RAMA EKA S. // TECH SPECIALIST
          </div>
        </div>

        {/* Right Column: Skill Inventory Grid */}
        <div className="lg:col-span-2 pixel-box p-6">
          <div className="border-b-2 border-purple-500/40 pb-3 mb-4 flex items-center justify-between">
            <span className="font-press text-xs text-yellow-400 flex items-center gap-2">
              <Box className="w-4 h-4 text-yellow-400" /> INVENTARIS SKILL (8/8)
            </span>
            <span className="font-vt text-sm text-slate-400">FOKUS & BIDANG UTAMA</span>
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

          <div className="mt-6 bg-black/50 border border-slate-700 p-4 font-vt text-lg text-slate-300">
            <span>💡 Klik salah satu kartu keahlian di atas untuk melihat detail deskripsi & tugasnya.</span>
          </div>
        </div>

      </div>

      {/* Skill Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
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
