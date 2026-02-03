'use client';

import React from 'react';
import { User, MapPin, FileText } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const Footer = () => {
  const { t } = useAppContext();

  return (
    <footer id="footer" className="bg-[#050505] border-t border-white/10 pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-24">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl text-white font-serif italic mb-6">Bioramica</h2>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-loose whitespace-pre-line">
              {t.footer.text}
            </p>
          </div>
          <div>
            <h4 className="text-[10px] text-[#c4a484] uppercase font-bold tracking-[0.2em] mb-6 flex items-center gap-2">
              <User size={12} /> {t.footer.col1}
            </h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Manifesto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-[#c4a484] uppercase font-bold tracking-[0.2em] mb-6 flex items-center gap-2">
              <MapPin size={12} /> {t.footer.col2}
            </h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Off-Grid Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Visit Protocol
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-[#c4a484] uppercase font-bold tracking-[0.2em] mb-6 flex items-center gap-2">
              <FileText size={12} /> {t.footer.col3}
            </h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] text-zinc-600 uppercase tracking-widest">
          <span>{t.footer.rights}</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
