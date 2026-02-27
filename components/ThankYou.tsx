import React from 'react';
import { Check, ShieldCheck } from './Icons';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-emerald-900 text-white py-4 text-center text-sm font-bold tracking-wider px-4">
         MÚSICA CON CRISTO
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full border border-gray-100">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-emerald-600" strokeWidth={3} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            ¡Gracias por tu compra!
          </h1>
          
          <p className="text-gray-600 mb-6 text-lg">
            Tu pedido ha sido confirmado exitosamente.
          </p>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-bold text-blue-900 mb-2">¿Qué sigue ahora?</h3>
            <p className="text-blue-800 text-sm mb-2">
              1. Revisa tu correo electrónico (bandeja de entrada, spam o promociones).
            </p>
            <p className="text-blue-800 text-sm">
              2. Encontrarás un email de <strong>Hotmart</strong> con tus datos de acceso al material.
            </p>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            ¿No encuentras el correo o tienes alguna duda?
          </p>

          <a 
            href="https://wa.me/15407261554?text=Hola,%20acabo%20de%20comprar%20el%20repertorio%20y%20necesito%20ayuda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="fill-current shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contactar Soporte por WhatsApp
          </a>
          
          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-400 text-xs">
            <ShieldCheck size={14} />
            <span>Compra 100% Segura y Garantizada</span>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 text-center text-gray-400 text-xs">
         © 2026 Música con Cristo. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default ThankYou;