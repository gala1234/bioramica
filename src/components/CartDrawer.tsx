'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

const CartDrawer = () => {
  const {
    t,
    isRTL,
    cart,
    removeFromCart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useAppContext();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 bottom-0 ${
              isRTL ? 'left-0' : 'right-0'
            } w-full md:w-[450px] bg-[#0a0a0a] border-l border-white/10 z-[70] shadow-2xl flex flex-col`}
          >
            <div className="p-8 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-xl font-serif text-white italic">{t.cart.title}</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-zinc-500 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-600 space-y-4">
                  <ShoppingBag size={32} strokeWidth={1} />
                  <p className="text-xs uppercase tracking-widest">{t.cart.empty}</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div
                        className={`w-20 h-20 ${item.imageColor} border border-white/5 flex-shrink-0`}
                      ></div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-white font-serif italic text-lg">
                            {item.title}
                          </h4>
                          <span className="text-[var(--color-brand-primary)] font-mono text-sm">
                            €{item.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-[9px] font-mono text-zinc-600 mb-2">
                          {item.id}
                        </p>
                        <Link 
                          href={`/asset/${item.id}`}
                          onClick={() => setIsCartOpen(false)}
                          className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-zinc-500 hover:text-[#c4a484] transition-colors mb-3 border-b border-transparent hover:border-[#c4a484]/50 pb-0.5"
                        >
                          Ver Ficha Técnica <ArrowRight size={10} />
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[9px] uppercase tracking-widest text-red-900 hover:text-red-500 transition-colors flex items-center gap-1"
                        >
                          <Trash2 size={10} /> {t.cart.remove}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 border-t border-white/10 bg-[#0e0e0e]">
              <div className="flex justify-between items-end mb-6">
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  {t.cart.total}
                </span>
                <span className="text-2xl font-serif text-white">
                  €{cartTotal.toLocaleString()}
                </span>
              </div>
              <Link
                onClick={() => setIsCartOpen(false)}
                href="/checkout"
                className={`w-full bg-[var(--color-brand-primary)] text-black py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-brand-dark)] transition-colors flex items-center justify-center gap-3 ${
                  cart.length === 0 ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                {t.cart.checkout}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
