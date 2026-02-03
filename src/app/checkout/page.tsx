'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Lock, CreditCard, Wallet, Truck, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

// --- ⬇️ BORRAR ESTA SECCIÓN "MOCK" EN TU PROYECTO REAL ⬇️ ---

// // 1. Mock de Link
// const Link = ({ href, children, className }) => (
//   <a href={href} className={className} onClick={(e) => e.preventDefault()}>
//     {children}
//   </a>
// );

// 2. Mock de AppContext
// const useAppContext = () => {
//   // Estado local simulado para la vista previa
//   const [cart, setCart] = useState([
//     {
//       id: "BIO-26-001",
//       title: "Estratigrafía I",
//       subtitle: "Serie Oxidación",
//       price: 2400,
//       imageColor: "bg-[#1a1a1a]"
//     },
//     {
//       id: "BIO-J-001",
//       title: "Nudo de Tensión",
//       subtitle: "Pendientes Orbitales",
//       price: 450,
//       imageColor: "bg-[#222]"
//     }
//   ]);

  // const removeFromCart = (itemId) => {
  //   setCart(prev => prev.filter(item => item.id !== itemId));
  // };

  // const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

//   return {
//     cart,
//     removeFromCart,
//     cartTotal,
//     t: {
//       cart: {
//         title: 'Manifiesto de Adquisición',
//         empty: 'Su manifiesto está vacío.',
//         total: 'Total Estimado',
//         checkout: 'Proceder al Pago Seguro',
//         remove: 'Eliminar'
//       }
//     }
//   };
// };
// -------------------------------------------------------------

