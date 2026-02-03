'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sun, Battery, Flame, MapPin, Calendar, ShieldAlert, ArrowRight, Activity, Cpu } from 'lucide-react';

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; sub?: string; delay: number; }> = ({ icon, label, value, sub, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-[#111] border border-white/5 p-6 hover:border-[#c4a484]/30 transition-colors group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
      <Cpu size={48} strokeWidth={1} />
    </div>
    <div className="text-zinc-500 mb-4 group-hover:text-[#c4a484] transition-colors">{icon}</div>
    <span className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-2">{label}</span>
    <span className="text-2xl font-mono text-white block mb-1">{value}</span>
    {sub && <span className="text-[9px] font-mono text-[#c4a484]">{sub}</span>}
  </motion.div>
);

export default function TallerPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black pb-24">
      
      {/* Fondo técnico */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAtMjBoMnYyaC0ydjFoLTIxdi0yaDF2LTJoMXYyaDF6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')` }}>
      </div>

      <div className="container mx-auto px-6 md:px-24 pt-32 md:pt-48 relative z-10">
        
        {/* --- HERO: OFF-GRID --- */}
        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={fadeIn} 
          className="max-w-4xl mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-2">
              <Zap size={12}/> Zona de Soberanía
            </span>
            <div className="h-px w-12 bg-[#c4a484]/50"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white font-serif leading-[1.1] mb-8">
            Producción solar <br />
            <span className="italic text-zinc-600">independiente.</span>
          </h1>
          
          <p className="text-lg font-light leading-relaxed text-zinc-400 max-w-2xl border-l border-[#c4a484] pl-6">
            El taller de Bioramica no está conectado a la red estatal. Cada pieza se cuece utilizando energía capturada y almacenada in situ. No es solo cerámica; es la prueba física de que la autonomía energética es posible.
          </p>
        </motion.div>

        {/* --- DASHBOARD DE ENERGÍA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          <StatCard 
            icon={<Activity size={24}/>} 
            label="Estado del Sistema" 
            value="ONLINE" 
            sub="Latencia Baja" 
            delay={0.1} 
          />
          <StatCard 
            icon={<Sun size={24}/>} 
            label="Entrada Fotovoltaica" 
            value="4.8 kW" 
            sub="Pico Solar Actual" 
            delay={0.2} 
          />
          <StatCard 
            icon={<Battery size={24}/>} 
            label="Almacenamiento" 
            value="98%" 
            sub="~14h Autonomía" 
            delay={0.3} 
          />
          <StatCard 
            icon={<Flame size={24}/>} 
            label="Estado del Horno" 
            value="STANDBY" 
            sub="Temp: 24ºC" 
            delay={0.4} 
          />
        </div>

        {/* --- PROTOCOLO DE VISITA --- */}
        <div className="grid md:grid-cols-12 gap-16 border-t border-white/5 pt-24">
          
          <div className="md:col-span-5">
            <h3 className="text-3xl text-white font-serif italic mb-8">Protocolo de Visita</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#111] border border-white/10 flex items-center justify-center text-[#c4a484] flex-shrink-0">01</div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-2">Cita Previa Obligatoria</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Para mantener la eficiencia del trabajo y la seguridad del entorno, no aceptamos visitas sin agendar. El taller es un espacio de concentración técnica.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#111] border border-white/10 flex items-center justify-center text-[#c4a484] flex-shrink-0">02</div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-2">Ubicación Sensible</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Las coordenadas GPS exactas se envían 24 horas antes de la visita confirmada. Zona rural de difícil acceso para vehículos de perfil bajo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <MapPin className="text-zinc-700" size={48} strokeWidth={1} />
              </div>
              
              <h4 className="text-lg text-white font-serif italic mb-6">Solicitar Acceso</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-8">Rellene el formulario para iniciar el protocolo.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-zinc-500">Nombre Completo</label>
                    <input type="text" className="w-full bg-black border border-white/10 p-3 text-sm text-white focus:border-[#c4a484] outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-zinc-500">Email Corporativo</label>
                    <input type="email" className="w-full bg-black border border-white/10 p-3 text-sm text-white focus:border-[#c4a484] outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-500">Motivo de la Visita</label>
                  <select className="w-full bg-black border border-white/10 p-3 text-sm text-zinc-400 focus:border-[#c4a484] outline-none transition-colors">
                    <option>Adquisición de Obra (Coleccionista)</option>
                    <option>Proyecto de Interiorismo</option>
                    <option>Prensa / Divulgación</option>
                  </select>
                </div>
                <button className="w-full bg-[#c4a484] text-black py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#b08d6a] transition-colors flex items-center justify-center gap-3">
                  Enviar Solicitud <ArrowRight size={14}/>
                </button>
              </form>

              <div className="mt-8 flex items-center gap-3 text-[9px] text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-4">
                <ShieldAlert size={12}/>
                <span>Sus datos están protegidos bajo protocolo de privacidad Artefactoria.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}