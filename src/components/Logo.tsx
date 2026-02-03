'use client';

import React from 'react';

type BioramicaLogoProps = {
  className?: string;
};

const BioramicaLogo = ({ className = "w-8 h-8" }: BioramicaLogoProps) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Hemisferio Izquierdo */}
    <path d="M 44 20 L 44 80" /> {/* Espina vertical */}
    <path d="M 44 20 C 10 20 10 80 44 80" /> {/* Curva exterior */}
    <line x1="44" y1="35" x2="24" y2="35" /> {/* Nervaduras */}
    <line x1="44" y1="50" x2="20" y2="50" />
    <line x1="44" y1="65" x2="24" y2="65" />

    {/* Hemisferio Derecho */}
    <path d="M 56 20 L 56 80" /> {/* Espina vertical */}
    <path d="M 56 20 C 90 20 90 80 56 80" /> {/* Curva exterior */}
    <line x1="56" y1="35" x2="76" y2="35" /> {/* Nervaduras */}
    <line x1="56" y1="50" x2="80" y2="50" />
    <line x1="56" y1="65" x2="76" y2="65" />
  </svg>
);

export default BioramicaLogo;
