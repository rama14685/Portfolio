import React, { useState } from 'react';
import { Send, Terminal, Mail, User, MessageCircle, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { soundFx } from '../lib/soundEffects';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playCoin();
    setTransmitting(true);

    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('messages')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              message: formData.message,
              created_at: new Date().toISOString()
            }
          ]);

        if (error) {
          console.error('Supabase message send error:', error);
        }
      } catch (err) {
        console.error('Transmission error:', err);
      }
    }

    soundFx.playPowerup();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTransmitting(false);
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-press text-2xl md:text-3xl text-cyan-400 mb-2 flex items-center justify-center gap-3">
          <span>📡</span> KONTAK SAYA <span>📡</span>
        </h2>
        <p className="font-vt text-xl text-slate-400">
          Kirim pesan langsung untuk diskusi proyek atau penawaran kerja sama
        </p>
      </div>

      <div className="pixel-box p-6 md:p-10 relative">
        
        {/* Terminal Header */}
        <div className="bg-black border-2 border-cyan-500 p-3 mb-6 flex items-center justify-between font-press text-xs text-cyan-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>KONTAK RAMA EKA S. // ONLINE</span>
          </div>
          <span className="text-[10px] text-slate-500">ENCRYPTION: 128-BIT</span>
        </div>

        {success ? (
          <div className="bg-black border-4 border-green-500 p-8 text-center animate-fade-in space-y-4">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto pixel-float" />
            <h3 className="font-press text-lg text-green-400">
              PESAN BERHASIL TERKIRIM! ⚡
            </h3>
            <p className="font-vt text-2xl text-slate-200">
              Pesan Anda telah berhasil dikirim ke Rama Eka S.! Terima kasih sudah menghubungi.
            </p>
            <button
              onClick={() => {
                soundFx.playBlip();
                setSuccess(false);
              }}
              className="pixel-btn pixel-btn-green py-2 px-6 font-press text-xs"
            >
              KIRIM PESAN LAIN
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-press text-xs">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-cyan-300 mb-2 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-cyan-400" /> NAMA PENGIRIM:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black border-2 border-cyan-700 text-cyan-100 px-4 py-3 font-vt text-xl focus:outline-none focus:border-yellow-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-cyan-300 mb-2 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-cyan-400" /> EMAIL PENGIRIM:
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black border-2 border-cyan-700 text-cyan-100 px-4 py-3 font-vt text-xl focus:outline-none focus:border-yellow-400"
                />
              </div>

            </div>

            {/* Message Field */}
            <div>
              <label className="block text-cyan-300 mb-2 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-cyan-400" /> ISI PESAN:
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tuliskan ide proyek, tawaran kerja sama, atau sapaan Anda di sini..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black border-2 border-cyan-700 text-cyan-100 px-4 py-3 font-vt text-xl focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={transmitting}
              className="w-full pixel-btn pixel-btn-yellow py-4 font-press text-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {transmitting ? 'MENGIRIM PESAN...' : 'KIRIM PESAN'}
            </button>

          </form>
        )}

      </div>

    </section>
  );
}
