import React, { useEffect } from 'react';
import { IMAGES } from '../constants';
import { Check, ShieldCheck, Lock, AlertTriangle, ChevronDown, Clock, Star } from 'lucide-react';

const OneTimeOffer: React.FC = () => {
  
  const handleDecline = (e: React.MouseEvent) => {
    e.preventDefault();
    // Redirect to thank you page
    window.location.href = '/gracias';
  };

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

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-12">
      {/* Top Warning Bar */}
      <div className="bg-red-600 text-white text-center py-3 px-4 font-bold text-sm md:text-base animate-pulse flex items-center justify-center gap-2 sticky top-0 z-50 shadow-lg">
        <AlertTriangle size={20} fill="white" className="text-red-600" />
        ¡ALTO! NO CIERRES ESTA PÁGINA O PERDERÁS ESTA OPORTUNIDAD ÚNICA
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        
        {/* Progress Bar */}
        <div className="mb-8">
            <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">
                <span>Paso 1: Compra realizada</span>
                <span className="text-emerald-600">Paso 2: Oferta Especial</span>
                <span>Paso 3: Acceso</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-emerald-500 h-4 rounded-full w-[70%] relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[spin_1s_linear_infinite]" style={{animationDirection: 'reverse'}}></div>
                </div>
            </div>
            <div className="text-center mt-2 text-emerald-600 font-bold text-sm">
                CASI COMPLETADO...
            </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                ¡ESPERA! TU PEDIDO <span className="text-red-600 underline decoration-red-300">AÚN NO ESTÁ COMPLETO...</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Has tomado una gran decisión al adquirir el repertorio dominical, pero... 
                <strong>¿Qué pasa si te contratan para una Boda o un Funeral?</strong>
            </p>
        </div>

        {/* The Problem / Setup */}
        <div className="bg-white border-l-4 border-yellow-400 p-6 rounded-r-lg shadow-sm mb-10">
            <p className="text-gray-700 italic text-lg">
                "El músico promedio se sabe las canciones del domingo, pero si le piden tocar en un funeral (Misa de Exequias) o en una Boda, <strong>no tiene repertorio</strong> ni sabe qué cantos son los litúrgicamente correctos."
            </p>
        </div>

        {/* Product Box */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-10 relative">
            
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-8 py-1 transform rotate-45 translate-x-8 translate-y-4 shadow-md">
                OFERTA ÚNICA
            </div>

            <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
                    Pack Repertorios Premium
                </h2>
                <p className="text-center text-emerald-600 font-bold uppercase tracking-wider mb-8">
                    Bodas, XV Años y Misas de Difuntos
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                     <div className="w-full md:w-1/2">
                        {/* Placeholder for OTO Image */}
                        <img src={IMAGES.otoBundle} alt="Pack Premium" className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500" />
                     </div>
                     <div className="w-full md:w-1/2 space-y-4">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-start gap-3">
                            <Check className="text-emerald-500 shrink-0 mt-1" size={18} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Cantoral para Bodas con acordes</h4>
                                <p className="text-xs text-gray-500">Marcha Nupcial, entrega de anillos, comunión matrimonial.</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-start gap-3">
                            <Check className="text-emerald-500 shrink-0 mt-1" size={18} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Esquema misa de exequias</h4>
                                <p className="text-xs text-gray-500">Cantos de esperanza, Dale el descanso eterno, Hacia ti morada santa.</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-start gap-3">
                            <Check className="text-emerald-500 shrink-0 mt-1" size={18} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Cantos para XV años católico</h4>
                                <p className="text-xs text-gray-500">Repertorio juvenil y solemne para Quinceañeras.</p>
                            </div>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 flex items-start gap-3">
                            <Star className="text-yellow-500 shrink-0 mt-1 fill-yellow-500" size={18} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">BONUS: 100 Canciones de Mañana</h4>
                                <p className="text-xs text-gray-500">Para empezar el día de la mano de Dios.</p>
                            </div>
                        </div>
                     </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-600 mb-4 text-sm px-4">
                        Evita buscar en archivos desordenados. Obtén los esquemas exactos con las canciones que se permiten en estas ceremonias especiales.
                    </p>
                    
                    <div className="mb-6">
                        <span className="text-gray-400 line-through text-lg mr-2">Valor Normal: $27.00</span>
                        <br className="md:hidden"/>
                        <span className="text-4xl font-extrabold text-emerald-600">Hoy: $7.00</span>
                    </div>

                    {/* Hotmart Sales Funnel Widget */}
                    <div id="hotmart-sales-funnel" className="mb-4 min-h-[60px] w-full flex justify-center"></div>

                    <div className="flex justify-center items-center gap-2 text-gray-400 text-xs mb-6">
                        <Lock size={12} />
                        Pago Único - Acceso Inmediato - Garantía Total
                    </div>

                    <button 
                        onClick={handleDecline}
                        className="text-gray-400 hover:text-gray-600 text-sm underline decoration-gray-300 hover:decoration-gray-500 transition-all"
                    >
                        No gracias, prefiero no tener repertorio para Bodas y Funerales y arriesgarme.
                    </button>
                </div>
            </div>
            
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                 <p className="text-red-500 text-xs font-bold flex items-center justify-center gap-1">
                    <Clock size={12} />
                    Esta oferta no volverá a aparecer una vez cierres esta página.
                 </p>
            </div>
        </div>
        
        {/* Footer info */}
        <div className="text-center text-gray-400 text-xs pb-8">
            <p>Copyright 2026 - Música con Cristo</p>
        </div>

      </div>
    </div>
  );
};

export default OneTimeOffer;