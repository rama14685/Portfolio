import React, { useState, useEffect } from 'react';
import { Save, MessageSquare, User, Sparkles, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured, MOCK_GUESTBOOK } from '../lib/supabaseClient';
import { soundFx } from '../lib/soundEffects';

const AVATARS = [
  { id: 'knight', icon: '🛡️', label: 'Knight' },
  { id: 'wizard', icon: '🧙‍♂️', label: 'Wizard' },
  { id: 'ninja', icon: '🥷', label: 'Ninja' },
  { id: 'archer', icon: '🏹', label: 'Archer' },
  { id: 'bard', icon: '🪕', label: 'Bard' }
];

export default function GuestbookSection() {
  const [entries, setEntries] = useState(MOCK_GUESTBOOK);
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('knight');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    fetchGuestbook();
  }, []);

  const fetchGuestbook = async () => {
    if (!isSupabaseConfigured || !supabase) return;

    try {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Supabase fetch guestbook error:', error.message);
      } else if (data && data.length > 0) {
        setEntries(data);
      }
    } catch (err) {
      console.warn('Guestbook fetch exception:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      soundFx.playBlip();
      setStatusMsg('Isi Nama & Pesan terlebih dahulu!');
      return;
    }

    setSubmitting(true);
    setStatusMsg('');

    const newEntry = {
      name: name.trim(),
      avatar_id: selectedAvatar,
      message: message.trim(),
      created_at: new Date().toISOString()
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('guestbook')
          .insert([newEntry])
          .select();

        if (error) {
          console.error('Supabase insert guestbook error:', error);
          setStatusMsg('Gagal menyimpan ke Supabase: ' + error.message);
        } else if (data && data.length > 0) {
          soundFx.playPowerup();
          setEntries([data[0], ...entries]);
          setMessage('');
          setStatusMsg('Game Saved! Pesan tersimpan di Supabase! 💾');
        }
      } catch (err) {
        console.error('Insert exception:', err);
        setStatusMsg('Terjadi kesalahan koneksi.');
      }
    } else {
      // Local Mock Save
      soundFx.playPowerup();
      setEntries([{ ...newEntry, id: 'temp-' + Date.now() }, ...entries]);
      setMessage('');
      setStatusMsg('Game Saved! (Mode Mock / Tanpa Supabase) 💾');
    }

    setSubmitting(false);
  };

  const getAvatarIcon = (avatarId) => {
    const found = AVATARS.find(a => a.id === avatarId);
    return found ? found.icon : '👾';
  };

  return (
    <section id="guestbook" className="py-12 px-4 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-press text-2xl md:text-3xl text-pink-400 mb-2 flex items-center justify-center gap-3">
          <span>💾</span> SAVE POINT (GUESTBOOK) <span>💾</span>
        </h2>
        <p className="font-vt text-xl text-slate-400">
          Leave a permanent message in the Supabase checkpoint log!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Form Container */}
        <div className="lg:col-span-2 pixel-box-pink p-6">
          <div className="border-b-2 border-pink-500/40 pb-3 mb-4 flex items-center justify-between">
            <span className="font-press text-xs text-pink-300 flex items-center gap-2">
              <Save className="w-4 h-4" /> WRITE LOG
            </span>
            <span className="font-vt text-sm text-pink-400">CHECKPOINT</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Avatar Selector */}
            <div>
              <label className="block font-press text-[10px] text-slate-300 mb-2">
                CHOOSE AVATAR:
              </label>
              <div className="flex gap-2">
                {AVATARS.map((av) => (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => {
                      soundFx.playBlip();
                      setSelectedAvatar(av.id);
                    }}
                    className={`p-2 text-2xl border-2 border-black flex-1 text-center ${
                      selectedAvatar === av.id
                        ? 'bg-pink-500 border-yellow-300 scale-110 shadow-[2px_2px_0_0_#000]'
                        : 'bg-black/60 hover:bg-black'
                    }`}
                  >
                    {av.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label className="block font-press text-[10px] text-slate-300 mb-1">
                ADVENTURER NAME:
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Hero_99"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black border-2 border-pink-500 text-pink-200 px-3 py-2 font-vt text-lg focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block font-press text-[10px] text-slate-300 mb-1">
                PIXEL MESSAGE:
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tuliskan pesan retro di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black border-2 border-pink-500 text-pink-200 px-3 py-2 font-vt text-lg focus:outline-none focus:border-yellow-400"
              />
            </div>

            {statusMsg && (
              <div className="font-press text-[10px] text-yellow-300 bg-black p-2 border border-yellow-500 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{statusMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full pixel-btn pixel-btn-yellow py-3 font-press text-xs flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {submitting ? 'SAVING DATA...' : 'SAVE CHECKPOINT'}
            </button>

          </form>
        </div>

        {/* Guestbook Logs Stream */}
        <div className="lg:col-span-3 pixel-box p-6 flex flex-col justify-between max-h-[500px]">
          <div className="border-b-2 border-purple-500/40 pb-3 mb-4 flex items-center justify-between">
            <span className="font-press text-xs text-yellow-400 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> CHECKPOINT LOGS ({entries.length})
            </span>
            <span className="font-vt text-sm text-green-400">SUPABASE LIVE STREAM</span>
          </div>

          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
            {entries.map((entry, idx) => (
              <div
                key={entry.id || idx}
                className="bg-black/70 border-2 border-purple-900 p-3.5 flex gap-3 items-start"
              >
                <div className="text-3xl p-1 bg-purple-950 border border-purple-600 shrink-0">
                  {getAvatarIcon(entry.avatar_id)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-press text-xs text-yellow-300 truncate">
                      {entry.name}
                    </span>
                    <span className="font-vt text-xs text-slate-500 shrink-0">
                      {new Date(entry.created_at).toLocaleDateString('id-ID')}
                    </span>
                  </div>
                  <p className="font-vt text-lg text-slate-200 leading-snug break-words">
                    "{entry.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
