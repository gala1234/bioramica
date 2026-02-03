'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Search, Check } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const Verification = () => {
  const { t, isRTL } = useAppContext();
  const [searchCode, setSearchCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCode) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setVerificationResult({
        id: searchCode.toUpperCase(),
        status: t.verify.success,
        date: '03.02.2026',
        owner: t.verify.owner + ' Private Collection',
        origin: 'Bioramica Lab',
      });
    }, 1500);
  };

  return (
    <section
      id="verificacion"
      className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--color-brand-primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <Lock className="mx-auto text-var(--color-brand-primary) mb-4" size={24} />
          <h3 className="text-3xl text-white font-serif italic mb-4">
            {t.verify.title}
          </h3>
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            {t.verify.subtitle}
          </p>
        </div>
        <div className="bg-[#0a0a0a] border border-white/10 p-2 md:p-12 shadow-2xl relative">
          {!verificationResult ? (
            <form onSubmit={handleVerify} className="relative group">
              <Search
                className={`absolute top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-var(--color-brand-primary) transition-colors ${
                  isRTL ? 'right-6' : 'left-6'
                }`}
                size={18}
              />
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder={t.verify.placeholder}
                className={`w-full bg-[#111] border border-zinc-800 text-white py-6 text-sm font-mono tracking-widest focus:outline-none focus:border-var(--color-brand-primary) transition-colors text-center uppercase placeholder:text-zinc-700 ${
                  isRTL ? 'pr-16 pl-6' : 'pl-16 pr-6'
                }`}
              />
              <button
                disabled={isSearching}
                className={`absolute top-2 bottom-2 bg-var(--color-brand-primary) text-black px-6 text-[10px] font-bold uppercase tracking-widest hover:bg-[#d6b696] transition-colors disabled:opacity-50 ${
                  isRTL ? 'left-2' : 'right-2'
                }`}
              >
                {isSearching ? t.verify.btn_search : t.verify.btn_verify}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center gap-2 text-var(--color-brand-primary) border border-var(--color-brand-primary) px-4 py-2 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Check size={12} /> {t.verify.success}
              </div>
              <h4 className="text-2xl text-white font-serif italic mb-2">
                {t.card.ref}: {verificationResult.id}
              </h4>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-8">
                {t.verify.owner} {verificationResult.owner}
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-[10px] text-zinc-400 font-mono border-t border-white/10 pt-6">
                <div>Date: {verificationResult.date}</div>
                <div>Origin: {verificationResult.origin}</div>
              </div>
              <button
                onClick={() => {
                  setVerificationResult(null);
                  setSearchCode('');
                }}
                className="mt-8 text-[9px] uppercase text-zinc-600 hover:text-white underline underline-offset-4"
              >
                {t.verify.reset}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Verification;
