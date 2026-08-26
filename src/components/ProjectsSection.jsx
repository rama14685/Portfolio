import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, Search } from 'lucide-react';
import { supabase, isSupabaseConfigured, MOCK_PROJECTS } from '../lib/supabaseClient';
import { soundFx } from '../lib/soundEffects';

export default function ProjectsSection() {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    if (!isSupabaseConfigured || !supabase) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Error fetching Supabase projects:', error.message);
      } else if (data && data.length > 0) {
        setProjects(data);
      }
    } catch (err) {
      console.warn('Supabase fetch failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['ALL', 'Web App', 'Game Dev', 'Audio Tool'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'ALL' ||
      project.category?.toLowerCase() === activeCategory.toLowerCase();
    
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.tags && project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  const handleCategoryClick = (cat) => {
    soundFx.playBlip();
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="py-12 px-4 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-press text-2xl md:text-3xl text-emerald-400 mb-2 flex items-center justify-center gap-3">
          <span>📜</span> PORTFOLIO PROYEK <span>📜</span>
        </h2>
        <p className="font-vt text-xl text-slate-400">
          Daftar Proyek & Aplikasi Web // Klik Live Demo atau Lihat Source Code
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="pixel-box p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`font-press text-[10px] px-3 py-2 border-2 border-black ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black font-bold shadow-[2px_2px_0_0_#000]'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              [{cat === 'ALL' ? 'SEMUA' : cat.toUpperCase()}]
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Cari proyek..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black border-2 border-emerald-600 text-emerald-300 px-3 py-2 pl-9 font-vt text-lg focus:outline-none focus:border-yellow-400"
          />
          <Search className="w-4 h-4 text-emerald-500 absolute left-3 top-3" />
        </div>

      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="text-center py-12 font-press text-yellow-400 animate-pulse">
          MEMUAT PROYEK DARI SUPABASE...
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="pixel-box p-8 text-center font-vt text-2xl text-slate-400">
          Tidak ada proyek yang sesuai dengan kata kunci pencarian.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="pixel-box-emerald p-5 flex flex-col justify-between group hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative overflow-hidden border-2 border-black mb-4 bg-black h-40">
                  <img
                    src={project.image_url || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute top-2 right-2 bg-black/90 text-yellow-400 border border-yellow-500 font-press text-[9px] px-2 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span>{project.stars || 99} XP</span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-emerald-950/90 text-emerald-300 border border-emerald-500 font-press text-[9px] px-2 py-0.5">
                    {project.category || 'Web App'}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-press text-sm text-yellow-300 mb-2 line-clamp-1">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="font-vt text-lg text-slate-300 mb-4 line-clamp-3 leading-snug">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags && project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-press text-[8px] bg-black/80 border border-emerald-600/60 text-emerald-400 px-2 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-4 border-t border-emerald-900/60 font-press text-[10px]">
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.playCoin()}
                    className="flex-1 pixel-btn pixel-btn-green py-2 flex items-center justify-center gap-1 text-[9px]"
                  >
                    <ExternalLink className="w-3 h-3" /> DEMO LIVE
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.playBlip()}
                    className="flex-1 pixel-btn py-2 flex items-center justify-center gap-1 text-[9px]"
                  >
                    <Github className="w-3 h-3" /> KODE
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      )}

    </section>
  );
}
