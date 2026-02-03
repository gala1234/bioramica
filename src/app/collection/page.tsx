'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Search, Filter, ArrowRight, Layers, LayoutGrid, Tag 
} from 'lucide-react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import PieceDetailModal from '@/components/PieceDetailModal';


// --- DATOS: FAMILIAS Y PIEZAS ---

const COLLECTIONS = [
  { id: 'all', title: 'Archivo Completo', count: 12, image: 'bg-zinc-800' },
  { id: 'marine', title: 'Vidas Marinas', count: 5, image: 'bg-[#1a2e35]' }, // Tonos azules/mar
  { id: 'oxidation', title: 'Serie Oxidación', count: 4, image: 'bg-[#3a2a2a]' }, // Tonos tierra/óxido
  { id: 'structure', title: 'Estructuras', count: 3, image: 'bg-[#1c1c1c]' } // Tonos negros/técnicos
];

const COLLECTION_PIECES = [
  // Vidas Marinas
  {
    id: "BIO-M-001",
    collectionId: "marine",
    title: "Caballito #01",
    subtitle: "Fauna Abisal",
    status: "Disponible",
    price: 350,
    imageColor: "bg-[#2a4a5a]",
    tech_specs: {
      shrinkage: "12%",
      clay: "",
      glaze: "",
      atmosphere: "",
      weight_raw: 120,
      weight_fired: 100,
      dimensions: "",
      temp_peak: 1250,
      time_fired: "12 horas"
    },
    notes: ""
  },
  {
    id: "BIO-M-002",
    collectionId: "marine",
    title: "Banco de Peces",
    subtitle: "Mural Dinámico",
    status: "Vendido",
    price: 1200,
    imageColor: "bg-[#1f3a45]",
    tech_specs: {
      shrinkage: "11%",
      clay: "",
      glaze: "",
      atmosphere: "",
      weight_raw: 120,
      weight_fired: 100,
      dimensions: "",
      temp_peak: 1250,
      time_fired: "12 horas"
    },
    notes: ""
  },
  // Oxidación
  {
    id: "BIO-26-001",
    collectionId: "oxidation",
    title: "Estratigrafía I",
    subtitle: "Serie Oxidación",
    status: "Disponible",
    price: 2400,
    imageColor: "bg-[#3e2b26]",
    tech_specs: {
      shrinkage: "11.7%",
      clay: "",
      glaze: "",
      atmosphere: "",
      weight_raw: 120,
      weight_fired: 100,
      dimensions: "",
      temp_peak: 1250,
      time_fired: "12 horas"
    },
    notes: ""
  },
  // Estructuras
  {
    id: "BIO-S-005",
    collectionId: "structure",
    title: "Monolito 05",
    subtitle: "Arquitectura",
    status: "Reservado",
    price: 4500,
    imageColor: "bg-[#0f0f0f]",
    tech_specs: {
      shrinkage: "11.4%",
      clay: "",
      glaze: "",
      atmosphere: "",
      weight_raw: 120,
      weight_fired: 100,
      dimensions: "",
      temp_peak: 1250,
      time_fired: "12 horas"
    },
    notes: ""
  },
  {
    id: "BIO-S-006",
    collectionId: "structure",
    title: "Vórtice",
    subtitle: "Dinámica de Fluidos",
    status: "Disponible",
    price: 2800,
    imageColor: "bg-[#181818]",
    tech_specs: {
      shrinkage: "18.3%",
      clay: "",
      glaze: "",
      atmosphere: "",
      weight_raw: 120,
      weight_fired: 100,
      dimensions: "",
      temp_peak: 1250,
      time_fired: "12 horas"
    },
    notes: ""
  }
];

