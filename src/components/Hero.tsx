'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';

const Hero = () => {
  const { t, isRTL } = useAppContext();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-24 pt-40 border-b border-white/5">
      <div className="max-w-5xl relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[var(--color-brand-primary)] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block"
        >
          {t.hero.label}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl text-white font-serif leading-[0.9] mb-8"
        >
          {t.hero.title_1} <br />{' '}
          <span className="italic text-zinc-600">{t.hero.title_2}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`text-sm md:text-base font-light leading-relaxed text-zinc-400 max-w-xl ${
            isRTL
              ? 'border-r border-[var(--color-brand-primary)] pr-6'
              : 'border-l border-[var(--color-brand-primary)] pl-6'
          }`}
        >
          {t.hero.desc}
        </motion.p>
      </div>
      <div
        className={`absolute top-0 w-1/3 h-full border-white/5 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none ${
          isRTL ? 'left-0 border-r' : 'right-0 border-l'
        }`}
      ></div>
    </section>
  );
};

export default Hero;
