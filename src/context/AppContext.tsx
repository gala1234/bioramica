'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { LanguageCode, Piece, Translations } from '@/lib/types';
import { TRANSLATIONS } from '@/lib/translations';

interface AppContextType {
  currentLang: LanguageCode;
  setCurrentLang: (lang: LanguageCode) => void;
  isLangMenuOpen: boolean;
  setIsLangMenuOpen: (isOpen: boolean) => void;
  t: Translations[LanguageCode];
  isRTL: boolean;
  cart: Piece[];
  addToCart: (item: Piece) => void;
  removeFromCart: (itemId: string) => void;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  selectedPiece: Piece | null;
  setSelectedPiece: (piece: Piece | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('ES');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [cart, setCart] = useState<Piece[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);

  const t = TRANSLATIONS[currentLang];
  const isRTL = currentLang === 'AE';

  useEffect(() => {
    if (selectedPiece || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPiece, isCartOpen]);

  const addToCart = (item: Piece) => {
    if (item.status === t.card.status_res || item.status === t.card.sold) return;
    if (!cart.find(i => i.id === item.id)) {
      setCart([...cart, item]);
      setIsCartOpen(true);
      setSelectedPiece(null);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

  const value = {
    currentLang,
    setCurrentLang,
    isLangMenuOpen,
    setIsLangMenuOpen,
    t,
    isRTL,
    cart,
    addToCart,
    removeFromCart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    selectedPiece,
    setSelectedPiece,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
