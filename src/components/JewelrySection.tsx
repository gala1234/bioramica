'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { getJewelry } from '@/lib/data';

const JewelrySection = () => {
  const { t, currentLang, setSelectedPiece, isRTL } = useAppContext();
  const dynamicJewelry = getJewelry(currentLang);

  return (
    <section id="micro" className="py-32 px-6 md:px-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
        <div>
          <span className="text-[var(--color-brand-primary)] text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">
            {t.jewelry.label}
          </span>
          <h3 className="text-3xl text-white font-serif italic mb-2">
            {t.jewelry.title}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 max-w-md leading-relaxed">
            {t.jewelry.subtitle}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        {dynamicJewelry.map((piece) => (
          <motion.div
            key={piece.id}
            layoutId={`card-container-${piece.id}`}
            onClick={() => setSelectedPiece(piece)}
            className="group cursor-pointer relative flex flex-col md:flex-row gap-8 items-center"
          >
            <motion.div
              layoutId={`card-image-${piece.id}`}
              className={`w-full md:w-1/2 aspect-square ${piece.imageColor} relative overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-[var(--color-brand-primary)]/50 shadow-2xl rounded-sm`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <span className="text-[9px] uppercase tracking-widest text-white border border-white/20 px-3 py-1 bg-black/50 backdrop-blur-sm">
                  {t.jewelry.view_card}
                </span>
              </div>
              <div
                className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}
              >
                <span className="text-[8px] font-mono text-zinc-500 bg-black px-1 border border-zinc-800">
                  {piece.id}
                </span>
              </div>
              <div
                className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'}`}
              >
                <span className="text-sm font-serif italic text-[var(--color-brand-primary)]">
                  €{piece.price.toLocaleString()}
                </span>
              </div>
            </motion.div>
            <motion.div
              layoutId={`card-info-${piece.id}`}
              className="w-full md:w-1/2"
            >
              <div className="mb-4">
                <span className="text-[9px] uppercase tracking-widest text-[var(--color-brand-primary)] mb-1 block">
                  {t.jewelry.label}
                </span>
                <h4 className="text-white font-serif italic text-2xl mb-1 group-hover:text-[var(--color-brand-primary)] transition-colors">
                  {piece.title}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                  {piece.subtitle}
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 space-y-2">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-600">
                  <span>Mass</span>
                  <span className="text-zinc-400">
                    {piece.tech_specs.weight_fired}g
                  </span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-600">
                  <span>Fitting</span>
                  <span className="text-zinc-400 truncate ml-4">
                    {piece.tech_specs.fitting}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JewelrySection;
