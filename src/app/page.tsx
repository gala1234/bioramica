'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import JewelrySection from '@/components/JewelrySection';
import Verification from '@/components/Verification';
import PieceDetailModal from '@/components/PieceDetailModal';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black overflow-x-hidden">
      
      <PieceDetailModal />
      <main>
        <Hero />
        <Gallery />
        <JewelrySection />
        <Verification />
      </main>
    </div>
  );
};

export default Home;
