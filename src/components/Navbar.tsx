'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import BioramicaLogo from './Logo';
import { Globe, ChevronDown, Check, ShoppingBag, Menu, X, ArrowRight} from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-white/10 py-4'
            : 'bg-transparent border-transparent py-6 md:py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* --- LOGO (Left) --- */}
          <div className="z-50 relative">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
              <BioramicaLogo className="w-8 h-8 md:w-10 md:h-10 text-[#c4a484]" />
              <div>
                <h1 className="text-lg md:text-xl font-serif text-white tracking-wide italic leading-none">Bioramica</h1>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#c4a484] font-bold block mt-1">
                  {t.nav.brand_sub}
                </span>
              </div>
            </Link>
          </div>

          {/* --- DESKTOP MENU (Center) --- */}
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-medium text-zinc-500 absolute left-1/2 -translate-x-1/2">
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
            
            {/* Language Selector (Desktop) */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:text-[#c4a484] transition-colors"
              >
                <Globe size={12} />
                <span>{currentLang}</span>
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className={`absolute mt-4 w-32 bg-[#111] border border-[#c4a484]/30 shadow-2xl py-2 ${isRTL ? 'left-0' : 'right-0'}`}
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-[9px] uppercase tracking-widest hover:bg-white/5 transition-colors flex justify-between items-center ${
                          currentLang === lang.code ? 'text-[#c4a484] font-bold' : 'text-zinc-500'
                        }`}
                      >
                        <span className={isRTL ? 'text-right w-full' : ''}>{lang.label}</span>
                        {currentLang === lang.code && <Check size={10} />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Shopping Trolley */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-white hover:text-[#c4a484] transition-colors"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c4a484] text-black text-[8px] font-bold w-3 h-3 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white hover:text-[#c4a484] transition-colors ml-2"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE PANEL (FULL SCREEN OVERLAY) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <BioramicaLogo className="w-8 h-8 text-[#c4a484]" />
                <span className="text-lg font-serif text-white italic">Menú</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center px-8 gap-8">
              {[
                { href: '/collection', label: t.nav.collection },
                { href: '/fine-jewelry', label: t.nav.jewelry },
                { href: '/authenticity', label: t.nav.auth },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/5 pb-4"
                  >
                    <span className="text-2xl font-serif text-white italic group-hover:text-[#c4a484] transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight size={16} className="text-zinc-700 group-hover:text-[#c4a484] group-hover:translate-x-2 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Selector de Idioma en Móvil (Footer del menú) */}
            <div className="p-8 border-t border-white/10 bg-[#0e0e0e]">
              <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-4">Configuración Regional</p>
              <div className="flex flex-wrap gap-3">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setIsMobileMenuOpen(false); // Opcional: cerrar al cambiar idioma
                    }}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                      currentLang === lang.code
                        ? 'border-[#c4a484] text-[#c4a484] bg-[#c4a484]/10'
                        : 'border-white/10 text-zinc-500 hover:border-white/30'
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
              <div className="mt-8 text-[8px] text-zinc-700 font-mono tracking-widest text-center">
                SISTEMA ARTEFACTORIA MOBILE v2.0
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;