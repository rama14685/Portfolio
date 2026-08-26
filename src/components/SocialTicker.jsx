import React from 'react';
import { Instagram, Linkedin, Mail, Github, Sparkles } from 'lucide-react';
import { soundFx } from '../lib/soundEffects';

export default function SocialTicker() {
  const socialItems = [
    {
      label: 'IG: @ramaaes_',
      icon: <Instagram className="w-4 h-4 text-pink-400" />,
      url: 'https://instagram.com/ramaaes_',
      color: 'text-pink-400 hover:text-pink-300'
    },
    {
      label: 'LINKEDIN: ramaekasaputra',
      icon: <Linkedin className="w-4 h-4 text-sky-400" />,
      url: 'https://www.linkedin.com/in/ramaekasaputra',
      color: 'text-sky-400 hover:text-sky-300'
    },
    {
      label: 'EMAIL: ramadimanaya@gmail.com',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      url: 'mailto:ramadimanaya@gmail.com',
      color: 'text-emerald-400 hover:text-emerald-300'
    },
    {
      label: 'GITHUB: rama14685',
      icon: <Github className="w-4 h-4 text-purple-400" />,
      url: 'https://github.com/rama14685',
      color: 'text-purple-400 hover:text-purple-300'
    }
  ];

  return (
    <div className="w-full bg-[#120e24] border-y-4 border-yellow-400 py-2.5 overflow-hidden shadow-lg relative z-20">
      <div className="animate-marquee-ltr flex items-center whitespace-nowrap gap-12 font-press text-xs">
        
        {/* Render 2 sets of items for seamless infinite looping */}
        {[...Array(2)].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {socialItems.map((item, idx) => (
              <a
                key={`${loopIdx}-${idx}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playCoin()}
                className={`inline-flex items-center gap-2 transition-colors cursor-pointer ${item.color}`}
              >
                {item.icon}
                <span>{item.label}</span>
                <span className="text-yellow-500 ml-6">★</span>
              </a>
            ))}
          </React.Fragment>
        ))}

      </div>
    </div>
  );
}
