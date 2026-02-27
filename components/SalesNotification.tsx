import React, { useState, useEffect, useRef } from 'react';
import { Check, X } from './Icons';
import { NOTIFICATION_DATA } from '../constants';

const SalesNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', country: '', product: '', price: '', timeAgo: '' });
  
  // Refs to handle timers and stop state without triggering re-renders or stale closures
  const timeoutRef = useRef<number | null>(null);
  const isStopped = useRef(false);

  useEffect(() => {
    // Initial delay before the first notification
    const startTimeout = setTimeout(() => {
        cycleNotification();
    }, 1000);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const cycleNotification = () => {
    if (isStopped.current) return;

    // Prepare data
    const name = NOTIFICATION_DATA.names[Math.floor(Math.random() * NOTIFICATION_DATA.names.length)];
    const country = NOTIFICATION_DATA.countries[Math.floor(Math.random() * NOTIFICATION_DATA.countries.length)];
    
    // 80% chance for Complete, 20% for Basic
    const isComplete = Math.random() > 0.2;
    const product = isComplete ? "REPERTORIO COMPLETO" : "REPERTORIO BÁSICO";
    const price = isComplete ? "$10.90" : "$7.90";
    
    const timeAgo = "Hace un segundo";

    setData({ name, country, product, price, timeAgo });
    setVisible(true);

    // Stay visible for 4 seconds
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      
      // Wait 1 second before showing the next one, only if not stopped manually
      if (!isStopped.current) {
         timeoutRef.current = setTimeout(cycleNotification, 1000);
      }
    }, 4000) as unknown as number;
  };

  const handleClose = () => {
    setVisible(false);
    isStopped.current = true; // Permanently stop the cycle
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  if (!data.name) return null;

  return (
    <div className={`fixed bottom-4 left-4 z-50 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
      <div className="bg-white border border-gray-100 rounded-lg shadow-2xl p-4 flex items-start gap-4 max-w-[320px] md:max-w-sm relative overflow-hidden">
         {/* Green accent line on the left */}
         <div className="absolute top-0 bottom-0 left-0 w-1 bg-emerald-500"></div>
         
         {/* Icon */}
         <div className="bg-emerald-100 p-2 rounded-full flex-shrink-0 mt-0.5">
            <Check size={16} className="text-emerald-600" strokeWidth={3} />
         </div>
         
         {/* Content */}
         <div className="flex-1 pr-4">
            <p className="text-xs md:text-sm text-gray-800 leading-snug">
               <span className="font-bold">{data.name}</span> compró el <span className="font-bold text-emerald-600">{data.product}</span> por <span className="font-bold">{data.price}</span> desde <span className="font-bold">{data.country}</span>
            </p>
            <p className="text-[10px] text-gray-400 mt-1 font-medium flex items-center gap-1">
               {data.timeAgo}
               <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
               <span className="text-emerald-600">Compra Verificada</span>
            </p>
         </div>

         {/* Close button */}
         <button 
           onClick={handleClose} 
           className="absolute top-2 right-2 text-gray-300 hover:text-gray-500 transition-colors"
           aria-label="Cerrar notificación"
         >
            <X size={14} />
         </button>
      </div>
    </div>
  );
};

export default SalesNotification;