export default function ColeccionPage() {
  const { setSelectedPiece } = useAppContext();
  const [activeCollection, setActiveCollection] = useState('all');
  const [filterStatus, setFilterStatus] = useState('Todos'); // Todos, Disponible

  // Lógica de filtrado
  const filteredPieces = COLLECTION_PIECES.filter(piece => {
    const matchesCollection = activeCollection === 'all' || piece.collectionId === activeCollection;
    const matchesStatus = filterStatus === 'Todos' || piece.status === filterStatus;
    return matchesCollection && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black pb-24">
      
      {/* Fondo técnico */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAtMjBoMnYyaC0ydjFoLTIxdi0yaDF2LTJoMXYyaDF6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')` }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-32 md:pt-40 relative z-10">
        
        {/* --- HEADER & FAMILIAS --- */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8 gap-8">
            <div>
              <span className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block flex items-center gap-2">
                <Layers size={12}/> Familias de Obra
              </span>
              <h1 className="text-4xl md:text-6xl text-white font-serif leading-none italic">Catálogo General</h1>
            </div>
            
            {/* Contador */}
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-widest">
              <Database size={12} className="text-[#c4a484]"/>
              <span>{filteredPieces.length} Activos Visibles</span>
            </div>
          </div>

          {/* Selector de Colecciones (Tabs Visuales) */}
          <div className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar">
            {COLLECTIONS.map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveCollection(col.id)}
                className={`group min-w-[200px] text-left transition-all relative overflow-hidden border ${
                  activeCollection === col.id 
                    ? 'border-[#c4a484] bg-[#c4a484]/5' 
                    : 'border-white/5 hover:border-white/20 bg-[#111]'
                }`}
              >
                <div className={`h-24 ${col.image} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <div className="p-4">
                  <h4 className={`text-sm font-serif italic mb-1 ${activeCollection === col.id ? 'text-[#c4a484]' : 'text-white'}`}>
                    {col.title}
                  </h4>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500">{col.count} Piezas</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* --- BARRA DE HERRAMIENTAS --- */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            {['Todos', 'Disponible'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`flex items-center gap-2 text-[10px] uppercase tracking-widest px-3 py-1 border transition-colors ${
                  filterStatus === status 
                    ? 'border-white text-white' 
                    : 'border-transparent text-zinc-600 hover:text-zinc-400'
                }`}
              >
                {filterStatus === status && <div className="w-1.5 h-1.5 bg-[#c4a484] rounded-full"></div>}
                {status}
              </button>
            ))}
          </div>
          <div className="hidden md:flex gap-2 text-zinc-600">
            <LayoutGrid size={16} className="text-white"/>
          </div>
        </div>

        {/* --- GRID DE PIEZAS --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPieces.map((piece) => (
              <motion.div 
                layout
                key={piece.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layoutId={`card-container-${piece.id}`}
                onClick={() => setSelectedPiece(piece)}
                className="group cursor-pointer relative bg-[#0e0e0e] border border-white/5 hover:border-[#c4a484]/30 transition-colors"
              >
                {/* Imagen */}
                <motion.div 
                  layoutId={`card-image-${piece.id}`}
                  className={`aspect-[4/5] ${piece.imageColor} relative overflow-hidden`}
                >
                  {/* Overlay Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 z-10">
                    <span className="text-[9px] uppercase tracking-widest text-white border border-white/20 px-4 py-2 bg-black/50 backdrop-blur-sm flex items-center gap-2">
                      <Search size={10} /> Inspeccionar
                    </span>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 right-4 z-20">
                     <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-1 backdrop-blur-sm border ${
                       piece.status === 'Disponible' ? 'bg-[#c4a484]/90 text-black border-[#c4a484]' : 'bg-zinc-800/90 text-zinc-400 border-zinc-700'
                     }`}>
                       {piece.status}
                     </span>
                  </div>

                  {/* Precio */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                     <span className="text-xl font-serif text-[#c4a484] italic">€{piece.price.toLocaleString()}</span>
                  </div>
                </motion.div>

                {/* Info */}
                <motion.div layoutId={`card-info-${piece.id}`} className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-serif italic text-xl group-hover:text-[#c4a484] transition-colors">{piece.title}</h4>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500">{piece.subtitle}</span>
                    <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-600">
                      <span>{piece.id}</span>
                      <ArrowRight size={12} className="group-hover:text-[#c4a484] group-hover:translate-x-1 transition-all"/>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MODAL (Componente Importado) --- */}
        <PieceDetailModal />

      </div>
    </div>
  );
}