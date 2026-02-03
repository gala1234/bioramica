'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { getPieces } from '@/lib/data';

const Gallery = () => {
  const { t, currentLang, setSelectedPiece, isRTL } = useAppContext();
  const dynamicPieces = getPieces(currentLang);

  return (
    <section id="coleccion" className="py-32 px-6 md:px-24 bg-[#0e0e0e]">
      <div className="flex justify-between items-end mb-20">
        <div>
          <h3 className="text-3xl text-white font-serif italic mb-2">
            {t.gallery.title}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            {t.gallery.subtitle}
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-[10px] text-[#c4a484] uppercase tracking-widest font-bold flex items-center gap-2">
            <Database size={12} /> {t.gallery.synced}
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {dynamicPieces.map((piece) => (
          <motion.div
            key={piece.id}
            layoutId={`card-container-${piece.id}`}
            onClick={() => setSelectedPiece(piece)}
            className="group cursor-pointer relative"
          >
            <motion.div
              layoutId={`card-image-${piece.id}`}
              className={`aspect-[3/4] ${piece.imageColor} mb-6 relative overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-[#c4a484]/50 shadow-2xl`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[9px] uppercase tracking-widest text-white border border-white/20 px-3 py-1 bg-black/50 backdrop-blur-sm">
                  {t.gallery.view_card}
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
                <span className="text-sm font-serif italic text-[#c4a484]">
                  €{piece.price.toLocaleString()}
                </span>
              </div>
            </motion.div>
            <motion.div layoutId={`card-info-${piece.id}`}>
              <h4 className="text-white font-serif italic text-xl mb-1 group-hover:text-[#c4a484] transition-colors">
                {piece.title}
              </h4>
              <div className="flex justify-between items-center border-t border-white/10 pt-3 mt-3">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  {piece.subtitle}
                </span>
                {isRTL ? (
                  <ArrowLeft
                    size={14}
                    className="text-zinc-600 group-hover:-translate-x-1 transition-transform"
                  />
                ) : (
                  <ArrowRight
                    size={14}
                    className="text-zinc-600 group-hover:translate-x-1 transition-transform"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
