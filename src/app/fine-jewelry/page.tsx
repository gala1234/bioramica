'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Diamond, Search, Filter, ArrowRight, Sparkles, Gem, Crown, Scale
} from 'lucide-react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import PieceDetailModal from '@/components/PieceDetailModal';
import { s } from 'framer-motion/client';
import { Clicker_Script } from 'next/font/google';


// --- DATOS: COLECCIONES Y PIEZAS DE JOYERÍA ---

const JEWELRY_CATEGORIES = [
  { id: 'all', title: 'Atelier Completo', count: 8 },
  { id: 'earrings', title: 'Pendientes Esculturales', count: 4 },
  { id: 'necklaces', title: 'Gargantillas & Colgantes', count: 3 },
  { id: 'rings', title: 'Anillos de Tensión', count: 1 }
];

// ...existing code...

const JEWELRY_PIECES = [
  // Pendientes
  {
    id: "J-ORB-01",
    categoryId: "earrings",
    title: "Nudo de Tensión",
    subtitle: "Pendientes Orbitales",
    status: "Disponible",
    price: 450,
    imageColor: "bg-[#181818]",
    tech_specs: { 
      clay: "Gres de Alta Densidad",
      glaze: "Esmalte Mate Negro",
      atmosphere: "Oxidante",
      weight_raw: 3.5,
      weight_fired: 3.2,
      shrinkage: "8.5",
      temp_peak: 1240,
      time_fired: "8h",
      fitting: "Titanio Grado Médico"
    },
    notes: "Diseñados para flotar. El peso es imperceptible, la presencia es absoluta."
  },
  {
    id: "J-GRAV-02",
    categoryId: "earrings",
    title: "Gota de Gravedad",
    subtitle: "Lustre Oro 24k",
    status: "Disponible",
    price: 580,
    imageColor: "bg-[#222]",
    tech_specs: { 
      clay: "Porcelana de Alta Resistencia",
      glaze: "Lustre Metálico Oro 24k",
      atmosphere: "Reductora",
      weight_raw: 4.5,
      weight_fired: 4.1,
      shrinkage: "10.2",
      temp_peak: 1220,
      time_fired: "10h",
      fitting: "Oro 18k"
    },
    notes: "Cerámica negra de alta densidad bañada en oro líquido. Contraste mate/brillo."
  },
  {
    id: "J-NEB-05",
    categoryId: "earrings",
    title: "Nebula",
    subtitle: "Porcelana Translúcida",
    status: "Reservado",
    price: 620,
    imageColor: "bg-[#1c1c1c]",
    tech_specs: { 
      clay: "Porcelana Translúcida",
      glaze: "Esmalte Transparente Brillante",
      atmosphere: "Oxidante",
      weight_raw: 3,
      weight_fired: 2.8,
      shrinkage: "12",
      temp_peak: 1230,
      time_fired: "9h",
      fitting: "Plata Oxidada"
    },
    notes: "Deja pasar la luz a través de los bordes. Efecto etéreo en movimiento."
  },
  
  // Collares
  {
    id: "J-TEC-03",
    categoryId: "necklaces",
    title: "Placa Tectónica",
    subtitle: "Pectoral Geométrico",
    status: "Disponible",
    price: 850,
    imageColor: "bg-[#151515]",
    tech_specs: { 
      clay: "Gres de Alta Densidad",
      glaze: "Esmalte Mate Negro",
      atmosphere: "Oxidante",
      weight_raw: 18,
      weight_fired: 15,
      shrinkage: "7",
      temp_peak: 1250,
      time_fired: "10h",
      fitting: "Cadena Plata Ag925"
    },
    notes: "Una pieza de arquitectura para el cuerpo. Esmalte reactivo único."
  },
  {
    id: "J-PRI-04",
    categoryId: "necklaces",
    title: "Prisma Lunar",
    subtitle: "Colgante Minimalista",
    status: "Vendido",
    price: 390,
    imageColor: "bg-[#0a0a0a]",
    tech_specs: { 
      clay: "Porcelana de Alta Resistencia",
      glaze: "Esmalte Blanco Satinado",
      atmosphere: "Reductora",
      weight_raw: 7,
      weight_fired: 6,
      shrinkage: "9",
      temp_peak: 1230,
      time_fired: "8h",
      fitting: "Cordón Cuero Natural"
    },
    notes: "Superficie facetada que captura la luz. Inspirado en formas cristalinas."
  },
  {
    id: "J-AERO-07",
    categoryId: "necklaces",
    title: "Aero",
    subtitle: "Collar Ligero",
    status: "Disponible",
    price: 420,
    imageColor: "bg-[#121212]",
    tech_specs: { 
      clay: "Gres Ligero",
      glaze: "Esmalte Transparente Mate",
      atmosphere: "Oxidante",
      weight_raw: 6,  
      weight_fired: 5,
      shrinkage: "11",
      temp_peak: 1240,
      time_fired: "9h",
      fitting: "Cordón Seda Japonesa"
    },
    notes: "Textura cráter. Tacto rugoso y primitivo."
  },

  // Anillos
  {
    id: "J-TEN-06",
    categoryId: "rings",
    title: "Anillo Cero",
    subtitle: "Estructura Monolítica",
    status: "Disponible",
    price: 320,
    imageColor: "bg-[#111]",
    tech_specs: { 
      clay: "Porcelana de Alta Resistencia",
      glaze: "Esmalte Negro Brillante",
      atmosphere: "Reductora",
      weight_raw: 2,
      weight_fired: 2,
      shrinkage: "8",
      temp_peak: 1220,
      time_fired: "10h",
      fitting: "N/A (Cuerpo Cerámico)"
    },
    notes: "Cocción de alta temperatura para dureza extrema (Mohs 7)."
  }
];
  
  

