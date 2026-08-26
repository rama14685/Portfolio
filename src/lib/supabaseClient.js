import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseUrl.startsWith('https://') && 
  supabaseAnonKey && 
  supabaseAnonKey.length > 10
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Initial Fallback Mock Projects
export const MOCK_PROJECTS = [
  {
    id: '1',
    title: 'Pixel RPG Quest Engine',
    description: 'Engine game 8-bit retro berbasis Canvas & WebGL dengan sistem battle turn-based, inventaris item, dan dialogue tree.',
    category: 'Game Dev',
    tags: ['JavaScript', 'Canvas API', 'Web Audio API'],
    demo_url: 'https://github.com',
    github_url: 'https://github.com',
    image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop',
    stars: 128
  },
  {
    id: '2',
    title: 'Chiptune Synth DAW',
    description: 'Synthesizer & Sequencer audio interaktif untuk menciptakan melodi game retro 8-bit (NES/Gameboy style).',
    category: 'Audio Tool',
    tags: ['React', 'Web Audio API', 'Tailwind CSS'],
    demo_url: 'https://github.com',
    github_url: 'https://github.com',
    image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop',
    stars: 95
  },
  {
    id: '3',
    title: 'Supabase Questbook RPG',
    description: 'Buku tamu real-time interaktif bergaya save point game RPG yang menyimpan data pesan pengunjung secara langsung di Supabase.',
    category: 'Web App',
    tags: ['React', 'Supabase', 'Tailwind CSS'],
    demo_url: 'https://github.com',
    github_url: 'https://github.com',
    image_url: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop',
    stars: 210
  },
  {
    id: '4',
    title: 'Retro Pixel Dashboard',
    description: 'Dashboard analitik UI bertema arcade retro 90-an lengkap dengan grafik pixel art dan indikator status LED.',
    category: 'Web App',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    demo_url: 'https://github.com',
    github_url: 'https://github.com',
    image_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop',
    stars: 84
  }
];

// Initial Fallback Mock Guestbook Entries
export const MOCK_GUESTBOOK = [
  {
    id: 'g1',
    name: 'Adventurer_Zero',
    avatar_id: 'knight',
    message: 'Wah portofolio retro ini keren sekali! Feel game RPG-nya dapet banget! 🎮',
    created_at: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
  },
  {
    id: 'g2',
    name: 'PixelMage',
    avatar_id: 'wizard',
    message: 'Keren mas! Integrasi Supabase dan sound effect retro-nya mantap 🧙‍♂️',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: 'g3',
    name: 'CyberNinja',
    avatar_id: 'ninja',
    message: 'Fast loading, responsive UI, & 8-bit aesthetic! 10/10 Level Completed! ⚡',
    created_at: new Date(Date.now() - 3600000).toISOString()
  }
];
