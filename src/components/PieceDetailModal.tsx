'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale, Activity } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const PieceDetailModal = () => {
  const { t, selectedPiece, setSelectedPiece, addToCart, cart, isRTL } = useAppContext();

  return (
    <AnimatePresence>
      {selectedPiece && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPiece(null)}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          <motion.div
            layoutId={`card-container-${selectedPiece.id}`}
            className="relative w-full max-w-5xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPiece(null);
              }}
              className={`absolute top-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-[var(--color-brand-primary)] transition-colors border border-white/10 ${
                isRTL ? 'left-4' : 'right-4'
              }`}
            >
              <X size={20} />
            </button>

            <motion.div
              layoutId={`card-image-${selectedPiece.id}`}
              className={`w-full md:w-5/12 ${selectedPiece.imageColor} relative min-h-[300px] md:min-h-full`}
            >
              <div
                className={`absolute bottom-8 ${isRTL ? 'right-8' : 'left-8'}`}
              >
                <div className="inline-block px-3 py-1 border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] text-[9px] font-bold uppercase tracking-widest">
                  {selectedPiece.status}
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <motion.div
                layoutId={`card-info-${selectedPiece.id}`}
                className="mb-10 border-b border-white/10 pb-6"
              >
                <span className="text-[10px] font-mono text-zinc-500 block mb-2">
                  {t.card.ref}: {selectedPiece.id}
                </span>
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl md:text-4xl text-white font-serif italic mb-2">
                    {selectedPiece.title}
                  </h2>
                  <span className="text-2xl font-serif text-[var(--color-brand-primary)]">
                    €{selectedPiece.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-brand-primary)]">
                  {selectedPiece.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-10"
              >
                <div className="bg-[#161616] p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale size={14} className="text-[var(--color-brand-primary)]" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
                      {t.card.mass_loss}
                    </h4>
                  </div>
                  <div
                    className="relative h-8 bg-zinc-900 w-full mb-4 flex items-center px-4 border border-zinc-800"
                    dir="ltr"
                  >
                    <div className="absolute left-0 top-0 bottom-0 bg-[var(--color-brand-primary)]/10 w-full"></div>
                    <div className="absolute top-1/2 left-4 right-4 h-px bg-zinc-700"></div>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
                    <motion.div
                      initial={{ left: '10%' }}
                      animate={{ left: '80%' }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-brand-primary)] rounded-full z-10 shadow-[0_0_10px_rgba(196,164,132,0.8)]"
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[var(--color-brand-primary)]">
                        -{selectedPiece.tech_specs.shrinkage}
                      </div>
                    </motion.div>
                  </div>
                  <div
                    className="flex justify-between font-mono text-xs text-zinc-400"
                    dir="ltr"
                  >
                    <span>
                      {selectedPiece.tech_specs.weight_raw}g ({t.card.raw})
                    </span>
                    <span className="text-white">
                      {selectedPiece.tech_specs.weight_fired}g ({t.card.fired})
                    </span>
                  </div>
                </div>

                <div className="bg-[var(--color-brand-primary)]/5 p-5 border border-[var(--color-brand-primary)]/20 relative">
                  <Activity
                    size={14}
                    className={`absolute top-3 text-[var(--color-brand-primary)] opacity-50 ${
                      isRTL ? 'left-3' : 'right-3'
                    }`}
                  />
                  <span className="text-[9px] uppercase text-[var(--color-brand-primary)] font-bold tracking-widest block mb-2">
                    {t.card.note}
                  </span>
                  <p className="text-xs font-serif italic leading-relaxed text-zinc-400">
                    "{selectedPiece.notes}"
                  </p>
                </div>

                <button
                  onClick={() => addToCart(selectedPiece)}
                  disabled={
                    selectedPiece.status !== t.card.status_avail ||
                    !!cart.find((i) => i.id === selectedPiece.id)
                  }
                  className="w-full bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-dark)] text-black py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {cart.find((i) => i.id === selectedPiece.id)
                    ? 'Activo en Manifiesto'
                    : `${t.card.cta} | €${selectedPiece.price.toLocaleString()}`}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PieceDetailModal;
