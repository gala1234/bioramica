'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Globe, ChevronDown, Check, ShoppingBag } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { LANGUAGES } from '@/lib/translations';

const Navbar = () => {
  const {
    t,
    currentLang,
    setCurrentLang,
    isRTL,
    cart,
    setIsCartOpen,
  } = useAppContext();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="z-50">
          <Link href="/">
            <h1 className="text-xl font-serif text-white tracking-wide italic">Bioramica</h1>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] font-bold">
              {t.nav.brand_sub}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-medium text-zinc-500">
            <Link href="/collection" className="hover:text-white transition-colors">
              {t.nav.collection}
            </Link>
            <Link href="/fine-jewelry" className="hover:text-white transition-colors">
              {t.nav.jewelry}
            </Link>
            <Link href="/authenticity" className="hover:text-white transition-colors">
              {t.nav.auth}
            </Link>
          </div>

          <div className="flex items-center gap-4 relative z-50">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:text-[var(--color-brand-primary)] transition-colors"
              >
                <Globe size={12} />
                <span>{currentLang}</span>
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${
                    isLangMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className={`absolute mt-4 w-32 bg-[#111] border border-[var(--color-brand-primary)]/30 shadow-2xl py-2 ${
                      isRTL ? 'left-0' : 'right-0'
                    }`}
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-[9px] uppercase tracking-widest hover:bg-white/5 transition-colors flex justify-between items-center ${
                          currentLang === lang.code
                            ? 'text-[var(--color-brand-primary)] font-bold'
                            : 'text-zinc-500'
                        }`}
                      >
                        <span className={isRTL ? 'text-right w-full' : ''}>
                          {lang.label}
                        </span>
                        {currentLang === lang.code && <Check size={10} />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-white hover:text-[var(--color-brand-primary)] transition-colors"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--color-brand-primary)] text-black text-[8px] font-bold w-3 h-3 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
