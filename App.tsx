import React, { useState, useEffect } from 'react';
import { IMAGES, CHECKOUT_LINKS } from './constants';
import { Check, Music, Calendar, ShieldCheck, Download, Smartphone, Users, Star, Lock, ChevronDown, Clock, MessageCircle, Mail, Sparkles } from './components/Icons';
import { Accordion } from './components/Accordion';
import SalesNotification from './components/SalesNotification';
import ThankYou from './components/ThankYou';
import OneTimeOffer from './components/OneTimeOffer';
import OneTimeOffer2 from './components/OneTimeOffer2';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/gracias' || currentPath === '/gracias/') {
    return <ThankYou />;
  }
  
  if (currentPath === '/oto1' || currentPath === '/oto1/') {
    return <OneTimeOffer />;
  }

  if (currentPath === '/oto2' || currentPath === '/oto2/') {
    return <OneTimeOffer2 />;
  }
  
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('complete-plan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleInitiateCheckout = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  // Carousel images for infinite scroll
  const carouselImages = [
    IMAGES.coverAdvent, IMAGES.coverChristmas, IMAGES.coverLent, 
    IMAGES.coverEaster, IMAGES.coverPentecost, IMAGES.coverOrdinary,
    IMAGES.coverAdvent, IMAGES.coverChristmas, IMAGES.coverLent, 
    IMAGES.coverEaster, IMAGES.coverPentecost, IMAGES.coverOrdinary,
    IMAGES.coverAdvent, IMAGES.coverChristmas, IMAGES.coverLent, 
    IMAGES.coverEaster, IMAGES.coverPentecost, IMAGES.coverOrdinary
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SalesNotification />
      
      {/* Top Ribbon */}
      <header className="bg-emerald-900 text-white py-3 text-center text-xs md:text-sm font-bold tracking-wider px-4">
        ✨ ADAPTADO AL CALENDARIO LITÚRGICO 2026
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-[90rem]">
          
          <div className="mb-8 flex justify-center">
             <div className="inline-flex items-center gap-2 bg-gradient-to-b from-[#f59e0b] to-[#d97706] border border-[#fcd34d]/50 text-white font-black text-sm md:text-base px-8 py-2.5 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.6)] uppercase tracking-widest transform hover:scale-105 transition-transform duration-300">
               <Sparkles size={18} className="text-[#fef3c7] fill-[#fef3c7] animate-pulse" />
               <span>MÁS DE 150 CANCIONES</span>
             </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
             Aprende a tocar <br />
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-200">
               Música Católica en el Piano
             </span>
          </h1>
          <div className="bg-emerald-600 inline-block px-6 py-2 rounded-lg transform -rotate-1 shadow-lg mb-6">
              <p className="text-xl md:text-2xl font-bold text-white">
                ¡Incluso sin saber leer partitura!
              </p>
          </div>

          {/* Hero Mockup */}
          <div className="mb-12 relative flex justify-center mt-6">
             <img 
               src={IMAGES.mockupMain} 
               alt="Música con Cristo - Repertorio Completo para Piano" 
               className="h-auto w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
             />
          </div>

          <div className="max-w-xl mx-auto mb-12">
            <h3 className="text-white font-bold mb-6 text-xl md:text-2xl text-center">Con Música con Cristo vas a:</h3>
            <div className="flex flex-col gap-3 text-left">
              {[
                "Empezar a tocar música católica en el piano sin teoría complicada",
                "Tocar con seguridad, incluso sin saber leer partitura",
                "Tener tonos prácticos y acordes funcionales para tocar con sencillez",
                "Armar tu repertorio con confianza — sin perderte eligiendo canciones",
                "Cuando vayas a servir en tu iglesia, tener todo organizado para todas las misas del año"
              ].map((benefit, i) => (
                <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-4 md:p-5 flex items-center gap-4 hover:bg-white/15 transition-colors">
                  <div className="shrink-0 text-[#10b981]">
                    <Check size={28} strokeWidth={4} />
                  </div>
                  <span className="text-gray-100 text-sm md:text-base font-medium leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-md mx-auto w-full">
            <a 
              onClick={scrollToPricing} 
              href="#pricing" 
              className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-black text-lg md:text-xl px-8 py-5 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-95 uppercase tracking-wide text-center"
            >
              Quiero mi repertorio para piano
            </a>
            
            <p className="text-gray-300 text-sm mt-5 mb-3">Recibes todo al instante, directo en tu</p>
            
            <div className="flex items-center gap-3">
               {/* Email Pill */}
               <div className="flex items-center gap-2 bg-[#2d3748] border border-gray-600 rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-[#374151] transition-colors">
                  <Mail size={16} className="text-white" />
                  <span>e-mail</span>
               </div>
               
               {/* WhatsApp Pill */}
               <div className="flex items-center gap-2 bg-[#2d3748] border border-gray-600 rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-[#374151] transition-colors">
                  <div className="bg-[#25D366] rounded-full p-0.5">
                    <MessageCircle size={14} className="text-white fill-white stroke-none" />
                  </div>
                  <span>WhatsApp</span>
               </div>
            </div>

            <p className="mt-8 text-xs text-white font-bold tracking-widest uppercase">
              ¡MÁS DE 1.000 CLIENTES!
            </p>
          </div>

        </div>
      </section>

      {/* Material Preview Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Mira uno de los materiales que recibirás en la práctica
          </h2>
          <p className="text-yellow-400 mb-12 font-medium">
            ✨ Adaptado al Calendario Litúrgico 2026 — canciones organizadas por tiempo litúrgico
          </p>

          <div className="relative group max-w-6xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
            
            <div className="flex overflow-hidden">
               <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] w-max py-4">
                  {carouselImages.map((src, i) => (
                    <img 
                      key={i} 
                      src={src} 
                      alt="Preview Material" 
                      className="h-[300px] md:h-[400px] w-auto rounded-lg shadow-xl border border-gray-700 transform transition-transform hover:scale-105 bg-gray-800" 
                    />
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid (Unique Material) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">RECIBIRÁS UN <span className="text-emerald-600 underline decoration-emerald-300">MATERIAL ÚNICO</span></h2>
                <p className="text-xl text-gray-600 font-medium">Repertorio católico listo para que aprendas tocando</p>
                <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
                   Organizado por <strong>tiempo litúrgico</strong> y <strong>momento de la Misa</strong>, 
                   con acordes revisados y funcionales — perfecto para principiantes.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {[
                  { icon: <Smartphone size={32} />, title: "Directo en el celular", desc: "Accede donde quieras" },
                  { icon: <Music size={32} />, title: "150+ Canciones", desc: "Con acordes para piano" },
                  { icon: <Calendar size={32} />, title: "Tiempo Litúrgico", desc: "Organizado por tiempos" },
                  { icon: <Check size={32} />, title: "Cifras Revisadas", desc: "Tonos prácticos + acordes funcionales" },
                  { icon: <Users size={32} />, title: "Partes de la Misa", desc: "Entrada, Ofertorio, Comunión, Final" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-center group">
                    <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        {item.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a onClick={scrollToPricing} href="#pricing" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105 uppercase text-sm tracking-wide">
                    Quiero mi repertorio para Piano
                </a>
            </div>
        </div>
      </section>

      {/* Structure Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
            Canciones con acordes y estructura clara para que toques en el piano
          </h2>
          <div className="space-y-2 mb-10">
              <p className="text-xl text-gray-700">No necesitas saber leer partitura</p>
              <p className="text-gray-500">
                Acordes revisados con <strong>tonos sugeridos</strong> y acordes funcionales.<br/>
                Abre el PDF y toca con seguridad.
              </p>
          </div>
          
          <div className="inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-2 rounded-full text-sm mb-12">
            ✨ Adaptado al Calendario Litúrgico 2026
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
             <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img src={IMAGES.sheetMusic1} alt="Ejemplo Cifra Piano" className="w-full rounded-lg" />
             </div>
             <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img src={IMAGES.sheetMusic2} alt="Ejemplo Cifra Piano 2" className="w-full rounded-lg" />
             </div>
          </div>
          
          <div className="mt-16">
            <a onClick={scrollToPricing} href="#pricing" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105 uppercase text-sm">
                Quiero mi repertorio para Piano
            </a>
          </div>
        </div>
      </section>

      {/* Urgency Timer */}
      <section className="bg-red-600 text-white py-12">
         <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="bg-white/20 p-3 rounded-full animate-pulse">
                    <Clock size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Aprovecha el precio promocional por tiempo limitado</h3>
                <div className="text-4xl md:text-5xl font-black font-mono tracking-widest">
                    00<span className="text-sm font-sans font-normal align-middle mx-2">Minutos</span>:<span className="mx-2"></span>00<span className="text-sm font-sans font-normal align-middle mx-2">Segundos</span>
                </div>
            </div>
         </div>
      </section>

      {/* Persona / Ideal For Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight uppercase">
                PARA QUIEN QUIERE TOCAR <span className="text-emerald-600 underline decoration-emerald-400">MÚSICA CATÓLICA</span> EN EL PIANO <br/>(Y SERVIR A DIOS CON SEGURIDAD)
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
                Ideal para principiantes, para quien no sabe leer partitura y para quien desea tener un repertorio listo y organizado para Misa, grupos y celebraciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: "🎹", 
                title: "Quien está empezando en el piano", 
                desc: "Aprende tocando: acordes simples, tonos prácticos y acordes funcionales — sin teoría complicada y sin partitura." 
              },
              { 
                icon: "🙏", 
                title: "Quien quiere servir en el ministerio", 
                desc: "El repertorio ya viene organizado. Dejas de trabarte al elegir y ganas confianza para tocar con reverencia." 
              },
              { 
                icon: "⛪", 
                title: "Quien toca en comunidades y parroquias", 
                desc: "Material completo para todo el año, organizado por tiempo litúrgico y por parte de la Misa." 
              },
              { 
                icon: "🎼", 
                title: "Quien busca la música correcta", 
                desc: "Evita la improvisación y repetición: usa bloques listos y elecciones seguras para cada celebración, en el tono correcto." 
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow">
                <div className="text-4xl shrink-0 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-full">{card.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">CONOCE <span className="text-emerald-400">MÚSICA CON CRISTO</span></h2>
             <p className="text-gray-400 text-lg">150+ Canciones Católicas con Acordes para Piano — organizadas para que aprendas y sirvas con seguridad</p>
           </div>
           
           <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="w-full lg:w-1/2">
                    <img src={IMAGES.mockupMain} alt="Bundle Completo" className="w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
               </div>
               
               <div className="w-full lg:w-1/2">
                   <div className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">Repertorio Completo</div>
                   <h3 className="text-2xl font-bold mb-8">Música con Cristo: 150+ Canciones con Acordes y Organizadas</h3>
                   
                   <ul className="space-y-4">
                      {[
                        "150+ canciones católicas con acordes y revisadas para tocar en el piano",
                        "Organización por Tiempo Litúrgico (Adviento, Navidad, Cuaresma, Pascua, Tiempo Común)",
                        "Organización por parte de la Misa (Entrada, Gloria, Salmo, Ofertorio, Comunión...)",
                        "Tonos prácticos para facilitar el canto de la asamblea",
                        "Acordes funcionales para piano (simples, claros y reverentes)",
                        "Bloques listos de canciones para celebraciones completas",
                        "Material en formato PDF Premium — fácil de acceder, descargar e imprimir",
                        "Acceso vitalicio",
                        "Ideal para principiantes o para quien no sabe leer partitura"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start text-gray-300">
                            <div className="bg-emerald-500 text-emerald-950 w-6 h-6 flex items-center justify-center rounded-full shrink-0 shadow-lg shadow-emerald-500/40 mt-0.5"><Check size={14} strokeWidth={4} /></div>
                            <span className="py-0.5">{item}</span>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-10">
                       <a onClick={scrollToPricing} href="#pricing" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 uppercase text-sm tracking-wide">
                         Quiero mi repertorio para Piano
                       </a>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500 text-white font-bold px-4 py-1 rounded-full text-xs mb-6 uppercase animate-pulse">
             ⚡ Oferta Válida Solamente Hoy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">¡Y no termina ahí... hay más!</h2>
          <p className="text-xl text-gray-600 mb-8">También recibirás <strong>3 bonos exclusivos</strong></p>
          
          <div className="mb-12 max-w-2xl mx-auto bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
             <p className="text-gray-500 text-sm mb-2">
               Valor total de los bonos si se vendieran por separado: <s className="text-red-500 font-bold">$ 57.00</s>
             </p>
             <p className="text-emerald-600 font-bold text-lg">
               ¡Recibes todo por <span className="bg-emerald-100 px-2 py-1 rounded text-emerald-800">$ 0.00</span> — totalmente gratis!
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {[
              { img: IMAGES.bonusPsalms, title: "53 Salmos con Acordes y Simplificados", price: "$ 19.00", desc: "53 salmos más recurrentes con acordes simplificados y tonos recomendados para piano. Esencial para no trabarte." },
              { img: IMAGES.bonusMarian, title: "20 Canciones Marianas (Piano)", price: "$ 19.00", desc: "Repertorio mariano para consagraciones, fiestas y celebraciones especiales, con acordes adaptados para piano." },
              { img: IMAGES.bonusGuide, title: "Guía de Cómo Cambiar de Tonalidad", price: "$ 19.00", desc: "Paso a paso práctico para transponer canciones en el piano y adaptar el tono a tu grupo — sin teoría complicada." }
            ].map((bonus, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                 <div className="bg-gray-100 rounded-xl mb-6 p-4 flex items-center justify-center h-48">
                    <img src={bonus.img} alt={bonus.title} className="max-h-full max-w-full object-contain shadow-md" />
                 </div>
                 <div className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full inline-block mb-4 self-start uppercase">BONO {i+1}</div>
                 <h3 className="text-lg font-bold mb-2 text-gray-900 leading-tight">{bonus.title}</h3>
                 <div className="flex items-center gap-3 mb-4 text-sm">
                   <span className="text-gray-400 line-through">De: {bonus.price}</span>
                   <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Por: $ 0.00</span>
                 </div>
                 <p className="text-sm text-gray-600 leading-relaxed">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white scroll-mt-10 relative">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gray-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
            
            {/* Promo Box */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl relative overflow-hidden mb-20 text-left md:text-center flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex-1">
                     <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">
                        <Clock size={14} /> Oferta por Tiempo Limitado
                     </div>
                     <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                        Aún hoy, vas a aprender a tocar<br/>tus primeras canciones católicas
                     </h2>
                     <p className="text-white/80 text-sm">No dejes pasar esta oportunidad única de servir a Dios con tu talento.</p>
                 </div>
                 <div className="flex-shrink-0">
                     <a href={CHECKOUT_LINKS.complete} onClick={handleInitiateCheckout} target="_blank" rel="noreferrer" className="inline-block bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg uppercase transition-transform hover:scale-105 active:scale-95">
                        Quiero aprender a tocar ahora
                     </a>
                 </div>
            </div>

            {/* Plans Header */}
            <div className="text-center mb-12">
                <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-4 py-1 rounded-full uppercase mb-4 tracking-wide">
                    🔥 Última Oportunidad — La Oferta Termina Hoy
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-tight">
                    ADQUIERE TU REPERTORIO PARA PIANO AHORA:
                </h2>
                <p className="text-gray-500 mt-2">Oferta especial de lanzamiento válida <span className="text-red-600 font-bold underline decoration-red-300">solamente hoy</span></p>
                
                <div className="mt-8 flex justify-center">
                    <div className="bg-blue-50 border border-blue-100 text-blue-900 px-6 py-4 rounded-xl shadow-sm max-w-2xl">
                        <p className="font-bold text-sm md:text-base uppercase tracking-wide flex items-center justify-center gap-2">
                            <span className="text-xl">🌎</span> 
                            Cuando accedas a la página de compra el precio se convierte automáticamente a tu moneda local
                        </p>
                    </div>
                </div>
            </div>

            {/* Plans Grid */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-end">
                
                {/* Basic Plan */}
                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg relative h-auto md:h-[90%] flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 text-center">MÚSICA CON CRISTO</h3>
                    <p className="text-gray-500 text-xs text-center mb-6 uppercase tracking-widest">Repertorio Básico</p>
                    
                    <div className="mb-6 flex justify-center">
                        <img src={IMAGES.mockupBasic} alt="Basic" className="h-48 object-contain" />
                    </div>
                    
                    <ul className="space-y-4 text-sm text-gray-600 mb-8 flex-1">
                        <li className="flex gap-3 items-start">
                            <div className="text-emerald-500 shrink-0 w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 mt-0.5"><Check size={12} strokeWidth={3}/></div> 
                            <span className="py-0.5">110+ canciones con acordes y partituras completas (pentagramas con notas musicales y claves)</span>
                        </li>
                        <li className="flex gap-3 items-start">
                             <div className="text-emerald-500 shrink-0 w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 mt-0.5"><Check size={12} strokeWidth={3}/></div> 
                             <span className="py-0.5">Adaptado al Calendario Litúrgico 2026</span>
                        </li>
                        <li className="flex gap-3 items-start">
                             <div className="text-emerald-500 shrink-0 w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 mt-0.5"><Check size={12} strokeWidth={3}/></div> 
                             <span className="py-0.5">Ideal para comenzar sin partitura</span>
                        </li>
                        <li className="flex gap-3 items-start">
                             <div className="text-emerald-500 shrink-0 w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 mt-0.5"><Check size={12} strokeWidth={3}/></div> 
                             <span className="py-0.5">Acceso vitalicio</span>
                        </li>
                    </ul>

                    <div className="text-center border-t border-gray-100 pt-6">
                        <p className="text-xs text-gray-400 line-through mb-1">de $ 27.00 por:</p>
                        <p className="text-4xl font-extrabold text-emerald-600">$7.90</p>
                        <p className="text-xs font-bold text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded mt-2">Ahorras $ 19.10</p>
                        
                        <a href={CHECKOUT_LINKS.basic} onClick={handleInitiateCheckout} target="_blank" rel="noreferrer" className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold py-4 rounded-xl shadow-lg uppercase transition-transform hover:scale-105 mt-6">
                            Quiero el Básico
                        </a>
                    </div>
                    
                    {/* FOMO Arrow */}
                    <div className="hidden md:flex absolute -right-4 top-1/2 transform translate-x-full items-center">
                        <div className="text-gray-400 text-sm italic w-24 text-center">
                            La mayoría elige este 👉
                        </div>
                    </div>
                </div>

                {/* Complete Plan */}
                <div id="complete-plan" className="bg-white border-2 border-emerald-500 rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4 z-10">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-wider">
                        Oferta de Lanzamiento
                    </div>
                    
                    <div className="text-center mt-6 mb-2">
                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded uppercase">Todos los bonos incluidos</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-1">MÚSICA CON CRISTO</h3>
                    <p className="text-emerald-600 text-xs text-center mb-6 font-bold uppercase tracking-widest">Repertorio Completo + 3 Bonos</p>
                    
                    <div className="mb-8 flex justify-center">
                        <img src={IMAGES.mockupMain} alt="Complete" className="h-64 object-contain drop-shadow-lg" />
                    </div>
                    
                    <div className="text-left space-y-4 text-sm text-gray-700 mb-8 px-2">
                        <p className="flex gap-3 items-start">
                            <span className="bg-emerald-100 text-emerald-600 w-6 h-6 flex items-center justify-center rounded-full shrink-0 shadow-sm mt-0.5">
                                <Check size={14} strokeWidth={3}/>
                            </span> 
                            <span className="py-0.5"><strong>150+ canciones católicas</strong> con acordes y partituras completas (pentagramas con notas musicales y claves)</span>
                        </p>
                        <p className="flex gap-3 items-start">
                            <span className="bg-emerald-100 text-emerald-600 w-6 h-6 flex items-center justify-center rounded-full shrink-0 shadow-sm mt-0.5">
                                <Check size={14} strokeWidth={3}/>
                            </span> 
                            <span className="py-0.5">Organización por <strong>Tiempo Litúrgico</strong></span>
                        </p>
                        <p className="flex gap-3 items-start">
                            <span className="bg-emerald-100 text-emerald-600 w-6 h-6 flex items-center justify-center rounded-full shrink-0 shadow-sm mt-0.5">
                                <Check size={14} strokeWidth={3}/>
                            </span> 
                            <span className="py-0.5">Separación por <strong>partes de la Misa</strong></span>
                        </p>
                        <p className="flex gap-3 items-start">
                            <span className="bg-emerald-100 text-emerald-600 w-6 h-6 flex items-center justify-center rounded-full shrink-0 shadow-sm mt-0.5">
                                <Check size={14} strokeWidth={3}/>
                            </span> 
                            <span className="py-0.5"><strong>Tonos prácticos</strong> y acordes funcionales</span>
                        </p>
                        
                        <div className="my-4 pt-4 border-t border-dashed border-gray-200">
                            <p className="flex gap-3 items-center text-emerald-700 font-medium mb-2"><Star size={14} className="fill-emerald-700"/> <span><strong>BONO 1:</strong> 53 Salmos con Acordes (Piano)</span></p>
                            <p className="flex gap-3 items-center text-emerald-700 font-medium mb-2"><Star size={14} className="fill-emerald-700"/> <span><strong>BONO 2:</strong> 20 Canciones Marianas (Piano)</span></p>
                            <p className="flex gap-3 items-center text-emerald-700 font-medium"><Star size={14} className="fill-emerald-700"/> <span><strong>BONO 3:</strong> Guía de Cambio de Tonalidad</span></p>
                        </div>
                        
                        <p className="flex gap-3 items-start">
                            <span className="bg-emerald-100 text-emerald-600 w-6 h-6 flex items-center justify-center rounded-full shrink-0 shadow-sm mt-0.5">
                                <Check size={14} strokeWidth={3}/>
                            </span> 
                            <span className="py-0.5"><strong>Más de 223 canciones en total</strong></span>
                        </p>
                    </div>

                    <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <p className="text-xs text-red-400 line-through mb-1">de $ 47.00 por:</p>
                        <div className="flex items-center justify-center gap-2">
                            <p className="text-5xl font-black text-emerald-600 tracking-tighter">$10.90</p>
                        </div>
                        <p className="text-xs font-bold text-emerald-700 bg-emerald-100 inline-block px-3 py-1 rounded-full mt-2">🔥 Ahorras $ 36.10</p>
                        
                        <a href={CHECKOUT_LINKS.complete} onClick={handleInitiateCheckout} target="_blank" rel="noreferrer" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-4 rounded-xl shadow-xl shadow-emerald-200 uppercase transition-all hover:scale-[1.02] mt-6">
                            Quiero el Completo
                        </a>

                        <div className="flex justify-center items-center gap-2 mt-4 text-[10px] text-gray-400 uppercase tracking-wide">
                             <Lock size={10} /> Compra 100% Segura
                        </div>
                    </div>
                    
                    <div className="mt-4 text-[10px] text-gray-400 text-center">
                        <span className="text-emerald-600 font-bold">⚡ Acceso Instantáneo</span> tras la compra<br/>
                        PDF premium — funciona en celular, tablet y computadora.
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Access Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Como será tu acceso</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
                { step: "1", title: "Compra", text: "Finaliza tu compra de forma segura y rápida." },
                { step: "2", title: "Recibe el enlace", text: "Recibe el enlace en tu e-mail o WhatsApp y entra al área de miembros." },
                { step: "3", title: "Descarga", text: "Descarga de inmediato todos los archivos en PDF." }
            ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-emerald-200">
                        {item.step}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
            ))}
          </div>
          <a onClick={scrollToPricing} href="#pricing" className="inline-block bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold px-10 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 uppercase text-sm tracking-wide">
            Quiero mi repertorio para piano
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Preguntas Frecuentes</h2>
          <Accordion items={[
            { question: "¿Cuál es la forma de pago?", answer: "Aceptamos tarjetas de crédito, débito, PayPal y métodos de pago locales en efectivo (dependiendo de tu país). Todo procesado de forma segura." },
            { question: "¿Sirve para quien es principiante en el piano?", answer: "¡Sí! El material fue desarrollado con acordes simplificados y funcionales, ideales para quien está comenzando." },
            { question: "¿Sirve para quien no sabe leer partitura?", answer: "¡Sí! No utilizamos partitura clásica, sino cifrado (letras que representan los acordes) y diagramas, lo que es mucho más fácil y rápido de aprender." },
            { question: "Aún no toco en la Misa. ¿Esto es para mí?", answer: "Sin duda. Tener un repertorio organizado y correcto es el primer paso para ganar seguridad y comenzar a servir." },
            { question: "¿El pago es seguro?", answer: "Sí. El checkout es procesado por Hotmart, la plataforma de productos digitales más grande y segura de Latinoamérica." },
            { question: "¿Tiene garantía?", answer: "Tienes 7 días de garantía incondicional. Si no te gusta, te devolvemos el dinero." },
            { question: "¿Cómo tendré acceso al material?", answer: "Tras el pago, recibes un e-mail de Hotmart con el enlace de acceso inmediato." },
            { question: "¿Puedo usarlo en el celular y también imprimir?", answer: "Sí, el material es en PDF de alta calidad, listo para cualquier dispositivo o impresión." },
            { question: "¿Las canciones son adecuadas litúrgicamente?", answer: "Sí, todo el repertorio fue revisado y adaptado al Calendario Litúrgico." },
            { question: "¿Los acordes están correctos?", answer: "Sí, todos los acordes fueron revisados y probados en el piano para asegurar que suenen bien." },
          ]} />
          <div className="mt-12 text-center">
             <a onClick={scrollToPricing} href="#pricing" className="inline-block bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold px-10 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 uppercase text-sm">
               Quiero mi repertorio para piano ahora
             </a>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-white text-center border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white border-2 border-emerald-500 rounded-3xl p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-emerald-100 w-24 h-24 rounded-full opacity-50 blur-xl"></div>
              
              <div className="w-20 h-20 mx-auto mb-6 bg-emerald-50 rounded-full flex items-center justify-center">
                 <ShieldCheck size={48} className="text-emerald-500" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Garantía de 7 Días — Riesgo Cero</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Si el repertorio no facilita tu camino musical (y tu preparación para servir en la iglesia), te devuelvo el 100% de tu dinero.
              </p>
              <div className="inline-block bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-lg uppercase tracking-wider">
                Sin preguntas • Sin burocracia
              </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Música Católica en el Piano — con organización, simplicidad y seguridad.
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Haz clic en el botón de abajo y obtén acceso inmediato a Música con Cristo (Piano): aprende tocando, incluso sin partitura.
          </p>
          <a onClick={scrollToPricing} href="#pricing" className="inline-block bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 uppercase">
            Quiero mi repertorio (Piano)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <a 
                href="https://wa.me/15407261554?text=Hola%20estoy%20interesado%20en%20las%20150%20Partituras%20Con%20Piano" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
            >
                <MessageCircle size={24} />
                <span>¿Tienes dudas? Hablemos por WhatsApp</span>
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-6">© 2026 Música con Cristo. Todos los derechos reservados.</p>
          <p className="max-w-2xl mx-auto text-xs text-gray-600 leading-relaxed">
            Este sitio no está afiliado a Facebook o a cualquier entidad de Facebook. Después de que salgas de Facebook, la responsabilidad no es de ellos sino de nuestro sitio. La compra de este material no garantiza ningún tipo de resultado. Hacemos todos los esfuerzos para indicar claramente y mostrar todas las pruebas del producto y usamos resultados reales de alumnos.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
