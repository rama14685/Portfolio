-- ======================================================
-- SUPABASE DATABASE SCHEMA SETUP UNTUK PIXEL GAME PORTFOLIO
-- Silakan Salin dan Jalankan SQL ini di Supabase SQL Editor
-- ======================================================

-- 1. TABEL PROJECTS (Untuk Showcase Proyek)
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT DEFAULT 'Web App',
  tags TEXT[] DEFAULT '{}',
  demo_url TEXT,
  github_url TEXT,
  image_url TEXT,
  stars INT DEFAULT 99,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS untuk projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access ke tabel projects
CREATE POLICY "Public Read Projects" ON public.projects 
  FOR SELECT USING (true);

-- Insert Data Sample Awal (Opsional)
INSERT INTO public.projects (title, description, category, tags, demo_url, github_url, image_url, stars)
VALUES 
  (
    'Pixel RPG Quest Engine', 
    'Game engine berbasis WebGL & Canvas dengan mekanik RPG retro 8-bit, turn-based battle, dan inventory system.', 
    'Game Dev', 
    ARRAY['JavaScript', 'HTML5 Canvas', 'Web Audio API'], 
    'https://example.com/demo1', 
    'https://github.com/example/pixel-engine', 
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop', 
    128
  ),
  (
    'Chiptune Synth DAW', 
    'Web Synthesizer berbasis Web Audio API untuk membuat musik 8-bit NES/Gameboy secara interaktif.', 
    'Audio Tool', 
    ARRAY['React', 'Web Audio API', 'Tailwind CSS'], 
    'https://example.com/demo2', 
    'https://github.com/example/chiptune-daw', 
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop', 
    95
  ),
  (
    'Supabase Retro Questbook', 
    'Buku tamu real-time interaktif bergaya save point RPG yang menyimpan pesan pengunjung di Supabase.', 
    'Web App', 
    ARRAY['React', 'Supabase', 'Tailwind CSS'], 
    'https://example.com/demo3', 
    'https://github.com/example/retro-questbook', 
    'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop', 
    210
  );

-- 2. TABEL GUESTBOOK (Buku Tamu / Save Point)
CREATE TABLE IF NOT EXISTS public.guestbook (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  avatar_id TEXT DEFAULT 'knight',
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS untuk guestbook
ALTER TABLE public.guestbook ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access ke tabel guestbook
CREATE POLICY "Public Read Guestbook" ON public.guestbook 
  FOR SELECT USING (true);

-- Allow Public Insert Access ke tabel guestbook
CREATE POLICY "Public Insert Guestbook" ON public.guestbook 
  FOR INSERT WITH CHECK (true);

-- Insert Data Sample Guestbook
INSERT INTO public.guestbook (name, avatar_id, message)
VALUES 
  ('Adventurer_Zero', 'knight', 'Wah portofolio retro ini keren sekali! Salam kenal! 🎮'),
  ('PixelMage', 'wizard', 'Keren bang, desain pixel-nya dapet banget feel retro 8-bit nya! 🧙‍♂️'),
  ('Speedrunner', 'ninja', 'Fast loading, responsive UI, & Supabase integration! 10/10 level completion! ⚡');

-- 3. TABEL MESSAGES (Form Kontak Terminal)
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS untuk messages
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Allow Public Insert Access ke tabel messages (Siapa saja bisa kirim pesan)
CREATE POLICY "Public Insert Messages" ON public.messages 
  FOR INSERT WITH CHECK (true);
