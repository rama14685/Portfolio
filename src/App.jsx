import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DynamicBackground from './components/DynamicBackground';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ProjectsSection from './components/ProjectsSection';
import GuestbookSection from './components/GuestbookSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [soundMuted, setSoundMuted] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col justify-between relative ${crtEnabled ? 'crt-overlay' : ''}`}>
      {/* Dynamic Scroll Background Component */}
      <DynamicBackground />

      <div>
        <Navbar
          crtEnabled={crtEnabled}
          setCrtEnabled={setCrtEnabled}
          soundMuted={soundMuted}
          setSoundMuted={setSoundMuted}
        />
        <main className="space-y-12 relative z-10">
          <HeroSection />
          <StatsSection />
          <ProjectsSection />
          <GuestbookSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}
