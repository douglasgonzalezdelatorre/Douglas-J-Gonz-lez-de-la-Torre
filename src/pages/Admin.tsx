import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Plus, Star, X, Edit, Check, Play } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Page } from '../types';

interface AdminProps {
  onNavigate: (page: Page) => void;
}

export const Admin: React.FC<AdminProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('Pendientes');
  const tabs = ['Pendientes', 'Aprobados', 'Rechazados'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark"
    >
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 border-b border-white/5">
        <button onClick={() => onNavigate('home')} className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer transition-opacity hover:opacity-80">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Gestión de Testimonios</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-full size-10 bg-surface-highlight text-primary hover:bg-primary hover:text-background-dark transition-colors duration-200">
            <Plus size={24} />
          </button>
        </div>
      </header>

      <div className="px-4 pt-6 pb-2">
        <h3 className="text-gray-900 dark:text-white tracking-tight text-2xl font-bold leading-tight mb-1">Hola, Douglas 👋</h3>
        <p className="text-gray-600 dark:text-[#92c9a4] text-sm font-normal leading-normal">Tienes <span className="font-bold text-primary">4 testimonios</span> pendientes de revisión hoy.</p>
      </div>

      <div className="px-4 py-4 sticky top-[70px] z-40 bg-background-light dark:bg-background-dark pb-2">
        <div className="flex h-11 w-full items-center justify-center rounded-xl bg-gray-200 dark:bg-surface-highlight p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all duration-200 ${
                filter === tab ? 'bg-white dark:bg-[#112217] shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-[#92c9a4]'
              }`}
            >
              <span className="truncate text-sm font-medium">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-20">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
            <div className={`absolute top-0 left-0 bottom-0 w-1 rounded-l-xl ${testimonial.status === 'pending' ? 'bg-yellow-500' : testimonial.status === 'approved' ? 'bg-primary' : 'bg-red-500'}`}></div>
            
            {testimonial.isVideo && (
              <div className="relative w-full h-32 bg-gray-800 bg-cover bg-center flex items-center justify-center mb-4 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${testimonial.avatar})` }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">VIDEO</div>
                <div className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-primary transition-colors text-white hover:text-black">
                  <Play size={20} className="fill-current" />
                </div>
              </div>
            )}

            <div className="flex items-start justify-between gap-3 mb-3 pl-2">
              <div className="flex gap-3">
                <div className="size-10 rounded-full bg-gray-200 overflow-hidden shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${testimonial.avatar})` }}></div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{testimonial.date}</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 dark:bg-surface-highlight px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                {testimonial.role}
              </div>
            </div>

            <div className="pl-2 mb-3">
              <div className="flex text-yellow-400 mb-2 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < Math.floor(testimonial.rating) ? 'fill-current' : 'text-gray-400 dark:text-gray-600'} />
                ))}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>

            <div className="pl-2 pt-2 border-t border-gray-100 dark:border-white/5 flex gap-2">
              <button className="flex-1 h-9 rounded-lg border border-red-500/30 text-red-500 dark:text-red-400 hover:bg-red-500/10 text-xs font-bold flex items-center justify-center gap-1 transition-colors">
                <X size={16} /> Rechazar
              </button>
              <button className="flex-1 h-9 rounded-lg bg-surface-highlight text-white hover:bg-surface-highlight/80 text-xs font-bold flex items-center justify-center gap-1 transition-colors">
                <Edit size={16} /> Editar
              </button>
              <button className="flex-1 h-9 rounded-lg bg-primary text-background-dark hover:bg-primary/90 text-xs font-bold flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(19,236,91,0.2)] transition-colors">
                <Check size={16} /> Aprobar
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
