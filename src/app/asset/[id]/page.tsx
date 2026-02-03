'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Scale, Flame, Clock, Activity, Thermometer, 
  Database, ShieldCheck, Check, Share2, Layers, Truck, Box, FileText,
  Search 
} from 'lucide-react';

import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';


// Datos simulados (Mismo set que en colección para consistencia)
const ALL_PIECES = [
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
      atmosphere: "Reducción (Gas)",
      weight_raw: 1450,
      weight_fired: 1280,
      temp_peak: 1260,
      time_fired: "14h 30m",
      shrinkage: "11.7%"
    },
    notes: "Destellos metálicos en flanco sur provocados por reducción de oxígeno. Estructura laminar estabilizada."
  },
  {
    id: "BIO-26-002",
    title: "Masa Crítica II",
    subtitle: "Estudio de Volumen",
    status: "Reservado",
    price: 3100,
    imageColor: "bg-[#111]",
    tech_specs: {
      clay: "Arcilla Roja (Alta Temp)",
      glaze: "Pátina de Fuego",
      atmosphere: "Oxidación",
      weight_raw: 2100,
      weight_fired: 1850,
      temp_peak: 1180,
      time_fired: "10h 15m",
      shrinkage: "11.9%"
    },
    notes: "Resistencia estructural validada. Pieza central de la serie."
  }
];

type ActivoPageProps = {
  params: {
    id: string;
  };
};

