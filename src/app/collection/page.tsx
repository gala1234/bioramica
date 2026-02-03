'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Scale, Flame, Clock, ArrowRight, Activity, Thermometer, 
  Database, Search, Filter, Grid, List, Check
} from 'lucide-react';
import { useAppContext } from '@/context/AppContext';


// --- DATOS EXTENDIDOS DE LA COLECCIÓN ---
const COLLECTION_PIECES = [
  {
    id: "BIO-26-001",
    title: "Estratigrafía I",
    subtitle: "Serie Oxidación",
    status: "Disponible",
    price: 2400,
    imageColor: "bg-[#1a1a1a]",
    tech_specs: {
      clay: "Gres Refractario",
      glaze: "Cu + Bone Ash",
      atmosphere: "Reduction",
      weight_raw: 1450,
      weight_fired: 1280,
      temp_peak: 1260,
      time_fired: "14h 30m",
      shrinkage: "11.7%"
    },
    notes: "Destellos metálicos en flanco sur provocados por reducción de oxígeno."
  },
  {
    id: "BIO-26-002",
    title: "Masa Crítica II",
    subtitle: "Estudio de Volumen",
    status: "Reservado",
    price: 3100,
    imageColor: "bg-[#111]",
    tech_specs: {
      clay: "Red Clay",
      glaze: "Fire Patina",
      atmosphere: "Oxidation",
      weight_raw: 2100,
      weight_fired: 1850,
      temp_peak: 1180,
      time_fired: "10h 15m",
      shrinkage: "11.9%"
    },
    notes: "Resistencia estructural validada. Pieza central de la serie."
  },
  {
    id: "BIO-26-003",
    title: "Fragmento Solar",
    subtitle: "Inédito 2026",
    status: "Disponible",
    price: 1850,
    imageColor: "bg-[#1c1c1c]",
    tech_specs: {
      clay: "Black Porcelain",
      glaze: "Pure Feldspar",
      atmosphere: "Neutral",
      weight_raw: 850,
      weight_fired: 710,
      temp_peak: 1240,
      time_fired: "12h 00m",
      shrinkage: "16.4%"
    },
    notes: "Alta vitrificación alcanzada. Sonoridad metálica (F#)."
  },
  {
    id: "BIO-26-004",
    title: "Órbita Lunar",
    subtitle: "Serie Textura",
    status: "Disponible",
    price: 2200,
    imageColor: "bg-[#222]",
    tech_specs: {
      clay: "White Stoneware",
      glaze: "Crater Glaze",
      atmosphere: "Oxidation",
      weight_raw: 1600,
      weight_fired: 1420,
      temp_peak: 1220,
      time_fired: "11h",
      shrinkage: "11.2%"
    },
    notes: "Superficie rugosa intencional. Textura de impacto de meteorito."
  },
  {
    id: "BIO-26-005",
    title: "Monolito 05",
    subtitle: "Arquitectura",
    status: "Vendido",
    price: 4500,
    imageColor: "bg-[#0f0f0f]",
    tech_specs: {
      clay: "Chamota Gruesa",
      glaze: "Hierro Saturado",
      atmosphere: "Reduction",
      weight_raw: 3500,
      weight_fired: 3100,
      temp_peak: 1280,
      time_fired: "16h",
      shrinkage: "11.4%"
    },
    notes: "Pieza de gran formato. Estabilidad térmica máxima."
  },
  {
    id: "BIO-26-006",
    title: "Vórtice",
    subtitle: "Dinámica de Fluidos",
    status: "Disponible",
    price: 2800,
    imageColor: "bg-[#181818]",
    tech_specs: {
      clay: "Porcelana",
      glaze: "Celadón",
      atmosphere: "Reduction",
      weight_raw: 1200,
      weight_fired: 980,
      temp_peak: 1260,
      time_fired: "13h",
      shrinkage: "18.3%"
    },
    notes: "Translucidez lograda en bordes. Tono verde agua profundo."
  }
];

