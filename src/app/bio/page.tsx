'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity, Zap, Ruler, Cpu, History, ArrowRight } from 'lucide-react';
import Image from 'next/image'; 

// Componente visual para separar secciones (Línea técnica)
const TechDivider = () => (
  <div className="w-full flex items-center gap-4 opacity-20 my-24">
    <div className="h-px bg-[#c4a484] flex-grow"></div>
    <div className="text-[#c4a484] text-[8px] font-mono tracking-widest">SEC_BREAK // 0xFF</div>
    <div className="h-px bg-[#c4a484] flex-grow"></div>
  </div>
);

export default function BioPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black pb-24">
      
      {/* Fondo de rejilla técnica sutil */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC0ydjRoMnY0aDJ2LTRoMnYtNGgtMnpNMzYgMzRWMzZoNHYtMmgtNHptMCAwdjRoMnYtNGgtMnoiIGZpbGw9IiNjNGE0ODQiLz48L2c+PC9zdmc+')` }}>
      </div>

      <div className="container mx-auto px-6 md:px-24 pt-32 md:pt-48 relative z-10">
        
        {/* --- HEADER: LA IDENTIDAD --- */}
        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={fadeIn} 
          className="max-w-4xl mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.4em]">Perfil Técnico</span>
            <div className="h-px w-12 bg-[#c4a484]/50"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white font-serif leading-[1.1] mb-8">
            De la infraestructura civil <br />
            <span className="italic text-zinc-600">a la alquimia del barro.</span>
          </h1>
          
          <p className="text-lg font-light leading-relaxed text-zinc-400 max-w-2xl border-l border-[#c4a484] pl-6">
            Soy Ingeniera Civil y Programadora. Durante años construí estructuras para el mundo físico y comunidades para el mundo digital (160k+ usuarias). Hoy, utilizo esa precisión para recuperar el legado artesano de mi familia bajo una nueva lógica: la soberanía.
          </p>
        </motion.div>

        {/* --- GRID DE COMPETENCIAS (Stats de RPG/Ingeniería) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {[
            { icon: <Ruler size={18}/>, label: "Ingeniería", val: "Civil / Estructural" },
            { icon: <Cpu size={18}/>, label: "Código", val: "Full Stack / AI" },
            { icon: <Activity size={18}/>, label: "Comunidad", val: "Estrategia Digital" },
            { icon: <History size={18}/>, label: "Legado", val: "2ª Generación" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-white/5 p-6 hover:border-[#c4a484]/30 transition-colors group"
            >
              <div className="text-zinc-500 mb-4 group-hover:text-[#c4a484] transition-colors">{stat.icon}</div>
              <span className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-1">{stat.label}</span>
              <span className="text-white font-mono text-xs">{stat.val}</span>
            </motion.div>
          ))}
        </div>

        {/* --- NARRATIVA CENTRAL --- */}
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Columna Texto */}
          <div className="md:col-span-7 space-y-12">
            <div>
              <h3 className="text-3xl text-white font-serif italic mb-6">El Pivote a la Materia</h3>
              <p className="text-sm text-zinc-400 leading-loose">
                Gestionar una comunidad de 160.000 mujeres me enseñó sobre las necesidades humanas. Estudiar ingeniería me enseñó cómo resolverlas eficientemente. Pero el mundo digital es efímero.
              </p>
              <p className="text-sm text-zinc-400 leading-loose mt-4">
                Decidí cerrar esa etapa para construir algo que mis hijos pudieran tocar. Vendí propiedades, eliminé deuda y diseñé un plan de vida basado en la <strong>eficiencia energética</strong> y la <strong>creación de activos tangibles</strong>. Bioramica no es un hobby; es la ejecución física de ese plan.
              </p>
            </div>

            <div className="bg-[#161616] p-8 border-l-2 border-[#c4a484]">
              <h4 className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Zap size={14}/> Filosofía Operativa
              </h4>
              <p className="text-xl font-serif text-white italic">
                "Ingeniería de Guerrilla: Menos dependencia del sistema estatal, más soberanía tecnológica, energética y financiera."
              </p>
            </div>
          </div>

          {/* Columna Visual (Placeholder para foto tuya trabajando o del taller) */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-[#111] border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              
              {/* Aquí iría el componente <Image /> real */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">[ FOTOGRAFÍA DE LA INGENIERA ]</span>
              </div>

              <div className="absolute bottom-8 left-8 z-20">
                <span className="block text-white font-serif italic text-2xl">La Fundadora</span>
                <span className="text-[9px] text-[#c4a484] uppercase tracking-widest">En el Taller Off-Grid</span>
              </div>
            </div>
            {/* Elemento decorativo detrás */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#c4a484]/30"></div>
          </div>
        </div>

        <TechDivider />

        {/* --- MANIFIESTO --- */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white font-serif mb-4">Manifiesto 2026</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Los principios que rigen Artefactoria & Bioramica</p>
          </div>

          <div className="space-y-4">
            {[
              { title: "01. El Origen es el Destino", desc: "Recuperamos las marcas de mis padres no por nostalgia, sino como infraestructura base. El legado es un activo." },
              { title: "02. Belleza Estructural", desc: "Donde otros ven decoración, nosotros vemos cálculo de cargas y química de materiales. La estética es consecuencia de la función." },
              { title: "03. Soberanía Radical", desc: "Fabricamos con energía solar propia. Construimos sin deuda. Vivimos fuera del algoritmo." },
              { title: "04. Economía Real", desc: "Combinamos la consultoría de alto nivel (Artefactoria) con la producción tangible (Bioramica) para optimizar la carga fiscal y la libertad familiar." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border border-white/5 hover:border-[#c4a484]/50 p-6 transition-all bg-[#0e0e0e]"
              >
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <span className="text-[#c4a484] font-mono text-sm">{item.title.split('.')[0]}</span>
                  <div className="flex-grow">
                    <h4 className="text-white font-serif italic text-lg mb-2 group-hover:text-[#c4a484] transition-colors">{item.title.split('.')[1]}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed uppercase tracking-wide">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="mt-32 text-center">
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-8">¿Quieres ver cómo aplicamos esto?</p>
          <a 
            href="/coleccion" 
            className="inline-flex items-center gap-3 bg-[#c4a484] text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#b08d6a] transition-colors"
          >
            Explorar la Obra <ArrowRight size={14}/>
          </a>
        </div>

      </div>
    </div>
  );
}