const ActivoPage = ({ params }: ActivoPageProps) => {
  const { cart, addToCart, t } = useAppContext();
  const [piece, setPiece] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Simular carga de datos
  useEffect(() => {
    const targetId = params?.id || "BIO-26-001";
    const foundPiece = ALL_PIECES.find(p => p.id === targetId) || {
      // Fallback
      id: targetId,
      title: "Activo No Indexado",
      subtitle: "Referencia Externa",
      status: "Consultar",
      price: 0,
      imageColor: "bg-[#0f0f0f]",
      tech_specs: {
        clay: "N/A", glaze: "N/A", atmosphere: "N/A",
        weight_raw: 0, weight_fired: 0, temp_peak: 0, time_fired: "0h", shrinkage: "0%"
      },
      notes: "Datos técnicos no disponibles."
    };
    
    setTimeout(() => {
      setPiece(foundPiece);
      setLoading(false);
    }, 500);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-[#c4a484]">
        <div className="flex flex-col items-center gap-4">
          <Activity className="animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Cargando Expediente...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black pb-24">
      
      {/* Fondo técnico */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC0ydjRoMnY0aDJ2LTRoMnYtNGgtMnpNMzYgMzRWMzZoNHYtMmgtNHptMCAwdjRoMnYtNGgtMnoiIGZpbGw9IiNjNGE0ODQiLz48L2c+PC9zdmc+')` }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-32 relative z-10">
        
        {/* Navegación Breadcrumb */}
        <div className="flex items-center gap-4 mb-12 text-[10px] uppercase tracking-widest text-zinc-500">
          <Link href="/collection" className="hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft size={12}/> Volver a Colección
          </Link>
          <span className="text-[#c4a484] font-mono">/</span>
          <span className="text-white font-mono">{piece.id}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- COLUMNA IZQUIERDA: VISUAL --- */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`aspect-[4/5] ${piece.imageColor} relative overflow-hidden border border-white/5 shadow-2xl group`}
            >
              {/* Aquí iría el componente <Image /> real */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">[ Fotografía de Alta Definición ]</span>
              </div>
              
              {/* Overlay Técnico */}
              <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="border border-white/20 p-2 bg-black/20 backdrop-blur-md">
                  <span className="block text-[8px] uppercase tracking-widest text-zinc-400">Escala</span>
                  <span className="text-xs font-mono text-white">1:1</span>
                </div>
              </div>
            </motion.div>

            {/* Galería de detalles */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#111] border border-white/5 cursor-pointer hover:border-[#c4a484]/50 transition-colors opacity-60 hover:opacity-100 relative group">
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Search size={12} className="text-white"/>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- COLUMNA DERECHA: EXPEDIENTE DE VENTA --- */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-32"
            >
              
              {/* 1. Cabecera de Inversión */}
              <div className="border-b border-white/10 pb-8 mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl text-white font-serif italic mb-2">{piece.title}</h1>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#c4a484]">{piece.subtitle}</p>
                  </div>
                  <button className="text-zinc-500 hover:text-white transition-colors p-2 border border-white/10 rounded-full">
                    <Share2 size={16} strokeWidth={1.5}/>
                  </button>
                </div>
                
                <div className="flex items-end justify-between mt-10">
                  <div>
                    <span className="block text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Valoración de Mercado</span>
                    <span className="text-4xl font-serif text-white">€{piece.price.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 text-[9px] font-bold uppercase tracking-widest border mb-2 ${
                      piece.status === 'Disponible' 
                        ? 'border-[#c4a484] text-[#c4a484]' 
                        : 'border-zinc-700 text-zinc-600'
                    }`}>
                      {piece.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Botón de Acción Principal */}
              <div className="mb-10">
                <button 
                  onClick={() => addToCart(piece)}
                  disabled={piece.status !== 'Disponible' || !!cart.find((i: any) => i.id === piece.id)}
                  className="w-full bg-[#c4a484] hover:bg-[#b08d6a] text-black py-5 text-sm font-bold uppercase tracking-[0.2em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(196,164,132,0.2)] hover:shadow-[0_0_30px_rgba(196,164,132,0.4)]"
                >
                  {cart.find((i: any) => i.id === piece.id) 
                    ? <><Check size={18}/> Activo en Manifiesto</> 
                    : <>{t.card.cta}</>
                  }
                </button>
                
                {/* Garantías de Compra Segura */}
                <div className="flex justify-between mt-6 px-2">
                  <div className="flex items-center gap-2 text-[9px] text-zinc-500 uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-[#c4a484]"/>
                    <span>Autenticidad Blockchain</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-zinc-500 uppercase tracking-widest">
                    <Truck size={14} className="text-[#c4a484]"/>
                    <span>Envío Asegurado Global</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-zinc-500 uppercase tracking-widest">
                    <Box size={14} className="text-[#c4a484]"/>
                    <span>Embalaje de Museo</span>
                  </div>
                </div>
              </div>

              {/* 3. Expediente Técnico (Datos Expandidos) */}
              <div className="space-y-8">
                
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                  <Database size={14} className="text-[#c4a484]"/> Expediente Técnico
                </h3>

                {/* Gráfico de Merma */}
                <div className="bg-[#111] p-6 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10"><Layers size={40}/></div>
                  <div className="flex items-center gap-2 mb-6">
                    <Scale size={16} className="text-[#c4a484]" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">{t.card.mass_loss}</h4>
                  </div>
                  <div className="relative h-10 bg-zinc-900 w-full mb-4 flex items-center px-4 border border-zinc-800">
                    <div className="absolute left-0 top-0 bottom-0 bg-[#c4a484]/10 w-full"></div>
                    <div className="absolute top-1/2 left-4 right-4 h-px bg-zinc-700"></div>
                    <motion.div 
                      initial={{ left: '10%' }} 
                      animate={{ left: '80%' }} 
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#c4a484] rounded-full z-10 shadow-[0_0_15px_rgba(196,164,132,0.6)]"
                    >
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#c4a484] bg-black px-2 py-0.5 border border-[#c4a484]/30">
                        -{piece.tech_specs.shrinkage}
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex justify-between font-mono text-xs text-zinc-400">
                    <span>{piece.tech_specs.weight_raw}g ({t.card.raw})</span>
                    <span className="text-white">{piece.tech_specs.weight_fired}g ({t.card.fired})</span>
                  </div>
                </div>

                {/* Termodinámica & Química */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#111] p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-3 text-zinc-500">
                      <Thermometer size={14}/> <span className="text-[9px] uppercase tracking-widest">Pico Térmico</span>
                    </div>
                    <span className="text-xl font-serif text-white block">{piece.tech_specs.temp_peak}ºC</span>
                    <span className="text-[9px] text-zinc-600 uppercase mt-1 block">Curva Lenta ({piece.tech_specs.time_fired})</span>
                  </div>
                  <div className="bg-[#111] p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-3 text-zinc-500">
                      <Flame size={14}/> <span className="text-[9px] uppercase tracking-widest">Atmósfera</span>
                    </div>
                    <span className="text-sm text-white block">{piece.tech_specs.atmosphere}</span>
                    <span className="text-[9px] text-zinc-600 uppercase mt-1 block">Horno de Gas</span>
                  </div>
                </div>

                {/* Composición Material */}
                <div className="bg-[#111] p-4 border border-white/5">
                   <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-1">Barro Base</span>
                        <span className="text-white font-mono">{piece.tech_specs.clay}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-1">Esmalte / Pátina</span>
                        <span className="text-white font-mono">{piece.tech_specs.glaze}</span>
                      </div>
                   </div>
                </div>

                {/* Notas del Ingeniero */}
                <div className="bg-[#c4a484]/5 p-6 border border-[#c4a484]/20 relative">
                  <Activity size={16} className="absolute top-4 right-4 text-[#c4a484] opacity-50"/>
                  <span className="text-[9px] uppercase text-[#c4a484] font-bold tracking-widest block mb-3">{t.card.note}</span>
                  <p className="text-sm font-serif italic leading-relaxed text-zinc-300">"{piece.notes}"</p>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ActivoPage;