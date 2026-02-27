import React, { useEffect, useState, useRef } from 'react';
import { IMAGES } from '../constants';
import { AlertTriangle, Clock, Lock, MessageCircle, Check, X } from './Icons';

const OneTimeOffer2: React.FC = () => {
  const TOTAL_DURATION = 600; // 10 minutes in seconds

  const [timeLeft, setTimeLeft] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedEndTime = localStorage.getItem('oto2_endTime');
      if (savedEndTime) {
        const remaining = Math.max(0, Math.floor((parseInt(savedEndTime, 10) - Date.now()) / 1000));
        return remaining;
      }
    }
    return TOTAL_DURATION;
  });
  
  const [showNotification, setShowNotification] = useState(false);
  
  // Format seconds into MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    // Initialize end time if not present
    const savedEndTime = localStorage.getItem('oto2_endTime');
    if (!savedEndTime) {
      const endTime = Date.now() + TOTAL_DURATION * 1000;
      localStorage.setItem('oto2_endTime', endTime.toString());
    }

    // Timer logic
    const timer = setInterval(() => {
      const currentSavedEndTime = localStorage.getItem('oto2_endTime');
      if (currentSavedEndTime) {
        const remaining = Math.max(0, Math.floor((parseInt(currentSavedEndTime, 10) - Date.now()) / 1000));
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Notification logic
    const notifTimer = setTimeout(() => {
      setShowNotification(true);
      // Auto hide after 5 seconds
      setTimeout(() => setShowNotification(false), 5000);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(notifTimer);
  }, []);

  useEffect(() => {
    // Load Hotmart Sales Funnel Script
    const scriptId = 'hotmart-checkout-elements';
    const scriptSrc = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    
    const mountWidget = () => {
      if ((window as any).checkoutElements) {
        try {
          (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (error) {
          console.error("Hotmart widget mount error:", error);
        }
      }
    };

    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = scriptSrc;
      script.async = true;
      script.onload = mountWidget;
      document.body.appendChild(script);
    } else {
      if ((window as any).checkoutElements) {
        mountWidget();
      } else {
        script.addEventListener('load', mountWidget);
      }
    }
  }, []);

  const scrollToWidget = () => {
    const element = document.getElementById('hotmart-sales-funnel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const calculateProgress = () => {
    // Starts at 100%, goes to 0% over TOTAL_DURATION
    return (timeLeft / TOTAL_DURATION) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-40">
      
      {/* Top Warning Bar */}
      <div className="bg-[#D90404] text-white py-3 px-4 text-center sticky top-0 z-50 shadow-md">
        <p className="font-bold uppercase text-sm md:text-base flex items-center justify-center gap-2 animate-pulse">
          <AlertTriangle className="fill-white text-[#D90404]" size={20} />
          ¡ALTO! NO CIERRES ESTA PÁGINA O PERDERÁS ESTA OPORTUNIDAD ÚNICA
        </p>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden relative">
          <div className="bg-[#25D366] h-full w-[80%] relative">
            <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
          </div>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-700">
            CASI COMPLETADO - PASO 2 DE 2
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 mt-8 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-black text-[#1C1C1C] mb-4 leading-tight">
          ¡ESPERA! TU PEDIDO AÚN NO ESTÁ COMPLETO...
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Muchas personas que llevan el <strong>Repertorio Música con Cristo</strong> también aprovechan para llevar este paquete exclusivo de expansión, para que no solo sepas tocar las canciones, sino que <strong>profundices en tu fe</strong> con estudios bíblicos, oraciones y material educativo para toda la familia.
        </p>

        {/* Main Image */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
          <img src={IMAGES.oto2Main} alt="Paquete Completo OTO" className="w-full max-w-lg mx-auto rounded-lg shadow-2xl" />
        </div>

        {/* Offer Box */}
        <div className="bg-white rounded-xl shadow-xl border-2 border-[#F4B400] p-6 md:p-10 relative overflow-hidden">
          {/* Ribbon */}
          <div className="absolute top-0 right-0 bg-[#D90404] text-white px-12 py-2 transform translate-x-12 translate-y-6 rotate-45 text-sm font-bold shadow-md z-10">
            82% OFF
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#D90404] uppercase mb-2">OFERTA DE UNA SOLA VEZ</h2>
            <p className="text-gray-500 text-sm">Esta página es la única oportunidad de obtener estos 6 materiales juntos por este precio.</p>
          </div>

          {/* Grid of Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            
            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row gap-5 items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="flex-shrink-0 mx-auto sm:mx-0 relative">
                <div className="w-32 h-44 relative transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img src={IMAGES.oto2Card1} alt="Tarjetas Educativas para Niños" className="w-full h-full object-cover rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.3)]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-md"></div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">Tarjetas Educativas para Niños</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">Material visual, práctico y sencillo para que los más pequeños aprendan sobre la fe, valores bíblicos y principios cristianos. Ideal para familias, maestros y ministerios infantiles.</p>
                <div className="text-xs font-bold text-gray-400">Valor por separado: <span className="line-through text-red-400">$27.00</span></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row gap-5 items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="flex-shrink-0 mx-auto sm:mx-0 relative">
                <div className="w-32 h-44 relative transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img src={IMAGES.oto2Card2} alt="Guía: 150 Oraciones Poderosas" className="w-full h-full object-cover rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.3)]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-md"></div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">Guía: 150 Oraciones Poderosas</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">Una colección de oraciones para momentos de necesidad, agradecimiento, fortaleza, protección y crecimiento espiritual. Perfecta para enriquecer tu vida devocional diaria.</p>
                <div className="text-xs font-bold text-gray-400">Valor por separado: <span className="line-through text-red-400">$19.00</span></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col sm:flex-row gap-5 items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="flex-shrink-0 mx-auto sm:mx-0 relative">
                <div className="w-32 h-44 relative transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img src={IMAGES.oto2Card3} alt="230 Estudios de Teología" className="w-full h-full object-cover rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.3)]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-md"></div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">230 Estudios de Teología</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">Un material profundo y bien estructurado para quienes desean comprender la doctrina cristiana, los fundamentos de la fe y las enseñanzas clave de la Biblia.</p>
                <div className="text-xs font-bold text-gray-400">Valor por separado: <span className="line-through text-red-400">$29.90</span></div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col sm:flex-row gap-5 items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="flex-shrink-0 mx-auto sm:mx-0 relative">
                <div className="w-32 h-44 relative transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img src={IMAGES.oto2Card4} alt="66 Mapas Mentales Bíblicos" className="w-full h-full object-cover rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.3)]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-md"></div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">66 Mapas Mentales Bíblicos</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">Organiza tu aprendizaje con mapas visuales que te ayudan a recordar temas, personajes, líneas de tiempo y enseñanzas principales de cada libro.</p>
                <div className="text-xs font-bold text-gray-400">Valor por separado: <span className="line-through text-red-400">$21.10</span></div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col sm:flex-row gap-5 items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="flex-shrink-0 mx-auto sm:mx-0 relative">
                <div className="w-32 h-44 relative transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img src={IMAGES.oto2Card5} alt="Bono Exclusivo: Atmósferas de Adoración" className="w-full h-full object-cover rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.3)]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-md"></div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">Bono Exclusivo: Pack "Atmósferas de Adoración"</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">Una selección curada de playlists para cada momento espiritual: música para orar en la mañana, canciones de guerra espiritual, melodías para dormir en paz y alabanza para levantar el ánimo. Ahorra tiempo buscando; solo dale "play" y conecta.</p>
                <div className="text-xs font-bold text-gray-400">Valor por separado: <span className="line-through text-red-400">$15.00</span></div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col sm:flex-row gap-5 items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="flex-shrink-0 mx-auto sm:mx-0 relative">
                <div className="w-32 h-44 relative transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img src={IMAGES.oto2Card6} alt="Bono Premium: 5 Audio-Oraciones" className="w-full h-full object-cover rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.3)]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-md"></div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">Bono Premium: 5 Audio-Oraciones para el Alma</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">Lleva la oración contigo a donde vayas. Archivos de audio en alta calidad con oraciones guiadas para escuchar mientras conduces, cocinas o antes de dormir. Incluye oraciones por los hijos, por sanidad interior y para romper la ansiedad.</p>
                <div className="text-xs font-bold text-gray-400">Valor por separado: <span className="line-through text-red-400">$25.00</span></div>
              </div>
            </div>

          </div>

          {/* Pricing Box */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-center">
              <div>
                <span className="block text-gray-400 font-medium text-lg line-through">Valor Normal: $137.00</span>
                <span className="block text-[#D90404] font-bold text-sm">Si compras por separado</span>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-300"></div>
              <div>
                <span className="block text-[#25D366] font-black text-5xl">$17.00</span>
                <span className="block text-gray-600 font-medium uppercase tracking-wide text-xs">Pago Único - Acceso Vitalicio</span>
              </div>
            </div>
          </div>

          {/* Countdown Inline */}
          <div className="flex justify-center items-center gap-2 mb-6 text-[#D90404] font-bold animate-pulse">
            <Clock size={20} />
            <span>La oferta expira en: {formatTime(timeLeft)}</span>
          </div>

          {/* Hotmart Widget Container */}
          <div id="hotmart-sales-funnel" className="my-8 min-h-[150px] flex items-center justify-center">
            {/* Widget is injected here */}
          </div>

          {/* Secure Icon */}
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-400 text-xs">
            <Lock size={12} />
            <span>Pago 100% Seguro y Encriptado</span>
          </div>
        </div>

        {/* WhatsApp Support */}
        <div className="mt-12 mb-8">
          <h3 className="font-bold text-gray-800 mb-4">¿Tienes alguna duda sobre esta oferta?</h3>
          <a href="https://wa.me/message/A5YNJWPO7MY7F1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
            <MessageCircle size={18} />
            Hablar con Soporte en WhatsApp
          </a>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1C1C1C] text-white border-t-4 border-[#D90404] shadow-[0_-5px_20px_rgba(0,0,0,0.3)] z-50">
        {/* Footer Progress Bar */}
        <div className="w-full bg-gray-800 h-1">
          <div 
            className="bg-[#D90404] h-full transition-all duration-1000 ease-linear" 
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3 flex-shrink-0 justify-center md:justify-start">
            <div className="bg-[#D90404]/20 p-2 rounded-lg border border-[#D90404]">
              <Clock className="text-[#D90404] animate-pulse" size={24} />
            </div>
            <div>
              <p className="text-[#D90404] font-bold text-xs uppercase tracking-widest mb-0.5">Expira en:</p>
              <p className="text-2xl font-black font-mono leading-none tracking-widest text-white">{formatTime(timeLeft)}</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-300 font-medium leading-snug max-w-xl hidden sm:block">
            <span className="text-[#D90404] font-bold mr-1">⚠️ ATENCIÓN:</span>
            Esta oferta no volverá a aparecer cuando cierres esta página o cuando el contador llegue a cero.
          </p>
          <p className="text-xs text-gray-300 font-medium leading-snug sm:hidden">
            Esta oferta desaparece al llegar a cero.
          </p>
          
          <button 
            onClick={scrollToWidget}
            className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-2 px-6 rounded-full shadow-lg uppercase text-sm whitespace-nowrap transition-all hover:scale-105 active:scale-95 flex-shrink-0"
          >
            Añadir al Pedido
          </button>
        </div>
      </div>

      {/* Floating Notification */}
      <div className={`fixed z-[60] flex items-center gap-3 bg-white p-4 rounded-lg shadow-2xl border-l-4 border-[#25D366] max-w-sm transition-all duration-500 bottom-32 left-4 md:bottom-28 md:left-4 ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
        <button 
          onClick={() => setShowNotification(false)}
          className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
        >
          <X size={14} />
        </button>
        <div className="bg-green-100 p-2 rounded-full flex-shrink-0 flex items-center justify-center">
          <Check className="text-[#25D366]" size={24} />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">Santiago P. <span className="text-gray-500 font-normal">de Panamá</span></p>
          <p className="text-xs text-gray-600">Acaba de comprar por <span className="font-bold text-[#25D366]">la Oferta Única</span></p>
          <p className="text-[10px] text-gray-400 mt-1">Hace unos segundos</p>
        </div>
      </div>

    </div>
  );
};

export default OneTimeOffer2;