export default function ColeccionPage() {
  const { cart, addToCart, t } = useAppContext();
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [filter, setFilter] = useState('Todos'); // Todos, Disponible, Reservado
  const [viewMode, setViewMode] = useState('grid'); // grid, list

  // Filtrado de piezas
  const filteredPieces = COLLECTION_PIECES.filter(piece => {
    if (filter === 'Todos') return true;
    return piece.status === filter;
  });

  // Bloqueo de scroll al abrir modal
  useEffect(() => {
    if (selectedPiece) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedPiece]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black pb-24">
      
      {/* Fondo técnico */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAtMjBoMnYyaC0ydjFoLTIxdi0yaDF2LTJoMXYyaDF6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')` }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-32 md:pt-40 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 gap-8">
          <div>
            <span className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Archivo 2026</span>
            <h1 className="text-4xl md:text-6xl text-white font-serif leading-none italic">Escultura & Cerámica</h1>
          </div>
          
          <div className="flex flex-col items-end gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-widest">
              <Database size={12} className="text-[#c4a484]"/>
              <span>{filteredPieces.length} Activos Listados</span>
            </div>
            
            {/* Controles de Filtro y Vista */}
            <div className="flex items-center gap-4 bg-[#111] p-1 border border-white/10 rounded-sm">
              {['Todos', 'Disponible', 'Reservado'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === f 
                      ? 'bg-[#c4a484] text-black' 
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Piezas */}
        <div className={`grid gap-8 ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {filteredPieces.map((piece) => (
            <motion.div 
              key={piece.id}
              layoutId={`card-container-${piece.id}`}
              onClick={() => setSelectedPiece(piece)}
              className="group cursor-pointer relative bg-[#0e0e0e] border border-white/5 hover:border-[#c4a484]/30 transition-colors"
            >
              {/* Imagen Placeholder */}
              <motion.div 
                layoutId={`card-image-${piece.id}`}
                className={`aspect-[4/5] ${piece.imageColor} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                  <span className="text-[9px] uppercase tracking-widest text-white border border-white/20 px-4 py-2 bg-black/50 backdrop-blur-sm flex items-center gap-2">
                    <Search size={10} /> Ver Expediente
                  </span>
                </div>
                
                {/* Etiquetas Superiores */}
                <div className="absolute top-4 left-4 flex gap-2">
                   <span className="text-[8px] font-mono text-zinc-400 bg-black/80 px-2 py-1 backdrop-blur-sm border border-white/10">{piece.id}</span>
                </div>
                <div className="absolute top-4 right-4">
                   <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-1 backdrop-blur-sm border ${
                     piece.status === 'Disponible' ? 'bg-[#c4a484]/90 text-black border-[#c4a484]' : 'bg-zinc-800/90 text-zinc-400 border-zinc-700'
                   }`}>
                     {piece.status}
                   </span>
                </div>

                {/* Precio en Card (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                   <span className="text-xl font-serif text-[#c4a484] italic">€{piece.price.toLocaleString()}</span>
                </div>
              </motion.div>

              {/* Info Básica */}
              <motion.div layoutId={`card-info-${piece.id}`} className="p-6">
                <h4 className="text-white font-serif italic text-xl mb-1 group-hover:text-[#c4a484] transition-colors">{piece.title}</h4>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500">{piece.subtitle}</span>
                  <ArrowRight size={14} className="text-zinc-700 group-hover:text-[#c4a484] group-hover:translate-x-1 transition-transform"/>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL DETALLE DE PIEZA (EXPEDIENTE TÉCNICO) --- */}
        <AnimatePresence>
          {selectedPiece && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-0">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedPiece(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              />
              
              <motion.div 
                layoutId={`card-container-${selectedPiece.id}`}
                className="relative w-full max-w-5xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              >
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedPiece(null); }}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-[#c4a484] transition-colors border border-white/10"
                >
                  <X size={20} />
                </button>

                {/* Left Image Area */}
                <motion.div 
                  layoutId={`card-image-${selectedPiece.id}`}
                  className={`w-full md:w-5/12 ${selectedPiece.imageColor} relative min-h-[300px] md:min-h-full`}
                >
                   <div className="absolute bottom-8 left-8">
                      <div className="inline-block px-3 py-1 border border-[#c4a484] text-[#c4a484] text-[9px] font-bold uppercase tracking-widest">
                        {selectedPiece.status}
                      </div>
                   </div>
                </motion.div>

                {/* Right Technical Data Area */}
                <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                  <motion.div layoutId={`card-info-${selectedPiece.id}`} className="mb-10 border-b border-white/10 pb-6">
                    <span className="text-[10px] font-mono text-zinc-500 block mb-2">{t.card.ref}: {selectedPiece.id}</span>
                    <div className="flex justify-between items-start">
                      <h2 className="text-3xl md:text-4xl text-white font-serif italic mb-2">{selectedPiece.title}</h2>
                      <span className="text-2xl font-serif text-[#c4a484]">€{selectedPiece.price.toLocaleString()}</span>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-[#c4a484]">{selectedPiece.subtitle}</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-10">
                    
                    {/* Mass / Shrinkage Graph */}
                    <div className="bg-[#161616] p-6 border border-white/5">
                      <div className="flex items-center gap-2 mb-4">
                         <Scale size={14} className="text-[#c4a484]" />
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">{t.card.mass_loss}</h4>
                      </div>
                      
                      <div className="relative h-8 bg-zinc-900 w-full mb-4 flex items-center px-4 border border-zinc-800">
                         <div className="absolute left-0 top-0 bottom-0 bg-[#c4a484]/10 w-full"></div>
                         <div className="absolute top-1/2 left-4 right-4 h-px bg-zinc-700"></div>
                         <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
                         <motion.div 
                           initial={{ left: '10%' }} animate={{ left: '80%' }} transition={{ duration: 1.5, ease: "easeOut" }}
                           className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#c4a484] rounded-full z-10 shadow-[0_0_10px_rgba(196,164,132,0.8)]"
                         >
                           <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#c4a484]">-{selectedPiece.tech_specs.shrinkage}</div>
                         </motion.div>
                      </div>

                      <div className="flex justify-between font-mono text-xs text-zinc-400">
                         <span>{selectedPiece.tech_specs.weight_raw}g ({t.card.raw})</span>
                         <span className="text-white">{selectedPiece.tech_specs.weight_fired}g ({t.card.fired})</span>
                      </div>
                    </div>

                    {/* Thermodynamics */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="border-l border-[#c4a484] pl-4">
                         <div className="flex items-center gap-2 mb-1 text-zinc-500">
                            <Thermometer size={12} /> <span className="text-[9px] uppercase tracking-widest">{t.card.temp}</span>
                         </div>
                         <div className="text-xl font-serif text-white">{selectedPiece.tech_specs.temp_peak}ºC</div>
                      </div>
                      <div className="border-l border-zinc-700 pl-4">
                         <div className="flex items-center gap-2 mb-1 text-zinc-500">
                            <Clock size={12} /> <span className="text-[9px] uppercase tracking-widest">{t.card.duration}</span>
                         </div>
                         <div className="text-xl font-serif text-white">{selectedPiece.tech_specs.time_fired}</div>
                      </div>
                    </div>

                    {/* Engineering Note */}
                    <div className="bg-[#c4a484]/5 p-5 border border-[#c4a484]/20 relative">
                       <Activity size={14} className="absolute top-3 right-3 text-[#c4a484] opacity-50"/>
                       <span className="text-[9px] uppercase text-[#c4a484] font-bold tracking-widest block mb-2">{t.card.note}</span>
                       <p className="text-xs font-serif italic leading-relaxed text-zinc-400">"{selectedPiece.notes}"</p>
                    </div>

                    <button 
                      onClick={() => addToCart(selectedPiece)}
                      disabled={selectedPiece.status !== 'Disponible' || cart.find(i => i.id === selectedPiece.id)}
                      className="w-full bg-[#c4a484] hover:bg-[#b08d6a] text-black py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {cart.find(i => i.id === selectedPiece.id) ? 'Añadido al Manifiesto' : `${t.card.cta} | €${selectedPiece.price.toLocaleString()}`}
                    </button>

                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}