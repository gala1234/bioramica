'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, FileText, Lock, Scale, AlertCircle } from 'lucide-react';

const SECTIONS = [
  {
    id: 'privacy',
    title: 'Política de Privacidad',
    icon: <Lock size={18} />,
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-zinc-400">
        <p>
          En <strong>Bioramica</strong> y <strong>Artefactoria</strong>, aplicamos la misma filosofía de soberanía a sus datos que a nuestra energía: minimización y control.
        </p>
        
        <h4 className="text-white font-serif text-lg mt-8 mb-4">1. Recolección de Datos</h4>
        <p>
          Solo recolectamos los datos estrictamente necesarios para la ejecución de la "Ingeniería de Adquisición" (compra y envío) y la emisión del Certificado de Autenticidad. No utilizamos rastreadores de comportamiento de terceros ni vendemos datos a brokers de publicidad.
        </p>

        <h4 className="text-white font-serif text-lg mt-8 mb-4">2. Registro de Artefactoria</h4>
        <p>
          Para garantizar la procedencia, vinculamos su ID de Cliente con el Serial ID de la pieza adquirida en nuestra base de datos inmutable. Este registro es privado por defecto, pero puede hacerse público a petición del coleccionista para demostrar propiedad.
        </p>

        <h4 className="text-white font-serif text-lg mt-8 mb-4">3. Derechos ARCO</h4>
        <p>
          Cumplimos rigurosamente con el RGPD (Reglamento General de Protección de Datos). Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición contactando directamente con <em>protocolo@artefactoria.com</em>.
        </p>
      </div>
    )
  },
  {
    id: 'terms',
    title: 'Términos de Compra',
    icon: <Scale size={18} />,
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-zinc-400">
        <p>
          La adquisición de una obra de Bioramica constituye un contrato de transferencia de activo físico y derechos limitados de propiedad intelectual.
        </p>

        <h4 className="text-white font-serif text-lg mt-8 mb-4">1. Naturaleza del Activo</h4>
        <p>
          Usted reconoce que está adquiriendo una pieza de cerámica artesanal ("Ingeniería Orgánica"). Las imperfecciones en el esmalte, variaciones de tono o micro-fisuras superficiales (craquelado) son características técnicas documentadas y no defectos. Son la huella del proceso térmico irrepetible.
        </p>

        <h4 className="text-white font-serif text-lg mt-8 mb-4">2. Política de Ventas Finales</h4>
        <p>
          Debido a la naturaleza única y la logística de seguridad empleada para el envío de obras de arte, <strong>todas las ventas son finales</strong>. No aceptamos devoluciones por "cambio de opinión".
        </p>
        <div className="bg-[#c4a484]/10 border border-[#c4a484]/30 p-4 mt-4">
          <p className="text-[#c4a484] text-xs">
            <strong>Excepción de Daño en Tránsito:</strong> Si la pieza sufre daños estructurales durante el envío, debe notificarse en las primeras 24h tras la recepción con evidencia fotográfica para activar el seguro de la galería.
          </p>
        </div>

        <h4 className="text-white font-serif text-lg mt-8 mb-4">3. Envíos Internacionales</h4>
        <p>
          El cliente es responsable de cualquier arancel, impuesto de aduana o tasa de importación requerida por el país de destino (DDU - Delivery Duty Unpaid).
        </p>
      </div>
    )
  },
  {
    id: 'warranty',
    title: 'Garantía de Autenticidad',
    icon: <ShieldCheck size={18} />,
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-zinc-400">
        <p>
          El valor de Bioramica reside tanto en la materia como en su trazabilidad.
        </p>

        <h4 className="text-white font-serif text-lg mt-8 mb-4">1. El Protocolo Artefactoria</h4>
        <p>
          Cada pieza va acompañada de un Certificado Digital inmutable accesible mediante el código grabado en la base de la obra. Bioramica garantiza de por vida que la pieza registrada corresponde a los datos técnicos de cocción y modelado almacenados en nuestros servidores.
        </p>

        <h4 className="text-white font-serif text-lg mt-8 mb-4">2. Restauración Técnica</h4>
        <p>
          En caso de rotura accidental por parte del cliente, ofrecemos un servicio de "Kintsugi Técnico" (reparación con resina epoxi y polvo de oro o metal) para restaurar la integridad estructural de la pieza, cobrando únicamente los costes de material y mano de obra.
        </p>
      </div>
    )
  }
];

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black pb-24">
      
      {/* Fondo técnico */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAtMjBoMnYyaC0ydjFoLTIxdi0yaDF2LTJoMXYyaDF6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')` }}>
      </div>

      <div className="container mx-auto px-6 md:px-24 pt-32 md:pt-48 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block flex items-center gap-2">
            <FileText size={12}/> Marco Normativo
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif leading-[1.1] mb-6">
            Textos Legales <br />
            <span className="italic text-zinc-600">& Garantías.</span>
          </h1>
          <p className="text-sm font-light text-zinc-400 max-w-xl">
            La transparencia es parte de nuestra ingeniería. Aquí definimos las reglas del juego para asegurar una relación justa, privada y soberana.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Navegación Lateral (Tabs) */}
          <div className="md:col-span-4 sticky top-32">
            <div className="flex flex-col gap-2 border-l border-white/10 pl-6">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`text-left text-xs uppercase tracking-widest py-4 transition-all flex items-center gap-3 ${
                    activeTab === section.id 
                      ? 'text-[#c4a484] font-bold translate-x-2' 
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {activeTab === section.id && (
                    <motion.div layoutId="active-dot" className="w-1.5 h-1.5 bg-[#c4a484] rounded-full absolute -left-[27px]" />
                  )}
                  {section.icon}
                  {section.title}
                </button>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-[#111] border border-white/5">
              <div className="flex items-center gap-3 text-zinc-500 mb-2">
                <AlertCircle size={16} />
                <span className="text-[9px] uppercase tracking-widest">Nota Importante</span>
              </div>
              <p className="text-[10px] text-zinc-400 leading-relaxed">
                Al realizar una compra o registrar una pieza, usted acepta implícitamente estos términos. Última actualización: Febrero 2026.
              </p>
            </div>
          </div>

          {/* Contenido Dinámico */}
          <div className="md:col-span-8 min-h-[50vh]">
            <AnimatePresence mode='wait'>
              {SECTIONS.map((section) => (
                section.id === activeTab && (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#0e0e0e] border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden"
                  >
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none scale-150">
                      {section.icon}
                    </div>

                    <div className="relative z-10">
                      <h2 className="text-2xl font-serif text-white italic mb-8 border-b border-white/10 pb-6">
                        {section.title}
                      </h2>
                      {section.content}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}