export default function FineJewelryPage() {
  const { setSelectedPiece } = useAppContext();
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('Todos');

  // Lógica de filtrado
  const filteredPieces = JEWELRY_PIECES.filter(piece => {
    const matchesCategory = activeCategory === 'all' || piece.categoryId === activeCategory;
    const matchesStatus = filterStatus === 'Todos' || piece.status === filterStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black pb-24">
      
      {/* Fondo de lujo sutil */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC0ydjRoMnY0aDJ2LTRoMnYtNGgtMnpNMzYgMzRWMzZoNHYtMmgtNHptMCAwdjRoMnYtNGgtMnoiIGZpbGw9IiNjNGE0ODQiLz48L2c+PC9zdmc+')` }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-32 md:pt-40 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#c4a484]"></div>
              <Sparkles size={12}/> Micro-Esculturas
              <div className="h-px w-8 bg-[#c4a484]"></div>
            </span>
            <h1 className="text-5xl md:text-8xl text-white font-serif leading-none italic mb-8">
              Joyería Técnica
            </h1>
            <p className="text-sm md:text-base font-light text-zinc-400 max-w-xl mx-auto leading-loose">
              Piezas de ingeniería diseñadas para la curva del cuerpo. Cerámica de alta densidad, metales nobles y un peso pluma que desafía la gravedad. <br/>
              <span className="text-[#c4a484] italic">No adornamos; definimos.</span>
            </p>
          </motion.div>
        </div>

        {/* --- CATEGORÍAS (Barra de Navegación Fina) --- */}
        <div className="flex justify-center mb-16 border-b border-white/5 pb-1">
          <div className="flex gap-8 overflow-x-auto pb-4 custom-scrollbar px-4">
            {JEWELRY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative py-2 text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? 'text-[#c4a484] font-bold' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat.title}
                <span className="ml-2 text-[8px] opacity-50 align-top">{cat.count}</span>
                {activeCategory === cat.id && (
                  <motion.div layoutId="activeCat" className="absolute bottom-[-5px] left-0 w-full h-px bg-[#c4a484]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID DE JOYAS --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence>
            {filteredPieces.map((piece) => (
              <motion.div 
                layout
                key={piece.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                layoutId={`card-container-${piece.id}`}
                onClick={() => setSelectedPiece(piece)}
                className="group cursor-pointer"
              >
                {/* Imagen Cuadrada (Estilo Instagram/Moda) */}
                <motion.div 
                  layoutId={`card-image-${piece.id}`}
                  className={`aspect-square ${piece.imageColor} relative overflow-hidden border border-white/5 group-hover:border-[#c4a484]/40 transition-all duration-700`}
                >
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[9px] uppercase tracking-widest text-[#c4a484] border border-[#c4a484]/30 px-6 py-3 bg-black/80 backdrop-blur-md flex items-center gap-3">
                      <Gem size={10} /> Examinar Joya
                    </span>
                  </div>
                  
                  {/* Badges Flotantes */}
                  {piece.status === 'Disponible' && (
                    <div className="absolute top-4 right-4">
                       <span className="text-[8px] font-bold uppercase tracking-widest text-[#c4a484] flex items-center gap-1">
                         <div className="w-1 h-1 bg-[#c4a484] rounded-full animate-pulse"></div> In Stock
                       </span>
                    </div>
                  )}
                  {piece.status === 'Vendido' && (
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1">
                       <span className="text-[8px] uppercase tracking-widest text-zinc-500 line-through">Sold Out</span>
                    </div>
                  )}

                  {/* Peso (Factor clave en joyería) */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                     <Scale size={10} />
                     <span className="text-[9px] font-mono">{piece.tech_specs.weight_fired}</span>
                  </div>
                </motion.div>

                {/* Info Minimalista */}
                <motion.div layoutId={`card-info-${piece.id}`} className="mt-6 text-center">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2 block">{piece.subtitle}</span>
                  <h4 className="text-white font-serif italic text-2xl group-hover:text-[#c4a484] transition-colors mb-2">{piece.title}</h4>
                  <div className="flex justify-center items-center gap-3">
                    <span className="text-sm font-mono text-[#c4a484]">€{piece.price}</span>
                    {piece.tech_specs.fitting && (
                      <>
                        <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                        <span className="text-[9px] uppercase tracking-wider text-zinc-400">{piece.tech_specs.fitting}</span>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MODAL (Componente Importado) --- */}
        <PieceDetailModal />

        {/* --- CTA FINAL --- */}
        <div className="mt-32 border-t border-white/5 pt-16 text-center">
          <Crown className="mx-auto text-[#c4a484] mb-4 opacity-50" size={24} strokeWidth={1} />
          <h3 className="text-xl text-white font-serif italic mb-4">Servicio Bespoke</h3>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-8 max-w-md mx-auto leading-relaxed">
            ¿Busca una pieza exclusiva para una ocasión especial? Diseñamos joyas a medida bajo pedido privado.
          </p>
          <a href="/taller" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-[#c4a484] pb-1 hover:text-[#c4a484] transition-colors">
            Contactar Atelier
          </a>
        </div>

      </div>
    </div>
  );
}