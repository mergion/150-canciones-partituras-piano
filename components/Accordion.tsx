import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from './Icons';
import { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <button
            className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-gray-800 text-lg">{item.question}</span>
            {activeIndex === index ? (
              <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};