export default function CheckoutPage() {
  const { cart, removeFromCart, cartTotal, t } = useAppContext();
  const [step, setStep] = useState(1); // 1: Datos, 2: Pago
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Coste de envío fijo para este ejemplo (podría ser dinámico)
  const shippingCost = 150; 
  const finalTotal = cartTotal + shippingCost;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulación de proceso de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 2000);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-[#111] border border-[#c4a484]/30 p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-[#c4a484]"></div>
          <div className="w-20 h-20 bg-[#c4a484]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#c4a484]">
            <CheckCircle2 size={40} className="text-[#c4a484]" />
          </div>
          <h2 className="text-3xl font-serif text-white italic mb-4">Adquisición Confirmada</h2>
          <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
            El certificado de autenticidad digital ha sido acuñado y vinculado a su ID. Recibirá las coordenadas de seguimiento seguro en breve.
          </p>
          <div className="text-[10px] font-mono text-zinc-500 bg-black p-4 mb-8 border border-zinc-800">
            REF: TX-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </div>
          <Link href="/" className="inline-block text-xs uppercase tracking-widest text-[#c4a484] hover:text-white transition-colors border-b border-[#c4a484] pb-1">
            Volver al Origen
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c4a484] selection:text-black pb-24">
      
      {/* Fondo técnico */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAtMjBoMnYyaC0ydjFoLTIxdi0yaDF2LTJoMXYyaDF6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')` }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-32 md:pt-40 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Pasarela Segura</span>
            <h1 className="text-3xl md:text-5xl text-white font-serif leading-none italic">Manifiesto de Adquisición</h1>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 mt-4 md:mt-0">
            <Lock size={14} className="text-[#c4a484]" />
            <span className="text-[10px] uppercase tracking-widest">Encriptación SSL / Protocolo Artefactoria</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* COLUMNA IZQUIERDA: FORMULARIOS */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Paso 1: Identificación y Envío */}
            <div className={`transition-opacity duration-500 ${step === 1 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${step === 1 ? 'border-[#c4a484] text-[#c4a484] bg-[#c4a484]/10' : 'border-zinc-700 text-zinc-700'}`}>01</div>
                <h3 className="text-xl text-white font-serif italic">Logística de Envío</h3>
              </div>
              
              <form className="grid grid-cols-2 gap-6 pl-12">
                <div className="col-span-2">
                  <label className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-2">Email de Registro</label>
                  <input type="email" className="w-full bg-[#111] border border-white/10 p-4 text-sm text-white focus:border-[#c4a484] outline-none transition-colors" placeholder="cliente@ejemplo.com" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-[#111] border border-white/10 p-4 text-sm text-white focus:border-[#c4a484] outline-none transition-colors" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-2">Apellido</label>
                  <input type="text" className="w-full bg-[#111] border border-white/10 p-4 text-sm text-white focus:border-[#c4a484] outline-none transition-colors" />
                </div>
                <div className="col-span-2">
                  <label className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-2">Dirección de Entrega</label>
                  <input type="text" className="w-full bg-[#111] border border-white/10 p-4 text-sm text-white focus:border-[#c4a484] outline-none transition-colors" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-2">Ciudad</label>
                  <input type="text" className="w-full bg-[#111] border border-white/10 p-4 text-sm text-white focus:border-[#c4a484] outline-none transition-colors" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[9px] uppercase tracking-widest text-zinc-500 mb-2">Código Postal</label>
                  <input type="text" className="w-full bg-[#111] border border-white/10 p-4 text-sm text-white focus:border-[#c4a484] outline-none transition-colors" />
                </div>
              </form>

              {step === 1 && (
                <div className="pl-12 mt-8">
                  <button 
                    onClick={() => setStep(2)}
                    className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c4a484] hover:text-white transition-colors"
                  >
                    Continuar al Pago
                  </button>
                </div>
              )}
            </div>

            {/* Paso 2: Pago */}
            <div className={`transition-opacity duration-500 ${step === 2 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
              <div className="flex items-center gap-4 mb-8 pt-8 border-t border-white/5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${step === 2 ? 'border-[#c4a484] text-[#c4a484] bg-[#c4a484]/10' : 'border-zinc-700 text-zinc-700'}`}>02</div>
                <h3 className="text-xl text-white font-serif italic">Transferencia de Valor</h3>
              </div>

              {step === 2 && (
                <div className="pl-12 space-y-4">
                  <div className="border border-[#c4a484] bg-[#c4a484]/5 p-6 cursor-pointer flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <CreditCard className="text-[#c4a484]" size={20} />
                      <span className="text-sm uppercase tracking-widest text-white">Tarjeta de Crédito / Débito</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border border-[#c4a484] flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#c4a484] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="border border-white/10 p-6 cursor-pointer flex justify-between items-center hover:border-white/30 transition-colors opacity-60">
                    <div className="flex items-center gap-4">
                      <Wallet className="text-zinc-500" size={20} />
                      <span className="text-sm uppercase tracking-widest text-zinc-400">Crypto / Wallet Connect</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <input type="text" placeholder="Número de Tarjeta" className="col-span-2 bg-[#111] border border-white/10 p-4 text-sm text-white outline-none" />
                    <input type="text" placeholder="MM / AA" className="bg-[#111] border border-white/10 p-4 text-sm text-white outline-none" />
                    <input type="text" placeholder="CVC" className="bg-[#111] border border-white/10 p-4 text-sm text-white outline-none" />
                  </div>

                  <div className="mt-8 flex items-center gap-4 p-4 bg-[#111] border border-white/5 text-xs text-zinc-500">
                    <ShieldCheck size={16} className="text-[#c4a484]" />
                    <span>Todas las transacciones son finales. La garantía de autenticidad se emite en blockchain tras la confirmación.</span>
                  </div>

                  <button 
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full mt-6 bg-[#c4a484] text-black py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#b08d6a] transition-colors flex justify-center items-center gap-3"
                  >
                    {isProcessing ? 'Procesando Bloque...' : `Confirmar Pago: €${finalTotal.toLocaleString()}`}
                    {!isProcessing && <ArrowRight size={14} />}
                  </button>
                  <button onClick={() => setStep(1)} className="mt-4 text-xs text-zinc-500 hover:text-white underline underline-offset-4 uppercase tracking-widest">
                    Volver a Datos de Envío
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* COLUMNA DERECHA: RESUMEN (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-[#111] border border-white/10 p-8 shadow-2xl">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8 border-b border-white/10 pb-4">
                Resumen de Activos
              </h4>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-zinc-600">
                  <p className="text-xs uppercase tracking-widest">{t.cart.empty}</p>
                  <Link href="/coleccion" className="block mt-4 text-[#c4a484] hover:underline text-xs">Explorar Colección</Link>
                </div>
              ) : (
                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className={`w-16 h-16 ${item.imageColor} border border-white/5 flex-shrink-0`}></div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h5 className="text-white font-serif italic">{item.title}</h5>
                          <span className="text-[#c4a484] font-mono text-xs">€{item.price.toLocaleString()}</span>
                        </div>
                        <p className="text-[9px] uppercase tracking-widest text-zinc-500">{item.subtitle}</p>
                        <p className="text-[8px] font-mono text-zinc-600 mt-1">{item.id}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[9px] text-red-900 hover:text-red-500 mt-2 flex items-center gap-1 uppercase tracking-widest"
                        >
                          <Trash2 size={10} /> {t.cart.remove}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-white/10 pt-6 space-y-3">
                <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-500">
                  <span>Subtotal</span>
                  <span>€{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-500">
                  <span className="flex items-center gap-2"><Truck size={12}/> Envío Asegurado</span>
                  <span>€{shippingCost}</span>
                </div>
                <div className="flex justify-between items-end border-t border-white/10 pt-6 mt-2">
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Total Estimado</span>
                  <span className="text-2xl font-serif text-[#c4a484]">€{finalTotal.toLocaleString()}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}