# 👾 Retro Pixel RPG Portfolio + Supabase + GitHub Pages

Portofolio web interaktif dengan tema **Retro Pixel Game (8-bit RPG)** yang dibangun menggunakan **Vite**, **React**, **Tailwind CSS**, **Web Audio API (8-bit Synthesizer)**, dan terintegrasi langsung ke **Supabase** (Guestbook, Contact Terminal, & Quest Showcase).

---

## 🌟 Fitur Utama

- 🎮 **Retro Game Aesthetic**: CRT Scanline overlay toggle, NES box-shadow borders, font game pixel (`Press Start 2P`, `Pixelify Sans`), dan palette 8-bit.
- 🔊 **8-Bit Web Audio Synthesizer**: Efek suara retro (coin sound, powerup, blip) yang diproses langsung secara terprogram tanpa dependensi file audio eksternal!
- ⚔️ **Character Stats & Inventory**: Menampilkan keahlian teknis (Skills) dalam bentuk item inventaris RPG yang dapat di-klik untuk membuka modal deskripsi & stat boost.
- 📜 **Quest Log (Projects Showcase)**: Portofolio proyek interaktif dengan filter kategori, tech stack badge, star XP count, serta tombol GitHub & Demo.
- 💾 **Save Point (Supabase Guestbook)**: Buku tamu real-time di mana pengunjung dapat memilih avatar RPG (Knight, Wizard, Ninja, Archer, Bard) dan meninggalkan pesan.
- 📡 **Transmit Signal (Contact Terminal)**: Form kontak terminal pixel yang mengirimkan pesan langsung ke database Supabase disertai animasi *confetti explosion*.
- 🚀 **GitHub Pages Ready**: Dilengkapi file workflow GitHub Actions (`.github/workflows/deploy.yml`) untuk deployment otomatis 1-click.

---

## 🛠️ Cara Memulai (Local Development)

### 1. Install Dependensi
```bash
npm install
```

### 2. Jalankan Mode Developer
```bash
npm run dev
```
Akses di browser pada alamat `http://localhost:5173`.

---

## ⚡ Menghubungkan Supabase (Opsional)

> *Catatan: Jika Supabase belum dikonfigurasi, portofolio akan berjalan menggunakan **Mock Data** otomatis tanpa crash!*

1. Buat proyek baru di [Supabase Dashboard](https://supabase.com).
2. Buka menu **SQL Editor** di Supabase, lalu salin dan jalankan seluruh isi file [`supabase_schema.sql`](./supabase_schema.sql).
3. Salin file `.env.example` menjadi `.env`:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
4. Jalankan ulang `npm run dev`. Status di Footer akan berubah menjadi `SUPABASE CONNECTED 🟢`.

---

## 🌐 Deploy ke GitHub Pages

1. Push seluruh kode ke repository GitHub Anda (cabang `main`).
2. Di GitHub Repository Anda, buka **Settings** > **Pages**.
3. Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` akan mem-build dan mem-publish portofolio Anda secara otomatis!

---

## 📁 Struktur Direktori

- `src/components/Navbar.jsx`: Header HUD retro & kontrol audio/CRT.
- `src/components/HeroSection.jsx`: RPG Dialogue box & intro avatar.
- `src/components/StatsSection.jsx`: Character status & skill inventory modal.
- `src/components/ProjectsSection.jsx`: Quest log & filter proyek.
- `src/components/GuestbookSection.jsx`: Save point buku tamu Supabase.
- `src/components/ContactSection.jsx`: Terminal kontak & confetti.
- `src/lib/soundEffects.js`: Synthesizer audio 8-bit browser.
- `src/lib/supabaseClient.js`: Supabase SDK & mock data.
- `supabase_schema.sql`: Skrip skema database Supabase.
- `.github/workflows/deploy.yml`: GitHub Pages CI/CD workflow.
